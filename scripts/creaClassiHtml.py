from pathlib import Path

classi = [
    {"nome": "Beni Culturali", "codice": "L-1", "slug": "l-1"},
    {"nome": "Biotecnologie", "codice": "L-2", "slug": "l-2"},
    {"nome": "Discipline delle Arti Figurative, della Musica, dello Spettacolo e della Moda", "codice": "L-3", "slug": "l-3"},
    {"nome": "Disegno Industriale", "codice": "L-4", "slug": "l-4"},
    {"nome": "Filosofia", "codice": "L-5", "slug": "l-5"},
    {"nome": "Geografia", "codice": "L-6", "slug": "l-6"},
    {"nome": "Ingegneria Civile e Ambientale", "codice": "L-7", "slug": "l-7"},
    {"nome": "Ingegneria dell'Informazione", "codice": "L-8", "slug": "l-8"},
    {"nome": "Ingegneria Industriale", "codice": "L-9", "slug": "l-9"},
    {"nome": "Lettere", "codice": "L-10", "slug": "l-10"},
    {"nome": "Lingue e Culture Moderne", "codice": "L-11", "slug": "l-11"},
    {"nome": "Mediazione Linguistica", "codice": "L-12", "slug": "l-12"},
    {"nome": "Scienze Biologiche", "codice": "L-13", "slug": "l-13"},
    {"nome": "Scienze dei Servizi Giuridici", "codice": "L-14", "slug": "l-14"},
    {"nome": "Scienze del Turismo", "codice": "L-15", "slug": "l-15"},
    {"nome": "Scienze dell'Amministrazione e dell'Organizzazione", "codice": "L-16", "slug": "l-16"},
    {"nome": "Scienze dell'Architettura", "codice": "L-17", "slug": "l-17"},
    {"nome": "Scienze dell'Economia e della Gestione Aziendale", "codice": "L-18", "slug": "l-18"},
    {"nome": "Scienze dell'Educazione e della Formazione", "codice": "L-19", "slug": "l-19"},
    {"nome": "Scienze della Comunicazione", "codice": "L-20", "slug": "l-20"},
    {"nome": "Scienze della Pianificazione Territoriale, Urbanistica, Paesaggistica e Ambientale", "codice": "L-21", "slug": "l-21"},
    {"nome": "Scienze delle Attività Motorie e Sportive", "codice": "L-22", "slug": "l-22"},
    {"nome": "Scienze e Tecniche dell'Edilizia", "codice": "L-23", "slug": "l-23"},
    {"nome": "Scienze e Tecniche Psicologiche", "codice": "L-24", "slug": "l-24"},
    {"nome": "Scienze e Tecnologie Agrarie e Forestali", "codice": "L-25", "slug": "l-25"},
    {"nome": "Scienze e Tecnologie Agro-Alimentari", "codice": "L-26", "slug": "l-26"},
    {"nome": "Scienze e Tecnologie Chimiche", "codice": "L-27", "slug": "l-27"},
    {"nome": "Scienze e Tecnologie della Navigazione", "codice": "L-28", "slug": "l-28"},
    {"nome": "Scienze e Tecnologie Farmaceutiche", "codice": "L-29", "slug": "l-29"},
    {"nome": "Scienze e Tecnologie Fisiche", "codice": "L-30", "slug": "l-30"},
    {"nome": "Scienze e Tecnologie Informatiche", "codice": "L-31", "slug": "l-31"},
    {"nome": "Scienze e Tecnologie per l'Ambiente e la Natura", "codice": "L-32", "slug": "l-32"},
    {"nome": "Scienze Economiche", "codice": "L-33", "slug": "l-33"},
    {"nome": "Scienze Geologiche", "codice": "L-34", "slug": "l-34"},
    {"nome": "Scienze Matematiche", "codice": "L-35", "slug": "l-35"},
    {"nome": "Scienze Politiche e delle Relazioni Internazionali", "codice": "L-36", "slug": "l-36"},
    {"nome": "Scienze Sociali per la Cooperazione, lo Sviluppo e la Pace", "codice": "L-37", "slug": "l-37"},
    {"nome": "Scienze Zootecniche e Tecnologie delle Produzioni Animali", "codice": "L-38", "slug": "l-38"},
    {"nome": "Servizio Sociale", "codice": "L-39", "slug": "l-39"},
    {"nome": "Sociologia", "codice": "L-40", "slug": "l-40"},
    {"nome": "Statistica", "codice": "L-41", "slug": "l-41"},
    {"nome": "Storia", "codice": "L-42", "slug": "l-42"},
    {"nome": "Diagnostica per la conservazione dei beni culturali", "codice": "L-43", "slug": "l-43"},
    {"nome": "Scienze dei materiali", "codice": "L-SC.MAT", "slug": "l-sc-mat"},
    {"nome": "Scienze, culture e politiche della gastronomia", "codice": "L-GASTR", "slug": "l-gastr"},
    {"nome": "Scienze della difesa e della sicurezza", "codice": "L-DS", "slug": "l-ds"},
    {"nome": "Professioni sanitarie, infermieristiche e professione sanitaria ostetrica", "codice": "L-SNT1", "slug": "l-snt1"},
    {"nome": "Professioni sanitarie della riabilitazione", "codice": "L-SNT2", "slug": "l-snt2"},
    {"nome": "Professioni sanitarie tecniche", "codice": "L-SNT3", "slug": "l-snt3"},
    {"nome": "Professioni sanitarie della prevenzione", "codice": "L-SNT4", "slug": "l-snt4"},
    {"nome": "Professioni tecniche per l'edilizia e il territorio", "codice": "L-P01", "slug": "l-p01"},
    {"nome": "Professioni tecniche agrarie, alimentari e forestali", "codice": "L-P02", "slug": "l-p02"},
    {"nome": "Professioni tecniche industriali e dell'informazione", "codice": "L-P03", "slug": "l-p03"},
]

