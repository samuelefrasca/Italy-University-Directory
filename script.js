// Università statali italiane - tutte le 57 università
// Array con oggetti contenenti: nome, città, regione, studenti, altresedi

const universita = [
    // ABRUZZO
    { nome: "Università degli Studi 'Gabriele d'Annunzio' di Chieti-Pescara", citta: "Chieti", regione: "Abruzzo", studenti: 21097, altresedi: ["Pescara", "Lanciano", "Torrevecchia Teatina", "Torre de' Passeri", "Vasto"] },
    { nome: "Università degli Studi dell'Aquila", citta: "L'Aquila", regione: "Abruzzo", studenti: 16613, altresedi: ["Avezzano", "Sulmona"] },
    { nome: "Università degli Studi di Teramo", citta: "Teramo", regione: "Abruzzo", studenti: 5057, altresedi: ["Avezzano", "Lanciano"] },

    // BASILICATA
    { nome: "Università degli Studi della Basilicata", citta: "Potenza", regione: "Basilicata", studenti: 6631, altresedi: ["Matera"] },

    // CALABRIA
    { nome: "Università degli Studi Magna Græcia di Catanzaro", citta: "Catanzaro", regione: "Calabria", studenti: 12572, altresedi: ["Lamezia Terme", "Vibo Valentia"] },
    { nome: "Università della Calabria", citta: "Cosenza", regione: "Calabria", studenti: 23027, altresedi: ["Rende"] },
    { nome: "Università degli Studi 'Mediterranea' di Reggio Calabria", citta: "Reggio Calabria", regione: "Calabria", studenti: 4955, altresedi: ["Lamezia Terme"] },

    // CAMPANIA
    { nome: "Università degli Studi della Campania Luigi Vanvitelli", citta: "Napoli", regione: "Campania", studenti: 25299, altresedi: ["Caserta", "Aversa", "Capua", "Marcianise", "Santa Maria Capua Vetere"] },
    { nome: "Università degli Studi di Napoli 'Federico II'", citta: "Napoli", regione: "Campania", studenti: 71799, altresedi: ["Arco Felice", "Avellino", "Benevento", "Castellammare di Stabia", "Frattaminore", "Portici", "Torre del Greco"] },
    { nome: "Scuola Superiore Meridionale", citta: "Napoli", regione: "Campania", studenti: 150, altresedi: [] },
    { nome: "Università degli Studi di Napoli 'L'Orientale'", citta: "Napoli", regione: "Campania", studenti: 11164, altresedi: [] },
    { nome: "Università degli Studi di Napoli 'Parthenope'", citta: "Napoli", regione: "Campania", studenti: 14716, altresedi: ["Afragola", "Nola", "Potenza", "Torre Annunziata"] },
    { nome: "Università degli Studi di Salerno", citta: "Fisciano", regione: "Campania", studenti: 33332, altresedi: ["Baronissi", "Lancusi"] },
    { nome: "Università degli Studi del Sannio", citta: "Benevento", regione: "Campania", studenti: 3768, altresedi: ["Ariano Irpino"] },

    // EMILIA-ROMAGNA
    { nome: "Alma Mater Studiorum - Università di Bologna", citta: "Bologna", regione: "Emilia-Romagna", studenti: 96945, altresedi: ["Cesena", "Forlì", "Ravenna", "Rimini"] },
    { nome: "Università degli Studi di Ferrara", citta: "Ferrara", regione: "Emilia-Romagna", studenti: 28522, altresedi: ["Bolzano", "Pieve di Cento", "Rovigo"] },
    { nome: "Università degli Studi di Modena e Reggio Emilia", citta: "Modena", regione: "Emilia-Romagna", studenti: 25705, altresedi: ["Reggio Emilia", "Mantova"] },
    { nome: "Università degli Studi di Parma", citta: "Parma", regione: "Emilia-Romagna", studenti: 35377, altresedi: ["Piacenza"] },

    // FRIULI-VENEZIA GIULIA
    { nome: "Università degli Studi di Trieste", citta: "Trieste", regione: "Friuli-Venezia Giulia", studenti: 15759, altresedi: ["Gorizia", "Pordenone", "Portogruaro"] },
    { nome: "Università degli Studi di Udine", citta: "Udine", regione: "Friuli-Venezia Giulia", studenti: 15269, altresedi: ["Gorizia", "Pordenone", "Mestre", "Gemona del Friuli"] },

    // LAZIO
    { nome: "Università degli Studi di Cassino e del Lazio Meridionale", citta: "Cassino", regione: "Lazio", studenti: 6983, altresedi: ["Frosinone", "Terracina"] },
    { nome: "Università degli Studi di Roma 'Foro Italico'", citta: "Roma", regione: "Lazio", studenti: 2377, altresedi: [] },
    { nome: "Università degli Studi di Roma 'La Sapienza'", citta: "Roma", regione: "Lazio", studenti: 120000, altresedi: ["Bracciano", "Buenos Aires", "Cassino", "Civitavecchia", "Isernia", "Frosinone", "Latina", "Narni", "Pozzilli", "Rieti", "Sora", "Viterbo"] },
    { nome: "Università degli Studi di Roma Tor Vergata", citta: "Roma", regione: "Lazio", studenti: 35000, altresedi: ["Cassino", "Sora"] },
    { nome: "Università degli Studi Roma Tre", citta: "Roma", regione: "Lazio", studenti: 37051, altresedi: [] },
    { nome: "Università degli Studi della Tuscia", citta: "Viterbo", regione: "Lazio", studenti: 7666, altresedi: ["Cittaducale", "Civitavecchia"] },

    // LIGURIA
    { nome: "Università degli Studi di Genova", citta: "Genova", regione: "Liguria", studenti: 31860, altresedi: ["Chiavari", "Imperia", "La Spezia", "Livorno", "Pietra Ligure", "Savona"] },

    // LOMBARDIA
    { nome: "Università degli Studi di Bergamo", citta: "Bergamo", regione: "Lombardia", studenti: 19947, altresedi: ["Dalmine"] },
    { nome: "Università degli Studi di Brescia", citta: "Brescia", regione: "Lombardia", studenti: 16800, altresedi: ["Chiari", "Cremona", "Desenzano del Garda", "Esine", "Mantova"] },
    { nome: "Politecnico di Milano", citta: "Milano", regione: "Lombardia", studenti: 47959, altresedi: ["Como", "Cremona", "Lecco", "Mantova", "Piacenza"] },
    { nome: "Università degli Studi di Milano", citta: "Milano", regione: "Lombardia", studenti: 59177, altresedi: ["Cernusco sul Naviglio", "Crema", "Como", "Edolo", "Gargnano", "Lodi", "Rozzano", "San Donato Milanese", "Segrate", "Sesto San Giovanni", "Torrazza Coste"] },
    { nome: "Università degli Studi di Milano-Bicocca", citta: "Milano", regione: "Lombardia", studenti: 36263, altresedi: ["Bolzano", "Monza", "Como"] },
    { nome: "Istituto Universitario di Studi Superiori", citta: "Pavia", regione: "Lombardia", studenti: 293, altresedi: [] },
    { nome: "Università degli Studi di Pavia", citta: "Pavia", regione: "Lombardia", studenti: 25070, altresedi: ["Cremona", "Mantova"] },
    { nome: "Università degli Studi dell'Insubria", citta: "Varese", regione: "Lombardia", studenti: 11414, altresedi: ["Como"] },

    // MARCHE
    { nome: "Università Politecnica delle Marche", citta: "Ancona", regione: "Marche", studenti: 15439, altresedi: ["Ascoli Piceno", "Fermo", "Macerata", "San Benedetto del Tronto", "Pesaro"] },
    { nome: "Università degli Studi di Camerino", citta: "Camerino", regione: "Marche", studenti: 5716, altresedi: ["Ascoli Piceno", "Matelica", "Recanati", "San Benedetto del Tronto"] },
    { nome: "Università degli Studi di Macerata", citta: "Macerata", regione: "Marche", studenti: 9259, altresedi: ["Civitanova Marche", "Fermo", "Jesi", "Osimo", "Spinetoli"] },
    { nome: "Università degli Studi di Urbino 'Carlo Bo'", citta: "Urbino", regione: "Marche", studenti: 17409, altresedi: ["Fano", "Pesaro"] },

    // MOLISE
    { nome: "Università degli Studi del Molise", citta: "Campobasso", regione: "Molise", studenti: 7001, altresedi: ["Pesche", "Termoli"] },

    // PIEMONTE
    { nome: "Università degli Studi del Piemonte Orientale 'Amedeo Avogadro'", citta: "Vercelli", regione: "Piemonte", studenti: 16802, altresedi: ["Alessandria", "Asti", "Biella", "Domodossola", "Novara", "Verbania"] },
    { nome: "Università degli Studi di Torino", citta: "Torino", regione: "Piemonte", studenti: 83000, altresedi: ["Aosta", "Asti", "Biella", "Cuneo", "Savigliano", "Grugliasco"] },
    { nome: "Politecnico di Torino", citta: "Torino", regione: "Piemonte", studenti: 34721, altresedi: ["Alessandria", "Aosta", "Biella", "Ivrea", "Mondovì", "Vercelli"] },

    // PUGLIA
    { nome: "Politecnico di Bari", citta: "Bari", regione: "Puglia", studenti: 10072, altresedi: ["Taranto", "Foggia"] },
    { nome: "Università degli Studi di Bari Aldo Moro", citta: "Bari", regione: "Puglia", studenti: 40530, altresedi: ["Brindisi", "Taranto"] },
    { nome: "Università degli Studi di Foggia", citta: "Foggia", regione: "Puglia", studenti: 13560, altresedi: ["Barletta", "Cerignola", "Lucera", "Manfredonia", "San Giovanni Rotondo", "San Severo"] },
    { nome: "Università del Salento", citta: "Lecce", regione: "Puglia", studenti: 20201, altresedi: ["Brindisi", "Mesagne"] },

    // SARDEGNA
    { nome: "Università degli Studi di Cagliari", citta: "Cagliari", regione: "Sardegna", studenti: 25263, altresedi: ["Nuoro", "Oristano", "Iglesias", "Monserrato", "Olbia"] },
    { nome: "Università degli Studi di Sassari", citta: "Sassari", regione: "Sardegna", studenti: 13507, altresedi: ["Alghero", "Nuoro", "Olbia", "Oristano", "Tempio Pausania"] },

    // SICILIA
    { nome: "Università degli Studi di Catania", citta: "Catania", regione: "Sicilia", studenti: 40287, altresedi: ["Ragusa", "Siracusa"] },
    { nome: "Università degli Studi di Messina", citta: "Messina", regione: "Sicilia", studenti: 23565, altresedi: ["Locri", "Modica", "Noto", "Priolo Gargallo"] },
    { nome: "Università degli Studi di Palermo", citta: "Palermo", regione: "Sicilia", studenti: 41498, altresedi: ["Agrigento", "Caltanissetta", "Trapani"] },

    // TOSCANA
    { nome: "Università degli Studi di Firenze", citta: "Firenze", regione: "Toscana", studenti: 51529, altresedi: ["Calenzano", "Empoli", "Figline Valdarno", "Pistoia", "Prato", "San Giovanni Valdarno", "Sesto Fiorentino", "Lagonegro"] },
    { nome: "Scuola IMT Alti Studi Lucca", citta: "Lucca", regione: "Toscana", studenti: 254, altresedi: [] },
    { nome: "Scuola Normale Superiore", citta: "Pisa", regione: "Toscana", studenti: 576, altresedi: ["Firenze", "Cortona"] },
    { nome: "Scuola Superiore Sant'Anna", citta: "Pisa", regione: "Toscana", studenti: 659, altresedi: ["Pontedera"] },
    { nome: "Università di Pisa", citta: "Pisa", regione: "Toscana", studenti: 51279, altresedi: ["Carrara", "Cecina", "Livorno", "Lucca", "Massa", "Pontedera", "Rosignano Marittimo", "Sarzana"] },
    { nome: "Università degli Studi di Siena", citta: "Siena", regione: "Toscana", studenti: 15589, altresedi: ["Colle di Val d'Elsa", "Arezzo", "San Giovanni Valdarno", "Grosseto", "Follonica"] },
    { nome: "Università per stranieri di Siena", citta: "Siena", regione: "Toscana", studenti: 2242, altresedi: [] },

    // TRENTINO-ALTO ADIGE
    { nome: "Università degli Studi di Trento", citta: "Trento", regione: "Trentino-Alto Adige", studenti: 16410, altresedi: ["Rovereto"] },

    // UMBRIA
    { nome: "Università degli Studi di Perugia", citta: "Perugia", regione: "Umbria", studenti: 27000, altresedi: ["Orvieto", "Terni", "Foligno", "Assisi", "Narni"] },
    { nome: "Università per stranieri di Perugia", citta: "Perugia", regione: "Umbria", studenti: 956, altresedi: [] },

    // VENETO
    { nome: "Università degli Studi di Padova", citta: "Padova", regione: "Veneto", studenti: 74500, altresedi: ["Asiago", "Castelfranco Veneto", "Chioggia", "Conegliano", "Feltre", "Mirano", "Legnaro", "Rovigo", "Treviso", "Venezia", "Vicenza", "Vittorio Veneto", "Portogruaro"] },
    { nome: "Università Ca' Foscari Venezia", citta: "Venezia", regione: "Veneto", studenti: 20795, altresedi: ["Treviso", "Portogruaro", "Mestre"] },
    { nome: "Università Iuav di Venezia", citta: "Venezia", regione: "Veneto", studenti: 4200, altresedi: ["Mestre", "Treviso"] },
    { nome: "Università degli Studi di Verona", citta: "Verona", regione: "Veneto", studenti: 24190, altresedi: ["Ala", "Bolzano", "Mantova", "Rovereto", "Trento", "Vicenza", "Canazei"] },
];

const corpoTabella = document.getElementById("tabellauni");

function renderizzaTabella(lista){
    corpoTabella.innerHTML = "";
    let n = 1;
    for (let uni of lista) {
        let riga = `<tr>
            <td>${n}</td>
            <td>${uni.nome}</td>
            <td>${uni.citta}</td>
            <td>${uni.regione}</td>
            <td>${uni.studenti.toLocaleString()}</td> 
        </tr>`;
        corpoTabella.innerHTML += riga;
        n++;
    }
}

function ordinaPerRegione() {
    renderizzaTabella(universita);
}

function ordinaPerStudenti() {
    let copiauniversita = [...universita]
    copiauniversita.sort((a, b) => b.studenti - a.studenti);
    renderizzaTabella(copiauniversita);
}

renderizzaTabella(universita);