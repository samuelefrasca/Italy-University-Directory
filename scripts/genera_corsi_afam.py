#!/usr/bin/env python3
"""
Genera corsi_afam_per_area.json a partire dal CSV USTAT degli iscritti AFAM
(iscritti per corso, per genere) e dal file universita.json con le sigle.

Il CSV ha separatore "," ed encoding UTF-8 (con BOM).
Le colonne rilevanti:
  ANNO_ACCADEMICO, TIPO_ISTITUTO, NOME_ISTITUTO, COMUNE_SEDE, COD_ISTITUTO,
  AREA_CORSO, TIPO_CORSO, SCUOLA, CLASSE, CORSO, GENERE, ISCRITTI

A differenza del CSV MUR (offerta_formativa), questo dataset:
  - non ha campi ACCESSO / DIDATTICA / LINGUA -> non li includiamo nell'output
  - ha una riga per genere (M/F) per ogni corso -> l'ISCRITTI non ci interessa,
    la dedup finale sulle offerte collassa automaticamente le coppie M/F
  - va raggruppato per AREA_CORSO, e dentro ogni area per CLASSE (codice)

L'identificativo istituto affidabile è COD_ISTITUTO (non NOME_ISTITUTO, che è
vuoto per ~4.700 righe, soprattutto Accademie di Belle Arti statali e Conservatori).
"""

import json
import sys
from pathlib import Path

try:
    import pandas as pd
except ImportError:
    print("pip install pandas")
    sys.exit(1)

# ── Percorsi ──────────────────────────────────────────────────────────────────
SCRIPT_DIR     = Path(__file__).resolve().parent
DATA_DIR       = SCRIPT_DIR.parent / "data"
CSV_PATH       = DATA_DIR / "offerta_formativa_afam_mur.csv"
UNIV_JSON_PATH = DATA_DIR / "universita.json"
OUTPUT_JSON    = DATA_DIR / "corsi_afam_per_area.json"
SKIPPED_LOG    = DATA_DIR / "skippati_afam.json"

# ── Solo i corsi di diploma accademico (equivalenti a laurea/laurea magistrale) ─
# Esclusi: Vecchio Ordinamento (ad esaurimento), Master/Perfezionamento,
# Dottorato di Ricerca, corsi sperimentali (ad esaurimento).
TIPI_CORSO_VALIDI = {
    "AFAM_Corso Diploma accademico 1L",
    "AFAM_Corso Diploma accademico 2L",
    "AFAM_Corso Diploma accademico a ciclo unico quinquennale abilitante_2L",
}