template = """<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <title>Corsi di laurea in {{NOME}} ({{CODICE}}): università e sedi | IUD</title>
    <meta name="description"
        content="Scopri in quali università e sedi è attivo il corso di laurea in {{NOME}} ({{CODICE}}) in Italia. Elenco chiaro e aggiornato delle sedi disponibili.">
    <meta name="robots" content="index,follow">


    <link rel="canonical" href="https://samuelefrasca.github.io/Italy-University-Directory/classi/{{SLUG}}.html">


    <meta property="og:site_name" content="Italy University Directory">
    <meta property="og:title" content="Corsi di laurea in {{NOME}} ({{CODICE}}): università e sedi | IUD">
    <meta property="og:description"
        content="Scopri in quali università e sedi è attivo il corso di laurea in {{NOME}} ({{CODICE}}) in Italia.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://samuelefrasca.github.io/Italy-University-Directory/classi/{{SLUG}}.html">
    <meta property="og:image"
        content="https://samuelefrasca.github.io/Italy-University-Directory/assets/img/iud_icon.png">


    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Corsi di laurea in {{NOME}} ({{CODICE}}): università e sedi | IUD">
    <meta name="twitter:description"
        content="Scopri in quali università e sedi è attivo il corso di laurea in {{NOME}} ({{CODICE}}) in Italia.">
    <meta name="twitter:image"
        content="https://samuelefrasca.github.io/Italy-University-Directory/assets/img/iud_icon.png">


    <link rel="icon" type="image/png" href="../assets/img/iud_icon.png">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/classi.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">


    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Corsi di laurea in {{NOME}} ({{CODICE}}): università e sedi",
        "url": "https://samuelefrasca.github.io/Italy-University-Directory/classi/{{SLUG}}.html",
        "description": "Scopri in quali università e sedi è attivo il corso di laurea in {{NOME}} ({{CODICE}}) in Italia. Elenco chiaro e aggiornato delle sedi disponibili."
    }
    </script>
</head>


<body>
    <header>
        <div class="container">
            <div class="header">
                <div class="header1">
                    <a href="../">
                        <img class="logo" src="../assets/img/iud_image.png" alt="iud_image">
                    </a>
                </div>
                <div class="header2">
                    <h1 class="title">Italy University Directory</h1>
                    <h2 class="subtitle">{{CODICE}} - {{NOME}}</h2>
                </div>
                <div class="header3"></div>
            </div>
        </div>
    </header>
    <main>
        <div class="container table-responsive">
            <div class="toolbar-tabella">
                <div class="filtri">
                    <select id="filtroLingua" onchange="gestisciFiltroLingua(this.value, '{{CODICE}}')">
                        <option value="">Tutte le lingue</option>
                        <option value="italiano">Italiano</option>
                        <option value="inglese">Inglese</option>
                    </select>
                    <select id="filtroAccesso" onchange="gestisciFiltroAccesso(this.value, '{{CODICE}}')">
                        <option value="">Tutti gli accessi</option>
                        <option value="libero">Accesso libero</option>
                        <option value="programmato">Accesso programmato</option>
                    </select>
                    <select id="filtroDidattica" onchange="gestisciFiltroDidattica(this.value, '{{CODICE}}')">
                        <option value="">Tutte le didattiche</option>
                        <option value="presenza">In presenza</option>
                        <option value="online">Online</option>
                        <option value="misto">Misto</option>
                    </select>
                </div>
                <div class="ordina">
                    <button type="button" onclick="ordinaPerCorso('{{CODICE}}')">Ordina per corso</button>
                    <button type="button" onclick="ordinaPerSede('{{CODICE}}')">Ordina per sede</button>
                    <button type="button" onclick="ordinaPerRegione('{{CODICE}}')">Ordina per regione</button>
                </div>
            </div>
            <input type="search" id="searchNelleClassi" placeholder="Cerca università, sede, regione o corso...">
            <h3 id ="corsitrovati"></h3>
            <table>
                <tbody id="tabellauni"></tbody>
            </table>
            <p class="data-note">
                Dati corsi da AlmaLaurea; alcune università e le lauree magistrali saranno aggiunte nei
                prossimi aggiornamenti.
            </p>
        </div>
    </main>
    <footer id="site-footer" data-base=".."></footer>
    <script src="../assets/js/footer.js"></script>
    <script src="../assets/js/scriptclassi.js"></script>
    <script>
        caricaTabella("{{CODICE}}");
        ordinecorso = true;
        ordinecitta = false;
        ordineregione = false;
    </script>
</body>

</html>
"""

cartella_output = Path("classi")
cartella_output.mkdir(exist_ok=True)

for classe in classi:
    contenuto = (
        template
        .replace("{{NOME}}", classe["nome"])
        .replace("{{CODICE}}", classe["codice"])
        .replace("{{SLUG}}", classe["slug"])
    )

    nome_file = f"{classe['slug']}.html"
    (cartella_output / nome_file).write_text(contenuto, encoding="utf-8")

print("Creati", len(classi), "file HTML.")