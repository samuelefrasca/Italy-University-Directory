import json
from pathlib import Path

# ── Carica dati ──────────────────────────────────────────────────────────────

with open("data/universita.json", encoding="utf-8") as f:
    universita_list = json.load(f)

# ── Categorie da generare ────────────────────────────────────────────────────

categorie = [
    {
        "categoria": "statali",
        "slug": "statali",
        "titolo": "Università statali",
        "titolo_seo": "Università statali in Italia: elenco per regione e città",
        "desc_seo": "Scopri l'elenco delle università statali in Italia, organizzate per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "nav_active": "Statali",
    },
    {
        "categoria": "superiori",
        "slug": "superiori",
        "titolo": "Scuole superiori universitarie",
        "titolo_seo": "Scuole superiori universitarie in Italia: elenco per regione e città",
        "desc_seo": "Scopri l'elenco delle scuole superiori universitarie in Italia, organizzate per regione e città.",
        "nav_active": "Scuole superiori",
    },
    {
        "categoria": "nonstatali",
        "slug": "nonstatali",
        "titolo": "Università non statali",
        "titolo_seo": "Università non statali in Italia: elenco per regione e città",
        "desc_seo": "Scopri l'elenco delle università non statali in Italia, organizzate per regione e città.",
        "nav_active": "Non statali",
    },
    {
        "categoria": "telematiche",
        "slug": "telematiche",
        "titolo": "Università telematiche",
        "titolo_seo": "Università telematiche in Italia: elenco completo",
        "desc_seo": "Scopri l'elenco delle università telematiche riconosciute in Italia.",
        "nav_active": "Telematiche",
    },
    {
        "categoria": "conservatori",
        "slug": "conservatori",
        "titolo": "Conservatori statali",
        "titolo_seo": "Conservatori statali in Italia: elenco per regione e città",
        "desc_seo": "Scopri l'elenco dei conservatori statali in Italia, organizzati per regione e città.",
        "nav_active": "Conservatori",
    },
    {
        "categoria": "abastatali",
        "slug": "abastatali",
        "titolo": "Accademie di Belle Arti statali",
        "titolo_seo": "Accademie di Belle Arti statali in Italia: elenco per regione e città",
        "desc_seo": "Scopri l'elenco delle Accademie di Belle Arti statali in Italia, organizzate per regione e città.",
        "nav_active": "ABA",
    },
    {
        "categoria": "accnazionali",
        "slug": "accnazionali",
        "titolo": "Accademie nazionali",
        "titolo_seo": "Accademie nazionali in Italia: elenco completo",
        "desc_seo": "Scopri l'elenco delle accademie nazionali in Italia.",
        "nav_active": "Acc. nazionali",
    },
    {
        "categoria": "isia",
        "slug": "isia",
        "titolo": "Istituti superiori per le industrie artistiche ISIA",
        "titolo_seo": "ISIA in Italia: elenco degli istituti superiori per le industrie artistiche",
        "desc_seo": "Scopri l'elenco degli Istituti Superiori per le Industrie Artistiche (ISIA) in Italia.",
        "nav_active": "ISIA",
    },
    {
        "categoria": "afamprivati",
        "slug": "afamprivati",
        "titolo": "Istituti privati AFAM",
        "titolo_seo": "Istituti privati AFAM in Italia: elenco completo",
        "desc_seo": "Scopri l'elenco degli istituti privati di Alta Formazione Artistica, Musicale e Coreutica (AFAM) in Italia.",
        "nav_active": "AFAM privati",
    },
]

# ── Nav links (usati in tutte le pagine) ─────────────────────────────────────

NAV_ITEMS = [
    ("Statali",        "statali.html"),
    ("Scuole superiori", "superiori.html"),
    ("Non statali",    "nonstatali.html"),
    ("Telematiche",    "telematiche.html"),
    ("Conservatori",   "conservatori.html"),
    ("ABA",            "abastatali.html"),
    ("Acc. nazionali", "accnazionali.html"),
    ("ISIA",           "isia.html"),
    ("AFAM privati",   "afamprivati.html"),
]

# ── Generazione righe HTML ───────────────────────────────────────────────────

def genera_righe(categoria):
    lista = [u for u in universita_list if u.get("categoria") == categoria]
    righe = []
    for n, uni in enumerate(lista, start=1):
        link = uni.get("link") or "#"
        nolink = "" if uni.get("link") else 'onclick=\'alert("Sito non trovato"); return false;\''
        studenti = uni.get("studenti")
        studenti_display = f"{studenti:,}".replace(",", ".") if studenti else "----"
        sigla = uni.get("sigla") or "----"

        # Serializza uni come data attribute per il JS
        data_uni = json.dumps(uni, ensure_ascii=False).replace('"', "&quot;")

        righe.append(f"""        <tr data-uni="{data_uni}">
                <td class="num">{n}</td>
                <td><a class="uni" href="{link}" {nolink} target="_blank">{uni["nome"]}</a></td>
                <td>{sigla}</td>
                <td>{uni.get("citta", "----")}</td>
                <td>{uni.get("regione", "----")}</td>
                <td class="studenti">{studenti_display}</td>
            </tr>""")
    return "\n".join(righe)

# ── Template HTML ────────────────────────────────────────────────────────────