# ── Mappa manuale COD_ISTITUTO → sigla ────────────────────────────────────────
# Costruita guardando tutti i 191 COD_ISTITUTO unici del CSV (su tutti gli aa.aa.
# disponibili, 2020/21-2024/25) e abbinandoli agli istituti elencati su
# unidirectory.it (/uni/abastatali, /conservatori, /accnazionali, /isia, /afamprivati).
#
# Alcuni istituti compaiono con due COD_ISTITUTO diversi nel tempo (es. un'Accademia
# "legalmente riconosciuta" poi diventata statale): entrambi i codici puntano alla
# stessa sigla, quella attuale su unidirectory.it. Le "sezioni staccate" (es. Brescia-
# Darfo, Foggia-Rodi Garganico) vengono anch'esse ricondotte alla sigla della sede
# principale, come fa unidirectory.it che le elenca come un'unica voce.
MAPPING_ISTITUTO: dict[str, str] = {

    # --- Accademie di Belle Arti statali -------------------------------------
    "7238":  "AbaBa",    # Bari
    "59090": "PAB",      # Bergamo (area artistica) - Politecnico delle Arti
    "7195":  "AbaBo",    # Bologna
    "7213":  "AbaCa",    # Carrara
    "7292":  "AbaCt",    # Catania
    "7212":  "AbaCz",    # Catanzaro
    "7243":  "AbaFi",    # Firenze
    "7245":  "AbaFg",    # Foggia
    "7310":  "AbaFr",    # Frosinone
    "54188": "AbaGe",    # Genova (Ligustica) - codice attuale
    "7267":  "AbaGe",    # Genova (Ligustica) - codice storico (legalmente riconosciuta)
    "7237":  "Abaq",     # L'Aquila
    "7321":  "AbaLe",    # Lecce
    "7297":  "AbaMc",    # Macerata
    "7299":  "AbaMi",    # Milano (Brera)
    "7316":  "AbaNa",    # Napoli
    "7219":  "AbaPa",    # Palermo
    "54186": "AbaPg",    # Perugia (Pietro Vannucci) - codice attuale
    "7234":  "AbaPg",    # Perugia (Pietro Vannucci) - codice storico
    "54189": "AbaRa",    # Ravenna - codice attuale
    "7291":  "AbaRa",    # Ravenna - codice storico (legalmente riconosciuta)
    "7194":  "AbaRc",    # Reggio Calabria
    "7295":  "AbaRm",    # Roma
    "7240":  "AbaSs",    # Sassari (Mario Sironi)
    "7334":  "AbaTo",    # Torino (Albertina)
    "7318":  "AbaUr",    # Urbino
    "7196":  "AbaVe",    # Venezia
    "54187": "AbaVr",    # Verona - codice attuale
    "7306":  "AbaVr",    # Verona - codice storico (legalmente riconosciuta)
    "7313":  "PAB",      # Bergamo (Carrara) - codice storico pre-Politecnico delle Arti
    "7315":  "PAB",      # Bergamo (Donizetti, Ist. Musicale Pareggiato) - codice storico

    # --- Conservatori statali di musica ---------------------------------------
    "7198":  "ConsAd",   # Adria
    "7262":  "ConsAl",   # Alessandria
    "7257":  "ConsAv",   # Avellino
    "7305":  "ConsBa",   # Bari
    "7301":  "ConsBn",   # Benevento
    "54190": "PAB",      # Bergamo (area musicale) - Politecnico delle Arti
    "7199":  "ConsBo",   # Bologna
    "7270":  "ConsBz",   # Bolzano
    "7300":  "ConsBs",   # Brescia
    "7242":  "ConsBs",   # Brescia - Darfo Boario Terme (sezione staccata)
    "7320":  "ConsCa",   # Cagliari
    "54185": "ConsCl",   # Caltanissetta - codice attuale
    "7329":  "ConsCl",   # Caltanissetta - codice storico (Ist. Musicale Pareggiato)
    "7210":  "ConsCb",   # Campobasso
    "7201":  "ConsCfv",  # Castelfranco Veneto
    "54170": "ConsCt",   # Catania - codice attuale
    "7224":  "ConsCt",   # Catania - codice storico (Ist. Musicale Pareggiato)
    "7202":  "ConsCeRi", # Cesena (confluito nel Conservatorio Cesena-Rimini)
    "57930": "ConsCeRi", # Cesena e Rimini - codice attuale (istituto unificato)
    "54176": "ConsCeRi", # Rimini - codice statale pre-unificazione
    "7319":  "ConsCeRi", # Rimini - codice storico (Ist. Musicale Pareggiato)
    "7304":  "ConsCo",   # Como
    "7209":  "ConsCs",   # Cosenza
    "54178": "ConsCr",   # Cremona - codice attuale
    "7249":  "ConsCr",   # Cremona - codice storico (Ist. Musicale Pareggiato)
    "7324":  "ConsCn",   # Cuneo
    "7203":  "ConsFm",   # Fermo
    "7258":  "ConsFe",   # Ferrara
    "7326":  "ConsFi",   # Firenze
    "7322":  "ConsFg",   # Foggia
    "7328":  "ConsFg",   # Foggia - Rodi Garganico (sezione staccata)
    "7331":  "ConsFr",   # Frosinone
    "54171": "ConsGa",   # Gallarate - codice attuale
    "7323":  "ConsGa",   # Gallarate - codice storico (Ist. Musicale Pareggiato)
    "7293":  "ConsGe",   # Genova
    "7204":  "ConsAq",   # L'Aquila
    "7246":  "ConsSp",   # La Spezia
    "7286":  "ConsLt",   # Latina
    "7239":  "ConsLe",   # Lecce
    "49350": "ConsLe",   # Lecce - Ceglie Messapica (sezione staccata)
    "54172": "ConsLi",   # Livorno - codice attuale
    "7298":  "ConsLi",   # Livorno - codice storico (Ist. Musicale Pareggiato)
    "54183": "ConsLu",   # Lucca - codice attuale
    "7268":  "ConsLu",   # Lucca - codice storico (Ist. Musicale Pareggiato)
    "7333":  "ConsMn",   # Mantova
    "7271":  "ConsMt",   # Matera
    "7290":  "ConsMe",   # Messina
    "7250":  "ConsMi",   # Milano
    "54182": "ConsMoCa", # Modena e Carpi - codice attuale
    "7264":  "ConsMoCa", # Modena e Carpi - codice storico (Ist. Musicale Pareggiato)
    "7259":  "ConsMo",   # Monopoli
    "7222":  "ConsNa",   # Napoli
    "54179": "ConsCz",   # Nocera Terinese - codice attuale
    "7253":  "ConsCz",   # Nocera Terinese - codice storico (Ist. Musicale Pareggiato)
    "7317":  "ConsNo",   # Novara
    "7327":  "ConsPd",   # Padova
    "7263":  "ConsPa",   # Palermo
    "7220":  "ConsPr",   # Parma
    "54180": "ConsPv",   # Pavia - codice attuale
    "7255":  "ConsPv",   # Pavia - codice storico (Ist. Musicale Pareggiato)
    "7247":  "ConsPg",   # Perugia
    "7205":  "ConsPs",   # Pesaro
    "7314":  "ConsPe",   # Pescara
    "7287":  "ConsPc",   # Piacenza
    "7307":  "ConsPz",   # Potenza
    "54173": "ConsRa",   # Ravenna - codice attuale
    "7225":  "ConsRa",   # Ravenna - codice storico (Ist. Musicale Pareggiato)
    "7206":  "ConsRc",   # Reggio Calabria
    "54177": "ConsReCa", # Reggio Emilia e Castelnovo ne' Monti - codice attuale
    "7248":  "ConsReCa", # Reggio Emilia e Castelnovo ne' Monti - codice storico
    "54184": "ConsRi",   # Ribera - codice attuale
    "7283":  "ConsRi",   # Ribera - codice storico (Ist. Musicale Pareggiato)
    "7309":  "ConsRm",   # Roma
    "7294":  "ConsRo",   # Rovigo
    "7214":  "ConsSa",   # Salerno
    "7211":  "ConsSs",   # Sassari
    "54174": "ConsSi",   # Siena - codice attuale
    "7226":  "ConsSi",   # Siena - codice storico (Ist. Musicale Pareggiato)
    "54181": "ConsTa",   # Taranto - codice attuale
    "7261":  "ConsTa",   # Taranto - codice storico (Ist. Musicale Pareggiato)
    "19454": "ConsTe",   # Teramo
    "54175": "ConsTr",   # Terni - codice attuale
    "7227":  "ConsTr",   # Terni - codice storico (Ist. Musicale Pareggiato)
    "7311":  "ConsTo",   # Torino
    "7269":  "ConsTp",   # Trapani
    "7288":  "ConsTn",   # Trento
    "7260":  "ConsTn",   # Trento - Riva del Garda (sezione staccata)
    "7289":  "ConsTs",   # Trieste
    "7335":  "ConsUd",   # Udine
    "7207":  "ConsVe",   # Venezia
    "7208":  "ConsVr",   # Verona
    "7284":  "ConsVv",   # Vibo Valentia
    "7325":  "ConsVi",   # Vicenza
    "7265":  "ConsAo",   # Aosta (Ist. superiore pareggiato di studi musicali)

    # --- Accademie nazionali ----------------------------------------------------
    "7215":  "ANDA",     # Roma - Accademia Nazionale di Arte Drammatica "Silvio D'Amico"
    "7285":  "AND",      # Roma - Accademia Nazionale di Danza

    # --- ISIA ---------------------------------------------------------------
    "7303":  "ISIA Faenza",
    "7197":  "ISIA Firenze",
    "34050": "ISIA Pescara",
    "72411": "ISIA Roma",    # Pordenone, sede decentrata di ISIA Roma
    "7241":  "ISIA Roma",
    "7252":  "ISIA Urbino",

    # --- AFAM privati -----------------------------------------------------------
    "32950": "Poliarte",         # Ancona
    "48770": "BSMT",             # Bologna - The Bernstein School of Musical Theater
    "16008": "IED",              # Cagliari
    "16009": "SMF",              # Fiesole - Scuola di Musica
    "38122": "Marangoni",        # Firenze - sede decentrata (Milano)
    "33932": "IED",              # Firenze
    "33890": "LABA Firenze",     # Firenze
    "15848": "AI",               # Firenze - Accademia Italiana Arte Moda Design
    "52371": "IdD",              # Matera - Istituto del Design
    "57530": "Raffles",          # Milano
    "57510": "Secoli",           # Milano
    "52392": "ACM",              # Milano - sede decentrata (Roma)
    "48751": "ADLM",             # Milano - Accademia del Lusso
    "38190": "Scala",            # Milano - Accademia Teatro alla Scala
    "34890": "IUAD",             # Milano - sede decentrata (Napoli)
    "33752": "SAE",               # Milano
    "36570": "Civica Teatro",    # Milano - Civica Scuola di Teatro Paolo Grassi
    "30557": "Marangoni",        # Milano
    "16007": "Civica Musica",    # Milano - Civica Scuola di Musica Claudio Abbado
    "11892": "IED",              # Milano
    "16006": "IUAD",             # Napoli - Accademia della Moda
    "48750": "STM",              # Novara - Scuola del Teatro Musicale
    "57531": "SID",              # Padova
    "52390": "IID",              # Perugia - Istituto Italiano Design
    "35230": "Modartech",        # Pisa/Pontedera
    "33751": "LABA Rimini",      # Rimini
    "30553": "Quasar",           # Roma
    "12161": "ACM",              # Roma - Accademia di Costume e Moda
    "30555": "AIT",              # Roma - Accademia Internazionale di Teatro
    "14597": "SLMC",             # Roma - Saint Louis College of Music
    "59050": "ADLM",             # Roma - sede decentrata (Milano)
    "33531": "AANT",             # Roma - Accademia Nazionale delle Arti e Nuove Tecnologie
    "16005": "Pantheon",         # Roma
    "14887": "IED",              # Roma
    "15850": "AI",               # Roma - sede decentrata (Firenze)
    "7236":  "Abadir",           # Sant'Agata li Battiati
    "12185": "SienaJazz",        # Siena
    "15847": "IAAD",             # Torino
    "15501": "IED",              # Torino
    "33530": "TNAA",             # Trento - Trentino Art Academy
    "30559": "AbaUd",            # Udine - Accademia di Belle Arti G.B. Tiepolo
    "7244":  "MADE",             # Siracusa - Accademia di Belle Arti Rosario Gagliardi
    "7266":  "ABAV",             # Viterbo - Accademia di Belle Arti Lorenzo da Viterbo
    "7251":  "ABA Sanremo",      # Sanremo - Accademia di Belle Arti Isadora Duncan
    "52391": "ABA Sanremo",      # Milano - sede decentrata (Sanremo)
    "7330":  "RUFA",             # Roma - Rome University of Fine Arts
    "59071": "RUFA",             # Milano - sede decentrata (Roma)
    "41230": "NABA",             # Roma - sede decentrata (Milano)
    "7232":  "NABA",             # Milano - Nuova Accademia di Belle Arti
    "7308":  "ACME",             # Milano - Accademia di Belle Arti ACME
    "7336":  "ABA Cuneo",        # Cuneo - Accademia di Belle Arti
    "7228":  "SantaGiulia",      # Brescia - Accademia SantaGiulia
    "7296":  "LABA Brescia",     # Brescia - Libera Accademia di Belle Arti
    "7231":  "Galli",            # Como - Accademia Aldo Galli
    "33750": "CPM",              # Milano - CPM Music Institute (Istituto Mussida Music Publishing)
}

