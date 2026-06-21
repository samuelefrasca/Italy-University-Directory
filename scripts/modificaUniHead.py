from pathlib import Path
import re

root = Path(".").resolve()
uni_dir = root / "uni"

pagine = {
    "abastatali.html": {
        "titolo": "Accademie di belle arti statali in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco delle accademie di belle arti statali in Italia, organizzate per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco delle accademie di belle arti statali in Italia, organizzate per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/abastatali.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Accademie di belle arti statali in Italia: elenco per regione e città"
    },
    "accnazionali.html": {
        "titolo": "Accademie nazionali in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco delle accademie nazionali in Italia, organizzate per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco delle accademie nazionali in Italia, organizzate per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/accnazionali.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Accademie nazionali in Italia: elenco per regione e città"
    },
    "afamprivati.html": {
        "titolo": "Istituti AFAM privati in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco degli istituti privati AFAM in Italia, organizzati per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco degli istituti privati AFAM in Italia, organizzati per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/afamprivati.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Istituti AFAM privati in Italia: elenco per regione e città"
    },
    "conservatori.html": {
        "titolo": "Conservatori statali in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco dei conservatori statali in Italia, organizzati per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco dei conservatori statali in Italia, organizzati per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/conservatori.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Conservatori statali in Italia: elenco per regione e città"
    },
    "isia.html": {
        "titolo": "Istituti superiori per le industrie artistiche ISIA in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco degli istituti superiori per le industrie artistiche ISIA in Italia, organizzati per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco degli istituti superiori per le industrie artistiche ISIA in Italia, organizzati per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/isia.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Istituti superiori per le industrie artistiche ISIA in Italia: elenco per regione e città"
    },
    "nonstatali.html": {
        "titolo": "Università non statali in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco delle università non statali in Italia, organizzate per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco delle università non statali in Italia, organizzate per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/nonstatali.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Università non statali in Italia: elenco per regione e città"
    },
    "statali.html": {
        "titolo": "Università statali in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco delle università statali in Italia, organizzate per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco delle università statali in Italia, organizzate per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/statali.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Università statali in Italia: elenco per regione e città"
    },
    "superiori.html": {
        "titolo": "Scuole superiori universitarie in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco delle scuole superiori universitarie in Italia, organizzate per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco delle scuole superiori universitarie in Italia, organizzate per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/superiori.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Scuole superiori universitarie in Italia: elenco per regione e città"
    },
    "telematiche.html": {
        "titolo": "Università telematiche in Italia: elenco per regione e città | IUD",
        "descrizione": "Scopri l'elenco delle università telematiche in Italia, organizzate per regione e città. Elenco chiaro e aggiornato delle sedi disponibili.",
        "og_descrizione": "Scopri l'elenco delle università telematiche in Italia, organizzate per regione e città.",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/uni/telematiche.html",
        "css": "../assets/css/elenchi.css",
        "jsonld_name": "Università telematiche in Italia: elenco per regione e città"
    },
}

head_template = """<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{titolo}</title>
    <meta name="description"
        content="{descrizione}">
    <meta name="robots" content="index,follow">

    <link rel="canonical" href="{url}">

    <meta property="og:site_name" content="Unidirectory">
    <meta property="og:title" content="{titolo}">
    <meta property="og:description"
        content="{og_descrizione}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{url}">
    <meta property="og:image"
        content="https://samuelefrasca.github.io/Italy-University-Directory/assets/img/iud_icon.png">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{titolo}">
    <meta name="twitter:description"
        content="{og_descrizione}">
    <meta name="twitter:image"
        content="https://samuelefrasca.github.io/Italy-University-Directory/assets/img/iud_icon.png">

    <link rel="icon" type="image/png" href="../assets/img/iud_icon.png">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="{css}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "{jsonld_name}",
        "url": "{url}",
        "description": "{descrizione}"
    }}
    </script>
</head>"""

for filename, data in pagine.items():
    file_path = uni_dir / filename

    if not file_path.exists():
        print(f"File non trovato: {file_path}")
        continue

    text = file_path.read_text(encoding="utf-8")

    nuovo_head = head_template.format(**data)

    nuovo_testo, count = re.subn(
        r"<head\b[^>]*>.*?</head>",
        nuovo_head,
        text,
        flags=re.DOTALL | re.IGNORECASE
    )

    if count == 0:
        print(f"Nessun <head> trovato in: {filename}")
        continue

    file_path.write_text(nuovo_testo, encoding="utf-8")
    print(f"Aggiornato: {filename}")