def genera_nav(nav_active, slug_corrente):
    items = []
    for label, href in NAV_ITEMS:
        if label == nav_active:
            items.append(f'                    <li class="navli"><span class="reflink select-none active">{label}</span></li>')
        else:
            items.append(f'                    <li class="navli"><a class="reflink select-none" href="{href}">{label}</a></li>')
    return "\n".join(items)


def genera_html(cat):
    base_url = f"https://unidirectory.it/uni/{cat['slug']}"
    righe = genera_righe(cat["categoria"])
    nav = genera_nav(cat["nav_active"], cat["slug"])
    n_totale = righe.count("<tr data-uni=")

    return f"""<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{cat["titolo_seo"]} | Unidirectory</title>
    <meta name="description"
        content="{cat["desc_seo"]}">
    <meta name="robots" content="index,follow">

    <link rel="canonical" href="{base_url}">
    <script>
        if (window.location.hostname === 'samuelefrasca.github.io' || window.location.hostname === 'unidirectory.pages.dev') {{
            const path = window.location.pathname
                .replace('/Italy-University-Directory', '')
                .replace(/\\.html$/, '');
            window.location.replace('https://unidirectory.it' + path + window.location.search);
        }}
    </script>

    <meta property="og:site_name" content="Unidirectory">
    <meta property="og:title" content="{cat["titolo_seo"]} | Unidirectory">
    <meta property="og:description"
        content="{cat["desc_seo"]}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{base_url}">
    <meta property="og:image"
        content="https://unidirectory.it/assets/img/iud_icon.png">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{cat["titolo_seo"]} | Unidirectory">
    <meta name="twitter:description"
        content="{cat["desc_seo"]}">
    <meta name="twitter:image"
        content="https://unidirectory.it/assets/img/iud_icon.png">

    <link rel="icon" type="image/png" href="../assets/img/iud_icon.png">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/elenchi.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "{cat["titolo_seo"]}",
        "url": "{base_url}",
        "description": "{cat["desc_seo"]}"
    }}
    </script>
</head>

<body>
    <header>
        <div class="container">
            <div class="header">
                <div class="header1">
                    <a href="/">
                        <img class="logo" src="../assets/img/iud_image.png" alt="Logo Unidirectory">
                    </a>
                </div>
                <div class="header2">
                    <h1 class="title">unidirectory</h1>
                    <h2 class="subtitle">{cat["titolo"]}</h2>
                </div>
                <div class="header3"></div>
            </div>
            <nav class="altreuni">
                <ul class="navul">
{nav}
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <div class="container table-responsive">
            <input type="search" id="searchNegliAtenei" placeholder="Cerca università, sede o regione...">
            <h3 id="unitrovate">{n_totale} atenei trovati</h3>
            <table>
                <thead>
                    <tr>
                        <th class="select-none num"></th>
                        <th class="select-none">Nome</th>
                        <th class="select-none">Sigla</th>
                        <th class="select-none"><a onclick="ordinaPerCitta('{cat["categoria"]}')">Sede principale <i class="fa-solid fa-sort"></i></a></th>
                        <th class="select-none"><a onclick="ordinaPerRegione('{cat["categoria"]}')">Regione <i class="fa-solid fa-sort"></i></a></th>
                        <th class="select-none"><a onclick="ordinaPerStudenti('{cat["categoria"]}')">Studenti <i class="fa-solid fa-sort"></i></a></th>
                    </tr>
                </thead>
                <tbody id="tabellauni">
{righe}
                </tbody>
            </table>
        </div>
    </main>
    <footer>
        <div class="subfooter">
            <p>&copy; 2026 -
                <a class="a_footer" href="https://samuelefrasca.github.io/" target="_blank" rel="noopener noreferrer">Samuele Frasca</a>
            </p>
            <p>
                <a class="a_footer github" href="https://github.com/samuelefrasca" target="_blank" rel="noopener noreferrer">
                    <img class="github-logo" src="../assets/img/GitHub_Invertocat_White.png" alt="github-logo">GitHub
                </a>
            </p>
        </div>
        <div class="subfooter">
            <p>Fonte dati:
                <a class="a_footer" href="https://www.mur.gov.it/it/aree-tematiche/universita/le-universita"
                    target="_blank" rel="noopener noreferrer">MUR</a>
                &middot;
                <a class="a_footer" href="https://ustat.mur.gov.it/" target="_blank" rel="noopener noreferrer">USTAT</a>
            </p>
            <p><a class="a_footer" href="../privacy.html">Privacy Policy</a></p>
            <p><a class="a_footer" href="../sitemap.xml">Mappa del sito</a></p>
            <p><a class="a_footer" href="mailto:info@unidirectory.it">Contattaci</a></p>
        </div>
    </footer>
    <script src="../assets/js/footer.js"></script>
    <script src="../assets/js/scriptelenco.js"></script>
    <script>
        ordineregione = false;
        ordinestudenti = false;
        ordinecitta = false;
        caricaTabella('{cat["categoria"]}');
    </script>
</body>

</html>"""

# ── Output ───────────────────────────────────────────────────────────────────

cartella_output = Path("uni")
cartella_output.mkdir(exist_ok=True)

for cat in categorie:
    html = genera_html(cat)
    path = cartella_output / f"{cat['slug']}.html"
    path.write_text(html, encoding="utf-8")
    n = html.count("<tr data-uni=")
    print(f"✓ {cat['slug']}.html  ({n} atenei)")

print(f"\nGenerati {len(categorie)} file in /uni/")