# COD_ISTITUTO trovati nel CSV ma NON presenti tra gli atenei elencati su
# unidirectory.it (istituti piccoli/non ancora censiti sul sito): li lasciamo
# fuori dalla mappa così finiscono negli "skippati" invece di essere ignorati
# silenziosamente con una sigla sbagliata.
#   35471  Agrigento  - Accademia di Belle Arti "Michelangelo"
#   39394  Bologna    - Istituto Polo Michelangelo Arte e Design
#    7221  Novara     - "A.C.M.E" di Novara

# ── Caricamento universita.json (se presente) ─────────────────────────────────
try:
    with open(UNIV_JSON_PATH, encoding="utf-8") as f:
        atenei = json.load(f)
    sigle_valide = {a["sigla"] for a in atenei}
    for cod, sigla in MAPPING_ISTITUTO.items():
        if sigla not in sigle_valide:
            print(f"⚠  ATTENZIONE: sigla '{sigla}' (COD_ISTITUTO {cod}) non trovata in universita.json")
except FileNotFoundError:
    print(f"ℹ  {UNIV_JSON_PATH} non trovato, salto la validazione delle sigle.")

# ── Caricamento CSV ────────────────────────────────────────────────────────────
print(f"Carico CSV: {CSV_PATH}")
df = pd.read_csv(CSV_PATH, dtype=str, encoding="utf-8-sig")
print(f"  Righe totali: {len(df)}")
print(f"  Colonne: {list(df.columns)}")

