#!/usr/bin/env python3
"""
Genera corsi_per_classe.json a partire dal CSV MUR "offertaformativa-corsidilaurea_2010-2025.csv"
(dati USTAT) e, se presente, controlla le sigle con universita.json.

Il CSV ha separatore ";" ed encoding cp1252 (con ripiego su latin-1).
Colonne usate:
  ANNO, Ateneo, Area, GruppoDisciplinare, Classe, NomeClasse, Corso,
  SedeCorso_Comune, ACCESSO, DIDATTICA, LINGUA
(TipoCorso e SedeCorso_Provincia ci sono nel file ma qui non servono.)

Valori di ACCESSO:   "accesso libero" | "locale" | "nazionale"
Valori di DIDATTICA: "Convenzionale" | "Blended/Modalità Mista"
                     | "Prevalentemente a distanza" | "Teledidattica"
"""

import json
import re
import sys
import unicodedata
from pathlib import Path

try:
    import pandas as pd
except ImportError:
    print("pip install pandas")
    sys.exit(1)

# ── Percorsi (modificali se serve) ────────────────────────────────────────────
CSV_PATH       = "/mnt/user-data/uploads/03_offertaformativa-corsidilaurea_2010-2025.csv"
UNIV_JSON_PATH = "/mnt/user-data/uploads/universita.json"   # opzionale: serve solo al controllo sigle
OUTPUT_JSON    = "/mnt/user-data/outputs/corsi_per_classe.json"
SKIPPED_LOG    = "/mnt/user-data/outputs/skippati.json"

# ── Mappa Ateneo → sigla ──────────────────────────────────────────────────────
MAPPING_ATENEO: dict[str, str] = {
    "Aosta":                                       "UniVdA",
    "Bari":                                        "UniBa",
    "Bari Politecnico":                            "PoliBa",
    "Basilicata":                                  "UniBas",
    "Benevento Giustino Fortunato - telematica":   "Unifortunato",
    "Bergamo":                                     "UniBg",
    "Bologna":                                     "UniBo",
    "Bolzano":                                     "UniBz",
    "Bra Scienze Gastronomiche":                   "UniSG",
    "Brescia":                                     "UniBs",
    "Ca' Foscari Venezia":                         "UniVe",
    "Cagliari":                                    "UniCa",
    "Calabria":                                    "UniCal",
    "Camerino":                                    "UniCam",
    "Casamassima - LUM G. Degennaro":              "LUM",
    "Cassino":                                     "UniCas",
    "Castellanza LIUC":                            "LIUC",
    "Catania":                                     "UniCt",
    "Catanzaro":                                   "UniCz",
    "Chieti e Pescara":                            "UniCh",
    "Enna KORE":                                   "UKE",
    "Ferrara":                                     "UniFe",
    "Firenze":                                     "UniFi",
    "Firenze IUL - telematica":                    "IUL",
    "Foggia":                                      "UniFg",
    "Genova":                                      "UniGe",
    "Insubria":                                    "Uninsubria",
    "L'Aquila":                                    "UnivAq",
    "Macerata":                                    "UniMc",
    "Marche":                                      "UnivPM",
    "Messina":                                     "UniMe",
    "Milano":                                      "UniMi",
    "Milano Bicocca":                              "UniMiB",
    "Milano Bocconi":                              "Bocconi",
    "Milano Cattolica":                            "UniCatt",
    "Milano IULM":                                 "IULM",
    "Milano Politecnico":                          "PoliMi",
    "Milano San Raffaele":                         "UniSR",
    "Modena e Reggio Emilia":                      "UniMoRe",
    "Molise":                                      "UniMol",
    "Napoli Benincasa":                            "UniSob",
    "Napoli Federico II":                          "UniNa",
    "Napoli L'Orientale":                          "UniOr",
    "Napoli Parthenope":                           "UniParthenope",
    "Napoli Pegaso - telematica":                  "UniPegaso",
    "Napoli Vanvitelli":                           "UniCampania",
    "Novedrate e-Campus - telematica":             "Uni-eCampus",
    "Padova":                                      "UniPd",
    "Palermo":                                     "UniPa",
    "Parma":                                       "UniPr",
    "Pavia":                                       "UniPv",
    "Perugia":                                     "UniPg",
    "Perugia Stranieri":                           "UniStraPg",
    "Piemonte Orientale":                          "UPO",
    "Pisa":                                        "UniPi",
    "Reggio Calabria":                             "UniRc",
    "Reggio Calabria - Dante Alighieri":           "UniDa",
    "Roma Mercatorum - telematica":                "UniMercatorum",
    "Roma Biomedico":                              "UCBM",
    "Roma Europea":                                "UER",
    "Roma Foro Italico":                           "UniRoma4",
    "Roma LUMSA":                                  "LUMSA",
    "Roma La Sapienza":                            "UniRoma1",
    "Roma Link Campus":                            "Link",
    "Roma Luiss":                                  "LUISS",
    "Roma Marconi - telematica":                   "Unimarconi",
    "Roma Saint Camillus":                         "UniCamillus",
    "Roma San Raffaele - telematica":              "UniRoma5",
    "Roma Tor Vergata":                            "UniRoma2",
    "Roma Tre":                                    "UniRoma3",
    "Roma UNICUSANO - telematica":                 "Unicusano",
    "Roma UNINETTUNO - telematica":                "UTIU",
    "Roma UNINT":                                  "UnInt",
    "Roma UNITELMA - telematica":                  "Unitelma",
    "Rozzano (MI) Humanitas University":           "Hunimed",
    "Salento":                                     "UniSalento",
    "Salerno":                                     "UniSa",
    "Sannio":                                      "UniSannio",
    "Sassari":                                     "UniSs",
    "Siena":                                       "UniSi",
    "Siena Stranieri":                             "UniStraSi",
    "Teramo":                                      "UniTe",
    "Torino":                                      "UniTo",
    "Torino Politecnico":                          "PoliTo",
    "Torrevecchia Teatina Leonardo da Vinci - telematica": "Unidav",
    "Trento":                                      "UniTn",
    "Trieste":                                     "UniTs",
    "Tuscia":                                      "UniTus",
    "Udine":                                       "UniUd",
    "Urbino":                                      "UniUrb",
    "Venezia Iuav":                                "Iuav",
    "Verona":                                      "UniVr",
}


