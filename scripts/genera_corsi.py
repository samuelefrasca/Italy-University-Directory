#!/usr/bin/env python3
"""
Genera corsi_per_classe.json a partire dal CSV MUR (offerta_formativa.xlsx)
e dal file universita.json con le sigle.

Il CSV ha separatore ";" ed encoding latin-1.
Le colonne rilevanti:
  ANNO_VALIDITA, NomeOperativo, NUMERO (codice classe), DES (nome classe),
  NOME_CORSO, PROVINCIA, COMUNE, ACCESSO, DIDATTICA

Valori di ACCESSO:  "accesso libero" | "locale" | "nazionale"
Valori di DIDATTICA: "in presenza" | "mista" | "a distanza"
"""

import json
import sys
import re
from pathlib import Path

try:
    import pandas as pd
except ImportError:
    print("pip install pandas")
    sys.exit(1)

# ── Percorsi ──────────────────────────────────────────────────────────────────
CSV_PATH        = "/mnt/user-data/uploads/offerta_formativa.xlsx"
UNIV_JSON_PATH  = "/mnt/user-data/uploads/universita.json"
OUTPUT_JSON     = "/mnt/user-data/outputs/corsi_per_classe.json"
SKIPPED_LOG     = "/home/claude/skippati.json"

# ── Mappa manuale NomeOperativo → sigla ───────────────────────────────────────
# Costruita guardando tutti i 92 valori unici di NomeOperativo nel CSV
# e abbinandoli agli entry nel file universita.json.
MAPPING_NOMEOPERATIVO: dict[str, str] = {
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
    "Casamassima \x96 LUM G. Degennaro":             "LUM",
    "Casamassima  LUM G. Degennaro":               "LUM",
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
    "L\u2019Aquila":                               "UnivAq",   # apostrofo curvo
    "L'Aquila":                                    "UnivAq",   # apostrofo dritto
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
    "Napoli L\u2019Orientale":                     "UniOr",    # apostrofo curvo
    "Napoli L'Orientale":                          "UniOr",    # apostrofo dritto
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
    "Roma  Mercatorum - telematica":               "UniMercatorum",
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

# ── Conversione valori ACCESSO e DIDATTICA ────────────────────────────────────
def normalizza_accesso(val: str) -> bool:
    """Restituisce True se l'accesso è libero."""
    if pd.isna(val):
        return False
    v = str(val).strip().lower()
    return v == "accesso libero"

def normalizza_didattica(val: str) -> str:
    """Converte il valore grezzo di DIDATTICA nella stringa normalizzata."""
    if pd.isna(val):
        return "In presenza"
    v = str(val).strip().lower()
    if v == "in presenza":
        return "In presenza"
    elif v == "mista":
        return "Mista"
    elif v in ("a distanza", "a distanza (online)", "online"):
        return "A distanza"
    else:
        return v.capitalize()

# ── Caricamento universita.json ───────────────────────────────────────────────
with open(UNIV_JSON_PATH, encoding="utf-8") as f:
    atenei = json.load(f)

# Verifica che tutte le sigle usate nel mapping esistano davvero nel JSON
sigle_valide = {a["sigla"] for a in atenei}
for nome_op, sigla in MAPPING_NOMEOPERATIVO.items():
    if sigla not in sigle_valide:
        print(f"⚠  ATTENZIONE: sigla '{sigla}' per '{nome_op}' non trovata in universita.json")

# ── Caricamento CSV ────────────────────────────────────────────────────────────
print(f"Carico CSV: {CSV_PATH}")
df = pd.read_csv(CSV_PATH, sep=";", encoding="latin-1", dtype=str)
print(f"  Righe totali: {len(df)}")
print(f"  Colonne: {list(df.columns)}")

# Filtra anno più recente
COL_ANNO     = "ANNO_VALIDITA"
COL_NOME_OP  = "NomeOperativo"
COL_NUMERO   = "NUMERO"       # codice classe es. "L-1"
COL_DES      = "DES"          # nome classe es. "Beni culturali"
COL_CORSO    = "NOME_CORSO"
COL_PROVINCIA= "PROVINCIA"
COL_COMUNE   = "COMUNE"
COL_ACCESSO  = "ACCESSO"
COL_DIDATTICA= "DIDATTICA"
COL_LINGUA   = None           # non presente nel CSV; imposteremo default "Italiano"

anno_max = sorted(df[COL_ANNO].dropna().unique())[-1]
print(f"  Anno più recente: {anno_max}")
df = df[df[COL_ANNO] == anno_max].copy()
print(f"  Righe dopo filtro anno: {len(df)}")

# Rimuovi duplicati esatti
df = df.drop_duplicates(subset=[COL_NOME_OP, COL_NUMERO, COL_CORSO, COL_COMUNE, COL_ACCESSO, COL_DIDATTICA])
print(f"  Righe dopo dedup: {len(df)}")

# ── Costruzione output ─────────────────────────────────────────────────────────
corsi_per_classe: dict = {}
skippati: list = []

for idx, row in df.iterrows():
    nome_op = str(row[COL_NOME_OP]).strip() if pd.notna(row[COL_NOME_OP]) else ""
    sigla = MAPPING_NOMEOPERATIVO.get(nome_op)

    if not sigla:
        skippati.append({
            "riga_csv": int(idx),
            "NomeOperativo": nome_op,
            "NUMERO": str(row[COL_NUMERO]),
            "NOME_CORSO": str(row[COL_CORSO]),
        })
        continue

    codice_classe = str(row[COL_NUMERO]).strip() if pd.notna(row[COL_NUMERO]) else ""
    if not codice_classe or codice_classe.lower() == "nan":
        continue

    nome_classe = str(row[COL_DES]).strip() if pd.notna(row[COL_DES]) else ""

    # Sede: usiamo COMUNE (titolizzato)
    comune = str(row[COL_COMUNE]).strip().title() if pd.notna(row[COL_COMUNE]) else ""

    nome_corso = str(row[COL_CORSO]).strip() if pd.notna(row[COL_CORSO]) else ""

    accesso_libero = normalizza_accesso(row[COL_ACCESSO])
    didattica      = normalizza_didattica(row[COL_DIDATTICA])
    lingua         = "Italiano"   # il CSV non ha colonna lingua

    if codice_classe not in corsi_per_classe:
        corsi_per_classe[codice_classe] = {
            "codice": codice_classe,
            "nome": nome_classe,
            "offerte": []
        }

    corsi_per_classe[codice_classe]["offerte"].append({
        "universita":   sigla,
        "nomeCorso":    nome_corso,
        "sede":         comune,
        "didattica":    didattica,
        "lingua":       lingua,
        "accessoLibero": accesso_libero,
    })

# ── Deduplica offerte e ordina ─────────────────────────────────────────────────
for codice in corsi_per_classe:
    viste: set = set()
    offerte_uniche = []
    for o in corsi_per_classe[codice]["offerte"]:
        chiave = (o["universita"], o["nomeCorso"], o["sede"], o["didattica"], o["lingua"])
        if chiave not in viste:
            viste.add(chiave)
            offerte_uniche.append(o)
    offerte_uniche.sort(key=lambda x: (x["universita"], x["nomeCorso"], x["sede"]))
    corsi_per_classe[codice]["offerte"] = offerte_uniche

# Ordina le classi per codice
corsi_per_classe = dict(sorted(corsi_per_classe.items(), key=lambda x: x[0]))

# ── Salvataggio ───────────────────────────────────────────────────────────────
Path("/mnt/user-data/outputs").mkdir(parents=True, exist_ok=True)
with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(corsi_per_classe, f, ensure_ascii=False, indent=2)

with open(SKIPPED_LOG, "w", encoding="utf-8") as f:
    json.dump(skippati, f, ensure_ascii=False, indent=2)

# ── Statistiche ───────────────────────────────────────────────────────────────
totale_offerte = sum(len(v["offerte"]) for v in corsi_per_classe.values())
print("\n── RISULTATI ──────────────────────────────────────────────────────")
print(f"  Classi scritte:   {len(corsi_per_classe)}")
print(f"  Offerte totali:   {totale_offerte}")
print(f"  Righe saltate:    {len(skippati)}")
print(f"  Output:           {OUTPUT_JSON}")

if skippati:
    nomi_sconosciuti = sorted({s["NomeOperativo"] for s in skippati})
    print(f"\n  NomeOperativo NON mappati ({len(nomi_sconosciuti)}):")
    for n in nomi_sconosciuti:
        print(f"    - '{n}'")
else:
    print("\n  ✅ Nessun corso saltato!")

print("\n── Anteprima prima classe ─────────────────────────────────────────")
prima_classe = next(iter(corsi_per_classe.values()))
print(json.dumps({prima_classe["codice"]: prima_classe}, ensure_ascii=False, indent=2)[:800])