COL_ANNO      = "ANNO_ACCADEMICO"
COL_COD_IST   = "COD_ISTITUTO"
COL_COMUNE    = "COMUNE_SEDE"
COL_AREA      = "AREA_CORSO"
COL_TIPO_CORSO= "TIPO_CORSO"
COL_SCUOLA    = "SCUOLA"
COL_CLASSE    = "CLASSE"
COL_CORSO     = "CORSO"

# Filtra anno più recente
anno_max = sorted(df[COL_ANNO].dropna().unique())[-1]
print(f"  Anno più recente: {anno_max}")
df = df[df[COL_ANNO] == anno_max].copy()
print(f"  Righe dopo filtro anno: {len(df)}")

# Filtra solo i corsi di diploma accademico (esclude master, dottorati, vecchio ordinamento...)
print(f"\n  TIPO_CORSO presenti nell'anno selezionato:")
print(df[COL_TIPO_CORSO].value_counts().to_string())
df = df[df[COL_TIPO_CORSO].isin(TIPI_CORSO_VALIDI)].copy()
print(f"\n  Righe dopo filtro TIPO_CORSO: {len(df)}")

# Rimuovi duplicati esatti (ignorando GENERE/ISCRITTI, che non ci interessano)
df = df.drop_duplicates(subset=[COL_COD_IST, COL_AREA, COL_CLASSE, COL_CORSO, COL_COMUNE])
print(f"  Righe dopo dedup: {len(df)}")