def chiave(nome: str) -> str:
    """Forma normalizzata per confrontare i nomi degli atenei.

    Toglie maiuscole, spazi e trattini di ogni tipo (anche il byte \\x96 di latin-1)
    e uniforma l'apostrofo, così "RomaMercatorum" e "Roma  Mercatorum" coincidono
    e "Casamassima – LUM" coincide con "Casamassima - LUM".
    """
    n = unicodedata.normalize("NFC", str(nome))
    n = n.replace("\u2019", "'").replace("\u2018", "'")
    n = re.sub(r"[\s\-\u2010-\u2015\x96\x97]+", "", n)
    return n.lower()


MAPPA_NORMALIZZATA: dict[str, str] = {}
for nome_atenero, sigla_atenero in MAPPING_ATENEO.items():
    k = chiave(nome_atenero)
    if k in MAPPA_NORMALIZZATA and MAPPA_NORMALIZZATA[k] != sigla_atenero:
        raise SystemExit(f"Collisione nelle chiavi normalizzate: {nome_atenero}")
    MAPPA_NORMALIZZATA[k] = sigla_atenero


# ── Conversione valori ACCESSO, DIDATTICA, LINGUA ─────────────────────────────
def normalizza_accesso(val) -> bool:
    """True se l'accesso è libero (le altre voci sono 'locale' e 'nazionale')."""
    if pd.isna(val):
        return False
    return str(val).strip().lower() == "accesso libero"


DIDATTICA_MAP = {
    "convenzionale":               "In presenza",
    "blended/modalità mista":      "Mista",
    "prevalentemente a distanza":  "A distanza",
    "teledidattica":               "A distanza",
}
didattica_sconosciuti: set = set()


def normalizza_didattica(val) -> str:
    if pd.isna(val):
        return "In presenza"
    v = str(val).strip().lower()
    if v in DIDATTICA_MAP:
        return DIDATTICA_MAP[v]
    didattica_sconosciuti.add(str(val))
    return str(val).strip()


def normalizza_lingua(val) -> str:
    """'Italiano - Inglese' -> 'Italiano, Inglese'. Se manca, 'Italiano'."""
    if pd.isna(val) or not str(val).strip():
        return "Italiano"
    return re.sub(r"\s*-\s*", ", ", str(val).strip())


def testo(val) -> str:
    return str(val).strip() if pd.notna(val) else ""


# ── Caricamento CSV ───────────────────────────────────────────────────────────
print(f"Carico CSV: {CSV_PATH}")
try:
    df = pd.read_csv(CSV_PATH, sep=";", encoding="cp1252", dtype=str)
except UnicodeDecodeError:
    df = pd.read_csv(CSV_PATH, sep=";", encoding="latin-1", dtype=str)
print(f"  Righe totali: {len(df)}")
print(f"  Colonne: {list(df.columns)}")

COL_ANNO      = "ANNO"
COL_ATENEO    = "Ateneo"
COL_AREA      = "Area"
COL_GRUPPO    = "GruppoDisciplinare"
COL_NUMERO    = "Classe"
COL_DES       = "NomeClasse"
COL_CORSO     = "Corso"
COL_COMUNE    = "SedeCorso_Comune"
COL_ACCESSO   = "ACCESSO"
COL_DIDATTICA = "DIDATTICA"
COL_LINGUA    = "LINGUA"

mancanti = [c for c in (COL_ANNO, COL_ATENEO, COL_AREA, COL_GRUPPO, COL_NUMERO, COL_DES,
                        COL_CORSO, COL_COMUNE, COL_ACCESSO, COL_DIDATTICA, COL_LINGUA)
            if c not in df.columns]
if mancanti:
    raise SystemExit(f"Colonne mancanti nel CSV: {mancanti}")