# ── Costruzione output ─────────────────────────────────────────────────────────
corsi_per_classe: dict = {}
skippati: list = []

for idx, row in df.iterrows():
    cod_istituto = str(row[COL_COD_IST]).strip() if pd.notna(row[COL_COD_IST]) else ""
    sigla = MAPPING_ISTITUTO.get(cod_istituto)

    if not sigla:
        skippati.append({
            "riga_csv":      int(idx),
            "COD_ISTITUTO":  cod_istituto,
            "NOME_ISTITUTO": str(row["NOME_ISTITUTO"]),
            "COMUNE_SEDE":   str(row[COL_COMUNE]),
            "CLASSE":        str(row[COL_CLASSE]),
            "CORSO":         str(row[COL_CORSO]),
        })
        continue

    area_corso = str(row[COL_AREA]).strip() if pd.notna(row[COL_AREA]) else ""
    if not area_corso:
        continue

    codice_classe = str(row[COL_CLASSE]).strip() if pd.notna(row[COL_CLASSE]) else ""
    if not codice_classe or codice_classe.lower() == "nan":
        continue

    nome_classe = str(row[COL_SCUOLA]).strip().title() if pd.notna(row[COL_SCUOLA]) else ""
    comune      = str(row[COL_COMUNE]).strip().title() if pd.notna(row[COL_COMUNE]) else ""
    nome_corso  = str(row[COL_CORSO]).strip().title() if pd.notna(row[COL_CORSO]) else ""

    if codice_classe not in corsi_per_classe:
        corsi_per_classe[codice_classe] = {
            "area": area_corso,
            "codice": codice_classe,
            "nome": nome_classe,
            "offerte": []
        }

    corsi_per_classe[codice_classe]["offerte"].append({
        "universita": sigla,
        "nomeCorso":  nome_corso,
        "sede":       comune,
    })