# Solo l'anno più recente (il file contiene tutti gli anni dal 2010)
anno_max = max(df[COL_ANNO].dropna().unique(), key=int)
print(f"  Anno più recente: {anno_max}")
df = df[df[COL_ANNO] == anno_max].copy()
print(f"  Righe dopo filtro anno: {len(df)}")

# Duplicati esatti sulle colonne che finiscono nell'output
df = df.drop_duplicates(subset=[COL_ATENEO, COL_NUMERO, COL_CORSO, COL_COMUNE,
                                COL_ACCESSO, COL_DIDATTICA, COL_LINGUA])
print(f"  Righe dopo dedup: {len(df)}")

# ── Costruzione output ────────────────────────────────────────────────────────
corsi_per_classe: dict = {}
skippati: list = []

for idx, row in df.iterrows():
    nome_ateneo = testo(row[COL_ATENEO])
    sigla = MAPPA_NORMALIZZATA.get(chiave(nome_ateneo))

    if not sigla:
        skippati.append({
            "riga_csv": int(idx),
            "Ateneo": nome_ateneo,
            "Classe": testo(row[COL_NUMERO]),
            "Corso": testo(row[COL_CORSO]),
        })
        continue

    codice_classe = testo(row[COL_NUMERO])
    if not codice_classe or codice_classe.lower() == "nan":
        continue

    if codice_classe not in corsi_per_classe:
        corsi_per_classe[codice_classe] = {
            "codice": codice_classe,
            "nome":   testo(row[COL_DES]),
            "area":   testo(row[COL_AREA]),
            "gruppo": testo(row[COL_GRUPPO]),
            "offerte": [],
        }

    corsi_per_classe[codice_classe]["offerte"].append({
        "universita":    sigla,
        "nomeCorso":     testo(row[COL_CORSO]),
        "sede":          testo(row[COL_COMUNE]).title(),
        "didattica":     normalizza_didattica(row[COL_DIDATTICA]),
        "lingua":        normalizza_lingua(row[COL_LINGUA]),
        "accessoLibero": normalizza_accesso(row[COL_ACCESSO]),
    })

# ── Deduplica offerte per classe e ordina ─────────────────────────────────────
# La chiave comprende anche accessoLibero, così due righe che differiscono
# solo per l'accesso non vengono fuse.
righe_prima = sum(len(v["offerte"]) for v in corsi_per_classe.values())
for codice in corsi_per_classe:
    viste: set = set()
    uniche = []
    for o in corsi_per_classe[codice]["offerte"]:
        k = (o["universita"], o["nomeCorso"], o["sede"], o["didattica"], o["lingua"], o["accessoLibero"])
        if k not in viste:
            viste.add(k)
            uniche.append(o)
    uniche.sort(key=lambda x: (x["universita"], x["nomeCorso"], x["sede"]))
    corsi_per_classe[codice]["offerte"] = uniche

corsi_per_classe = dict(sorted(corsi_per_classe.items(), key=lambda x: x[0]))

# ── Salvataggio ───────────────────────────────────────────────────────────────
Path(OUTPUT_JSON).parent.mkdir(parents=True, exist_ok=True)
with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(corsi_per_classe, f, ensure_ascii=False, indent=2)
with open(SKIPPED_LOG, "w", encoding="utf-8") as f:
    json.dump(skippati, f, ensure_ascii=False, indent=2)

# ── Controllo sigle (solo se universita.json è disponibile) ───────────────────
if Path(UNIV_JSON_PATH).exists():
    with open(UNIV_JSON_PATH, encoding="utf-8") as f:
        sigle_valide = {a["sigla"] for a in json.load(f)}
    sbagliate = {(n, s) for n, s in MAPPING_ATENEO.items() if s not in sigle_valide}
    for n, s in sorted(sbagliate):
        print(f"⚠  sigla '{s}' per '{n}' non trovata in universita.json")
    if not sbagliate:
        print("✅ Tutte le sigle del mapping esistono in universita.json")
else:
    print(f"(controllo sigle saltato: {UNIV_JSON_PATH} non trovato)")

# ── Statistiche ───────────────────────────────────────────────────────────────
totale_offerte = sum(len(v["offerte"]) for v in corsi_per_classe.values())
print("\n── RISULTATI ──────────────────────────────────────────────────────")
print(f"  Classi scritte:                 {len(corsi_per_classe)}")
print(f"  Offerte totali:                 {totale_offerte}")
print(f"  (di cui scartate come doppie:   {righe_prima - totale_offerte})")
print(f"  Righe saltate (ateneo ignoto):  {len(skippati)}")
print(f"  Output:                         {OUTPUT_JSON}")

if didattica_sconosciuti:
    print(f"\n  ⚠ Valori DIDATTICA non previsti: {sorted(didattica_sconosciuti)}")
if skippati:
    print(f"\n  Ateneo NON mappati ({len({s['Ateneo'] for s in skippati})}):")
    for n in sorted({s["Ateneo"] for s in skippati}):
        print(f"    - '{n}'")
else:
    print("\n  ✅ Nessun corso saltato!")