# ── Deduplica offerte e ordina ─────────────────────────────────────────────────
for codice in corsi_per_classe:
    viste: set = set()
    offerte_uniche = []
    for o in corsi_per_classe[codice]["offerte"]:
        chiave = (o["universita"], o["nomeCorso"], o["sede"])
        if chiave not in viste:
            viste.add(chiave)
            offerte_uniche.append(o)
    offerte_uniche.sort(key=lambda x: (x["universita"], x["nomeCorso"], x["sede"]))
    corsi_per_classe[codice]["offerte"] = offerte_uniche

# Ordina le classi per codice
corsi_per_classe = dict(sorted(corsi_per_classe.items(), key=lambda x: x[0]))

# ── Salvataggio ───────────────────────────────────────────────────────────────
DATA_DIR.mkdir(parents=True, exist_ok=True)
with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(corsi_per_classe, f, ensure_ascii=False, indent=2)

if skippati:
    with open(SKIPPED_LOG, "w", encoding="utf-8") as f:
        json.dump(skippati, f, ensure_ascii=False, indent=2)

# -- Statistiche ---------------------------------------------------------------
totale_offerte  = sum(len(c["offerte"]) for c in corsi_per_classe.values())
print("\n-- RISULTATI --------------------------------------------------------------")
print(f"  Classi scritte:   {len(corsi_per_classe)}")
print(f"  Offerte totali:   {totale_offerte}")
print(f"  Righe saltate:    {len(skippati)}")
print(f"  Output:           {OUTPUT_JSON}")

if skippati:
    cod_sconosciuti = sorted({s["COD_ISTITUTO"] for s in skippati})
    print(f"\n  COD_ISTITUTO NON mappati ({len(cod_sconosciuti)}):")
    for c in cod_sconosciuti:
        nome = next(s["NOME_ISTITUTO"] for s in skippati if s["COD_ISTITUTO"] == c)
        comune = next(s["COMUNE_SEDE"] for s in skippati if s["COD_ISTITUTO"] == c)
        print(f"    - {c}  {nome}  ({comune})")
else:
    print("\n  OK - Nessun corso saltato!")

print("\n-- Anteprima prima classe --------------------------------------------------")
primo_codice = next(iter(corsi_per_classe))
prima_classe = corsi_per_classe[primo_codice]
print(json.dumps({primo_codice: prima_classe}, ensure_ascii=False, indent=2)[:800])
