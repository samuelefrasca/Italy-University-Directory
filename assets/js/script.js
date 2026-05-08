const unistatali = [
    // ABRUZZO
    { nome: "Università degli Studi \"Gabriele d'Annunzio\" di Chieti-Pescara", sigla: "UniCh", citta: "Chieti - Pescara", regione: "Abruzzo", studenti: 21097, link: "https://www.unich.it/" },
    { nome: "Università degli Studi dell'Aquila", citta: "L'Aquila", sigla: "UnivAq", regione: "Abruzzo", studenti: 16613, link: "https://www.univaq.it/" },
    { nome: "Università degli Studi di Teramo", citta: "Teramo", sigla: "UniTe", regione: "Abruzzo", studenti: 5057, link: "https://www.unite.it/UniTE/" },

    // BASILICATA
    { nome: "Università degli Studi della Basilicata", sigla: "UniBas", citta: "Potenza - Matera", regione: "Basilicata", studenti: 6631, link: "https://portale.unibas.it/site/home.html" },

    // CALABRIA
    { nome: "Università degli Studi Magna Græcia di Catanzaro", sigla: "UniCz", citta: "Catanzaro", regione: "Calabria", studenti: 12572, link: "https://web.unicz.it/it/" },
    { nome: "Università della Calabria", citta: "Rende (CS)", sigla: "UniCal", regione: "Calabria", studenti: 23027, link: "https://www.unical.it/" },
    { nome: "Università degli Studi \"Mediterranea\" di Reggio Calabria", sigla: "UniRc", citta: "Reggio Calabria", regione: "Calabria", studenti: 4955, link: "https://www.unirc.it/" },

    // CAMPANIA
    { nome: "Università degli Studi della Campania \"Luigi Vanvitelli\"", sigla: "UniCampania", citta: "Caserta", regione: "Campania", studenti: 25299, link: "https://unicampania.it/" },
    { nome: "Università degli Studi di Napoli \"Federico II\"", sigla: "UniNa", citta: "Napoli", regione: "Campania", studenti: 71799, link: "https://www.unina.it/it/" },
    { nome: "Università degli Studi di Napoli \"L'Orientale\"", sigla: "UniOr", citta: "Napoli", regione: "Campania", studenti: 11164, link: "https://www.unior.it/it" },
    { nome: "Università degli Studi di Napoli \"Parthenope\"", sigla: "UniParthenope", citta: "Napoli", regione: "Campania", studenti: 14716, link: "https://www.uniparthenope.it/" },
    { nome: "Università degli Studi di Salerno", sigla: "UniSa", citta: "Fisciano (SA)", regione: "Campania", studenti: 33332, link: "https://www.unisa.it/" },
    { nome: "Università degli Studi del Sannio", sigla: "UniSannio", citta: "Benevento", regione: "Campania", studenti: 3768, link: "https://www.unisannio.it/it" },

    // EMILIA-ROMAGNA
    { nome: "Alma Mater Studiorum - Università di Bologna", sigla: "UniBo", citta: "Bologna", regione: "Emilia-Romagna", studenti: 96945, link: "https://www.unibo.it/it" },
    { nome: "Università degli Studi di Ferrara", sigla: "UniFe", citta: "Ferrara", regione: "Emilia-Romagna", studenti: 28522, link: "https://www.unife.it/it" },
    { nome: "Università degli Studi di Modena e Reggio Emilia", sigla: "UniMoRe", citta: "Modena - Reggio Emilia", regione: "Emilia-Romagna", studenti: 25705, link: "https://www.unimore.it/it" },
    { nome: "Università degli Studi di Parma", sigla: "UniPr", citta: "Parma", regione: "Emilia-Romagna", studenti: 35377, link: "https://www.unipr.it/" },

    // FRIULI-VENEZIA GIULIA
    { nome: "Università degli Studi di Trieste", sigla: "UniTs", citta: "Trieste", regione: "Friuli-Venezia Giulia", studenti: 15759, link: "https://portale.units.it/it" },
    { nome: "Università degli Studi di Udine", sigla: "UniUd", citta: "Udine", regione: "Friuli-Venezia Giulia", studenti: 15269, link: "https://www.uniud.it/it" },

    // LAZIO
    { nome: "Università degli Studi di Cassino e del Lazio Meridionale", sigla: "UniCas", citta: "Cassino", regione: "Lazio", studenti: 6983, link: "https://www.unicas.it/" },
    { nome: "Sapienza Università di Roma", sigla: "UniRoma1", citta: "Roma", regione: "Lazio", studenti: 120000, link: "https://www.uniroma1.it/it/" },
    { nome: "Università degli Studi di Roma Tor Vergata", sigla: "UniRoma2", citta: "Roma", regione: "Lazio", studenti: 35000, link: "https://web.uniroma2.it/it" },
    { nome: "Università degli Studi Roma Tre", sigla: "UniRoma3", citta: "Roma", regione: "Lazio", studenti: 37051, link: "https://www.uniroma3.it/" },
    { nome: "Università degli Studi di Roma \"Foro Italico\"", sigla: "UniRoma4", citta: "Roma", regione: "Lazio", studenti: 2377, link: "https://www.uniroma4.it/" },
    { nome: "Università degli Studi della Tuscia", sigla: "UniTus", citta: "Viterbo", regione: "Lazio", studenti: 7666, link: "https://www.unitus.it/" },

    // LIGURIA
    { nome: "Università degli Studi di Genova", sigla: "UniGe", citta: "Genova", regione: "Liguria", studenti: 31860, link: "https://unige.it/" },

    // LOMBARDIA
    { nome: "Università degli Studi di Bergamo", sigla: "UniBg", citta: "Bergamo", regione: "Lombardia", studenti: 19947, link: "https://www.unibg.it/" },
    { nome: "Università degli Studi di Brescia", sigla: "UniBs", citta: "Brescia", regione: "Lombardia", studenti: 16800, link: "https://www.unibs.it/it" },
    { nome: "Politecnico di Milano", sigla: "PoliMi", citta: "Milano", regione: "Lombardia", studenti: 47959, link: "https://www.polimi.it/" },
    { nome: "Università degli Studi di Milano", sigla: "UniMi", citta: "Milano", regione: "Lombardia", studenti: 59177, link: "https://www.unimi.it/it" },
    { nome: "Università degli Studi di Milano-Bicocca", sigla: "UniMiB", citta: "Milano", regione: "Lombardia", studenti: 36263, link: "https://www.unimib.it/" },
    { nome: "Università degli Studi di Pavia", sigla: "UniPv", citta: "Pavia", regione: "Lombardia", studenti: 25070, link: "https://portale.unipv.it/it" },
    { nome: "Università degli Studi dell'Insubria", sigla: "Uninsubria", citta: "Varese - Como", regione: "Lombardia", studenti: 11414, link: "https://www.uninsubria.it/" },

    // MARCHE
    { nome: "Università Politecnica delle Marche", sigla: "UnivPM", citta: "Ancona", regione: "Marche", studenti: 15439, link: "https://www.univpm.it/Entra/" },
    { nome: "Università degli Studi di Camerino", sigla: "UniCam", citta: "Camerino (MC)", regione: "Marche", studenti: 5716, link: "https://www.unicam.it/" },
    { nome: "Università degli Studi di Macerata", sigla: "UniMc", citta: "Macerata", regione: "Marche", studenti: 9259, link: "https://www.unimc.it/it" },
    { nome: "Università degli Studi di Urbino \"Carlo Bo\"", sigla: "UniUrb", citta: "Urbino", regione: "Marche", studenti: 17409, link: "https://www.uniurb.it/" },

    // MOLISE
    { nome: "Università degli Studi del Molise", sigla: "UniMol", citta: "Campobasso", regione: "Molise", studenti: 7001, link: "https://www3.unimol.it/" },

    // PIEMONTE
    { nome: "Università degli Studi del Piemonte Orientale \"Amedeo Avogadro\"", sigla: "UPO", citta: "Alessandria - Novara - Vercelli", regione: "Piemonte", studenti: 16802, link: "https://www.uniupo.it/it" },
    { nome: "Università degli Studi di Torino", sigla: "UniTo", citta: "Torino", regione: "Piemonte", studenti: 83000, link: "https://www.unito.it/" },
    { nome: "Politecnico di Torino", sigla: "PoliTo", citta: "Torino", regione: "Piemonte", studenti: 34721, link: "https://www.polito.it/" },

    // PUGLIA
    { nome: "Politecnico di Bari", sigla: "PoliBa", citta: "Bari", regione: "Puglia", studenti: 10072, link: "https://www.poliba.it/" },
    { nome: "Università degli Studi di Bari Aldo Moro", sigla: "UniBa", citta: "Bari", regione: "Puglia", studenti: 40530, link: "https://www.uniba.it/it" },
    { nome: "Università degli Studi di Foggia", sigla: "UniFg", citta: "Foggia", regione: "Puglia", studenti: 13560, link: "https://www.unifg.it/it" },
    { nome: "Università del Salento", sigla: "UniSalento", citta: "Lecce", regione: "Puglia", studenti: 20201, link: "https://www.unisalento.it/" },

    // SARDEGNA
    { nome: "Università degli Studi di Cagliari", sigla: "UniCa", citta: "Cagliari", regione: "Sardegna", studenti: 25263, link: "https://www.unica.it/it" },
    { nome: "Università degli Studi di Sassari", sigla: "UniSs", citta: "Sassari", regione: "Sardegna", studenti: 13507, link: "https://www.uniss.it/it" },

    // SICILIA
    { nome: "Università degli Studi di Catania", sigla: "UniCt", citta: "Catania", regione: "Sicilia", studenti: 40287, link: "https://www.unict.it/" },
    { nome: "Università degli Studi di Messina", sigla: "UniMe", citta: "Messina", regione: "Sicilia", studenti: 23565, link: "https://www.unime.it/" },
    { nome: "Università degli Studi di Palermo", sigla: "UniPa", citta: "Palermo", regione: "Sicilia", studenti: 41498, link: "https://www.unipa.it/" },

    // TOSCANA
    { nome: "Università degli Studi di Firenze", sigla: "UniFi", citta: "Firenze", regione: "Toscana", studenti: 51529, link: "https://www.unifi.it/it" },
    { nome: "Università di Pisa", sigla: "UniPi", citta: "Pisa", regione: "Toscana", studenti: 51279, link: "https://www.unipi.it/" },
    { nome: "Università degli Studi di Siena", sigla: "UniSi", citta: "Siena", regione: "Toscana", studenti: 15589, link: "https://www.unisi.it/" },
    { nome: "Università per stranieri di Siena", sigla: "UniStraSi", citta: "Siena", regione: "Toscana", studenti: 2242, link: "https://www.unistrasi.it/" },

    // TRENTINO ALTO-ADIGE
    { nome: "Università degli Studi di Trento", sigla: "UniTn", citta: "Trento", regione: "Trentino Alto-Adige", studenti: 16410, link: "https://www.unitn.it/it" },

    // UMBRIA
    { nome: "Università degli Studi di Perugia", sigla: "UniPg", citta: "Perugia", regione: "Umbria", studenti: 27000, link: "https://www.unipg.it/" },
    { nome: "Università per stranieri di Perugia", sigla: "UniStraPg", citta: "Perugia", regione: "Umbria", studenti: 956, link: "https://www.unistrapg.it/" },

    // VENETO
    { nome: "Università degli Studi di Padova", sigla: "UniPd", citta: "Padova", regione: "Veneto", studenti: 74500, link: "https://www.unipd.it/" },
    { nome: "Università Ca' Foscari Venezia", sigla: "UniVe", citta: "Venezia", regione: "Veneto", studenti: 20795, link: "https://www.unive.it/" },
    { nome: "Università Iuav di Venezia", sigla: "Iuav", citta: "Venezia", regione: "Veneto", studenti: 4200, link: "https://www.iuav.it/it" },
    { nome: "Università degli Studi di Verona", sigla: "UniVr", citta: "Verona", regione: "Veneto", studenti: 24190, link: "https://www.univr.it/" },
];

const superiori = [
    // ABRUZZO
    { nome: "Scuola universitaria superiore \"Gran Sasso Science Institute\"", sigla: "GSSI", citta: "L'Aquila", regione: "Abruzzo", studenti: 160, link: "https://gssi.it/" },

    // CAMPANIA
    { nome: "Scuola Superiore Meridionale", sigla: "SSM", citta: "Napoli", regione: "Campania", studenti: 150, link: "https://www.ssmeridionale.it/" },

    // FRIULI-VENEZIA GIULIA
    { nome: "Scuola Internazionale Superiore di Studi Avanzati", sigla: "SISSA", citta: "Trieste", regione: "Friuli-Venezia Giulia", studenti: 302, link: "https://www.sissa.it/" },

    // LAZIO
    { nome: "Centro Alti Studi per la Difesa", sigla: "CASD", citta: "Roma", regione: "Lazio", studenti: 1000, link: "https://www.difesa.it/smd/casd/index/26451.html" },

    // LOMBARDIA
    { nome: "Istituto Universitario di Studi Superiori", sigla: "IUSS", citta: "Pavia", regione: "Lombardia", studenti: 293, link: "https://www.iusspavia.it/it" },

    // TOSCANA
    { nome: "Scuola IMT Alti Studi Lucca", sigla: "IMT", citta: "Lucca", regione: "Toscana", studenti: 254, link: "https://www.imtlucca.it/homepage" },
    { nome: "Scuola Normale Superiore", sigla: "SNS", citta: "Pisa", regione: "Toscana", studenti: 576, link: "https://www.sns.it/it" },
    { nome: "Scuola superiore di studi universitari e di perfezionamento Sant'Anna", sigla: "SSSUP", citta: "Pisa", regione: "Toscana", studenti: 659, link: "https://www.santannapisa.it/it" },
];

const uniprivate = [
    // CALABRIA
    { nome: "Università per Stranieri \"Dante Alighieri\" di Reggio Calabria", sigla: "UniDa", citta: "Reggio Calabria", regione: "Calabria", studenti: 444, link: "https://www.unidarc.it/" },

    // CAMPANIA
    { nome: "Università degli Studi \"Suor Orsola Benincasa\"", sigla: "UniSob", citta: "Napoli", regione: "Campania", studenti: 8800, link: "https://www.unisob.na.it/" },

    // LAZIO
    { nome: "Link Campus University", sigla: "Link", citta: "Roma", regione: "Lazio", studenti: 1200, link: "https://www.unilink.it/" },
    { nome: "LUISS - Libera Università Internazionale Studi Sociali \"Guido Carli\"", sigla: "LUISS", citta: "Roma", regione: "Lazio", studenti: 12000, link: "https://www.luiss.it/" },
    { nome: "LUMSA - Libera Università Maria Santissima Assunta", sigla: "LUMSA", citta: "Roma", regione: "Lazio", studenti: 9900, link: "https://lumsa.it/it/home" },
    { nome: "Saint Camillus International University of Health and Medical Sciences", sigla: "UniCamillus", citta: "Roma", regione: "Lazio", studenti: 2500, link: "https://unicamillus.org/" },
    { nome: "Università Campus Bio-Medico di Roma", sigla: "UCBM", citta: "Roma", regione: "Lazio", studenti: 4000, link: "https://www.unicampus.it/" },
    { nome: "Università Europea di Roma", sigla: "UER", citta: "Roma", regione: "Lazio", studenti: 3300, link: "https://www.uer.it/" },
    { nome: "Università degli Studi Internazionali di Roma", sigla: "Unint", citta: "Roma", regione: "Lazio", studenti: 1354, link: "https://www.unint.eu/" },

    // LOMBARDIA
    { nome: "Humanitas University", sigla: "Hunimed", citta: "Rozzano (MI)", regione: "Lombardia", studenti: 2700, link: "https://www.hunimed.eu/it/" },
    { nome: "IULM - Libera università di lingue e comunicazione", sigla: "IULM", citta: "Milano", regione: "Lombardia", studenti: 5000, link: "https://www.iulm.it/it/home" },
    { nome: "LIUC - Università Carlo Cattaneo", sigla: "LIUC", citta: "Castellanza (VA)", regione: "Lombardia", studenti: 2800, link: "https://www.liuc.it/" },
    { nome: "Università Cattolica del Sacro Cuore", sigla: "UniCatt", citta: "Milano", regione: "Lombardia", studenti: 40837, link: "https://www.unicatt.it/" },
    { nome: "Università commerciale \"Luigi Bocconi\"", sigla: "Bocconi", citta: "Milano", regione: "Lombardia", studenti: 15200, link: "https://www.unibocconi.it/it" },
    { nome: "Università Vita-Salute \"San Raffaele\"", sigla: "UniSR", citta: "Milano", regione: "Lombardia", studenti: 5158, link: "https://www.unisr.it/" },

    // PIEMONTE
    { nome: "Università degli Studi di Scienze Gastronomiche", sigla: "UniSG", citta: "Pollenzo, Bra (CN)", regione: "Piemonte", studenti: 1000, link: "https://www.unisg.it/" },

    // PUGLIA
    { nome: "Libera Università Mediterranea \"Giuseppe Degennaro\"", sigla: "LUM", citta: "Casamassima (BA)", regione: "Puglia", studenti: 3000, link: "https://www.lum.it/" },

    // SICILIA
    { nome: "Libera Università degli Studi di Enna \"Kore\"", sigla: "UKE", citta: "Enna", regione: "Sicilia", studenti: 7411, link: "https://uke.it/" },

    // TRENTINO ALTO-ADIGE
    { nome: "Libera Università di Bolzano", sigla: "UniBz", citta: "Bolzano", regione: "Trentino Alto-Adige", studenti: 4500, link: "https://www.unibz.it/it/" },

    // VALLE D'AOSTA
    { nome: "Università della Valle d'Aosta", sigla: "UniVdA", citta: "Aosta", regione: "Valle d’Aosta", studenti: 1032, link: "https://www.univda.it/" },
];

const abastatali = [
    // ABRUZZO
    { nome: "Accademia di Belle Arti dell'Aquila", sigla: "AbaAq", citta: "L'Aquila", regione: "Abruzzo", studenti: 484, link: "https://www.abaq.it/" },

    // CALABRIA
    { nome: "Accademia di Belle Arti di Catanzaro", sigla: "AbaCz", citta: "Catanzaro", regione: "Calabria", studenti: 424, link: "https://www.abacatanzaro.it/" },
    { nome: "Accademia di Belle Arti di Reggio Calabria", sigla: "AbaRc", citta: "Reggio Calabria", regione: "Calabria", studenti: 550, link: "https://www.abarc.it/" },

    // CAMPANIA
    { nome: "Accademia di Belle Arti di Napoli", sigla: "AbaNa", citta: "Napoli", regione: "Campania", studenti: 4101, link: "https://www.abana.it/" },

    // EMILIA-ROMAGNA
    { nome: "Accademia di Belle Arti di Bologna", sigla: "AbaBo", citta: "Bologna", regione: "Emilia-Romagna", studenti: 2184, link: "https://www.ababo.it/" },
    { nome: "Accademia di Belle Arti di Ravenna", sigla: "AbaRa", citta: "Ravenna", regione: "Emilia-Romagna", studenti: 187, link: "https://www.abaravenna.it/" },

    // LAZIO
    { nome: "Accademia di Belle Arti di Roma", sigla: "AbaRm", citta: "Roma", regione: "Lazio", studenti: 3102, link: "https://abaroma.it/" },
    { nome: "Accademia di Belle Arti di Frosinone", sigla: "AbaFr", citta: "Frosinone", regione: "Lazio", studenti: 639, link: "https://www.accademiabellearti.fr.it/" },

    // LIGURIA
    { nome: "Accademia Ligustica di Belle Arti di Genova", sigla: "AbaGe", citta: "Genova", regione: "Liguria", studenti: 638, link: "https://www.accademialigustica.it/" },

    // LOMBARDIA
    { nome: "Accademia di Belle Arti di Brera", sigla: "AbaMi", citta: "Milano", regione: "Lombardia", studenti: 4263, link: "https://www.accademiadibrera.milano.it/" },
    { nome: "Politecnico delle Arti di Bergamo", sigla: "AbaBg", citta: "Bergamo", regione: "Lombardia", studenti: 285, link: "https://accademiabellearti.bg.it/" },

    // MARCHE
    { nome: "Accademia di Belle Arti di Macerata", sigla: "AbaMc", citta: "Macerata", regione: "Marche", studenti: 1371, link: "https://abamc.it/" },
    { nome: "Accademia di Belle Arti di Urbino", sigla: "AbaUr", citta: "Urbino", regione: "Marche", studenti: 428, link: "https://www.accademiadiurbino.it/" },

    // PIEMONTE
    { nome: "Accademia Albertina di Belle Arti di Torino", sigla: "AbaTo", citta: "Torino", regione: "Piemonte", studenti: 1634, link: "https://albertina-academy.it/" },

    // PUGLIA
    { nome: "Accademia di Belle Arti di Bari", sigla: "AbaBa", citta: "Bari", regione: "Puglia", studenti: 1210, link: "https://www.accademiabelleartiba.it/" },
    { nome: "Accademia di Belle Arti di Foggia", sigla: "AbaFg", citta: "Foggia", regione: "Puglia", studenti: 796, link: "https://www.abafg.it/" },
    { nome: "Accademia di Belle Arti di Lecce", sigla: "AbaLe", citta: "Lecce", regione: "Puglia", studenti: 822, link: "https://www.accademialecce.edu.it/" },

    // SARDEGNA
    { nome: "Accademia di Belle Arti \"Mario Sironi\" di Sassari", sigla: "AbaSs", citta: "Sassari", regione: "Sardegna", studenti: 594, link: "https://www.accademiasironi.it/" },

    // SICILIA
    { nome: "Accademia di Belle Arti di Catania", sigla: "AbaCt", citta: "Catania", regione: "Sicilia", studenti: 2453, link: "https://www.abacatania.it/" },
    { nome: "Accademia di Belle Arti di Palermo", sigla: "AbaPa", citta: "Palermo", regione: "Sicilia", studenti: 1526, link: "https://www.accademiadipalermo.it/" },

    // TOSCANA
    { nome: "Accademia di Belle Arti di Carrara", sigla: "AbaCa", citta: "Carrara", regione: "Toscana", studenti: 1153, link: "https://accademiacarrara.it/" },
    { nome: "Accademia di Belle Arti di Firenze", sigla: "AbaFi", citta: "Firenze", regione: "Toscana", studenti: 2103, link: "https://www.accademia.firenze.it/" },

    // UMBRIA
    { nome: "Accademia di Belle Arti \"Pietro Vannucci\" di Perugia", sigla: "AbaPg", citta: "Perugia", regione: "Umbria", studenti: 644, link: "https://www.abaperugia.com/" },

    // VENETO
    { nome: "Accademia di Belle Arti di Venezia", sigla: "AbaVe", citta: "Venezia", regione: "Veneto", studenti: 1879, link: "https://accademiavenezia.it/" },
    { nome: "Accademia di Belle Arti di Verona", sigla: "AbaVr", citta: "Verona", regione: "Veneto", studenti: 786, link: "https://accademiabelleartiverona.it/" },
];

const conservatori = [
    // ABRUZZO
    { nome: "Conservatorio statale di musica dell'Aquila \"Alfredo Casella\"", sigla: "ConsAq", citta: "L'Aquila", regione: "Abruzzo", studenti: 475, link: "https://www.consaq.it/" },
    { nome: "Conservatorio statale di musica di Pescara \"Luisa d'Annunzio\"", sigla: "ConsPe", citta: "Pescara", regione: "Abruzzo", studenti: 513, link: "https://www.conservatoriopescara.it/" },
    { nome: "Conservatorio statale di musica di Teramo \"Gaetano Braga\"", sigla: "ConsTe", citta: "Teramo", regione: "Abruzzo", studenti: 247, link: "https://www.conservatoriobraga.it/" },

    // BASILICATA
    { nome: "Conservatorio statale di musica di Matera \"Egidio Romualdo Duni\"", sigla: "ConsMt", citta: "Matera", regione: "Basilicata", studenti: 390, link: "http://www.conservatoriomatera.it/" },
    { nome: "Conservatorio statale di musica di Potenza \"Gesualdo da Venosa\"", sigla: "ConsPz", citta: "Potenza", regione: "Basilicata", studenti: 270, link: "https://www.conservatoriopotenza.it/" },

    // CALABRIA
    { nome: "Conservatorio statale di musica di Cosenza \"Stanislao Giacomantonio\"", sigla: "ConsCs", citta: "Cosenza", regione: "Calabria", studenti: 667, link: "https://www.conservatoriocosenza.it/" },
    { nome: "Conservatorio statale di musica di Nocera Terinese (CZ) \"Pyotr Ilyich Tchaikovsky\"", sigla: "ConsCz", citta: "Nocera Terinese (CZ)", regione: "Calabria", studenti: 664, link: "https://www.conscz.it/" },
    { nome: "Conservatorio statale di musica di Reggio Calabria \"Francesco Cilea\"", sigla: "ConsRc", citta: "Reggio Calabria", regione: "Calabria", studenti: 331, link: "https://www.conservatoriocilea.it/" },
    { nome: "Conservatorio statale di musica di Vibo Valentia \"Fausto Torrefranca\"", sigla: "ConsVv", citta: "Vibo Valentia", regione: "Calabria", studenti: 371, link: "https://www.conservatoriovibo.it/" },

    // CAMPANIA
    { nome: "Conservatorio statale di musica di Avellino \"Domenico Cimarosa\"", sigla: "ConsAv", citta: "Avellino", regione: "Campania", studenti: 844, link: "https://conservatoriocimarosa.org/" },
    { nome: "Conservatorio statale di musica di Benevento \"Nicola Sala\"", sigla: "ConsBn", citta: "Benevento", regione: "Campania", studenti: 776, link: "https://www.conservatorionicolasala.eu/" },
    { nome: "Conservatorio statale di musica di Napoli \"S. Pietro a Majella\"", sigla: "ConsNa", citta: "Napoli", regione: "Campania", studenti: 864, link: "https://www.sanpietroamajella.it/" },
    { nome: "Conservatorio statale di musica di Salerno \"Giuseppe Martucci\"", sigla: "ConsSa", citta: "Salerno", regione: "Campania", studenti: 1078, link: "https://www.consalerno.it/" },

    // EMILIA-ROMAGNA
    { nome: "Conservatorio statale di musica di Bologna \"Giovan Battista Martini\"", sigla: "ConsBo", citta: "Bologna", regione: "Emilia-Romagna", studenti: 711, link: "https://www.consbo.it/" },
    { nome: "Conservatorio statale di musica di Cesena e Rimini \"Bruno Maderna-Giovanni Lettimi\"", sigla: "ConsCeRi", citta: "Cesena - Rimini", regione: "Emilia-Romagna", studenti: 306, link: "https://www.madernalettimi.it/" },
    { nome: "Conservatorio statale di musica di Ferrara \"Girolamo Frescobaldi\"", sigla: "ConsFe", citta: "Ferrara", regione: "Emilia-Romagna", studenti: 251, link: "https://www.consfe.it/" },
    { nome: "Conservatorio statale di musica di Modena e Carpi (MO) \"Orazio Vecchi - Antonio Tonelli\"", sigla: "ConsMoCa", citta: "Modena - Carpi (MO)", regione: "Emilia-Romagna", studenti: 188, link: "https://www.vecchitonelli.it/" },
    { nome: "Conservatorio statale di musica di Parma \"Arrigo Boito\"", sigla: "ConsPr", citta: "Parma", regione: "Emilia-Romagna", studenti: 735, link: "https://www.conservatorio.pr.it/" },
    { nome: "Conservatorio statale di musica di Piacenza \"Giuseppe Nicolini\"", sigla: "ConsPc", citta: "Piacenza", regione: "Emilia-Romagna", studenti: 314, link: "https://www.conservatorionicolini.com/" },
    { nome: "Conservatorio statale di musica di Ravenna \"Giuseppe Verdi\"", sigla: "ConsRa", citta: "Ravenna", regione: "Emilia-Romagna", studenti: 195, link: "https://www.verdiravenna.it/" },
    { nome: "Conservatorio statale di musica di Reggio Emilia e Castelnuovo né Monti (RE) \"Achille Peri e Claudio Merulo\"", sigla: "ConsReCa", citta: "Reggio Emilia - Castelnovo ne' Monti (RE)", regione: "Emilia-Romagna", studenti: 217, link: "https://www.consperimerulo.it/" },

    // FRIULI-VENEZIA GIULIA
    { nome: "Conservatorio statale di musica di Trieste \"Giuseppe Tartini\"", sigla: "ConsTs", citta: "Trieste", regione: "Friuli-Venezia Giulia", studenti: 496, link: "https://www.conts.it/" },
    { nome: "Conservatorio statale di musica di Udine \"Jacopo Tomadini\"", sigla: "ConsUd", citta: "Udine", regione: "Friuli-Venezia Giulia", studenti: 236, link: "https://www.conservatorio.udine.it/" },

    // LAZIO
    { nome: "Conservatorio statale di musica di Frosinone \"Licinio Refice\"", sigla: "ConsFr", citta: "Frosinone", regione: "Lazio", studenti: 524, link: "https://www.conservatorio-frosinone.it/" },
    { nome: "Conservatorio statale di musica di Latina \"Ottorino Respighi\"", sigla: "ConsLt", citta: "Latina", regione: "Lazio", studenti: 318, link: "https://www.conslatina.it/" },
    { nome: "Conservatorio statale di musica di Roma \"Santa Cecilia\"", sigla: "ConsRm", citta: "Roma", regione: "Lazio", studenti: 1378, link: "https://www.conservatoriosantacecilia.it/" },

    // LIGURIA
    { nome: "Conservatorio statale di musica di Genova \"Nicolò Paganini\"", sigla: "ConsGe", citta: "Genova", regione: "Liguria", studenti: 318, link: "https://www.conspaganini.it/" },
    { nome: "Conservatorio statale di musica di La Spezia \"Giacomo Puccini\"", sigla: "ConsSp", citta: "La Spezia", regione: "Liguria", studenti: 235, link: "https://conssp.it/" },

    // LOMBARDIA
    { nome: "Conservatorio statale di musica di Brescia \"Luca Marenzio\"", sigla: "ConsBs", citta: "Brescia - Darfo Boario Terme (BS)", regione: "Lombardia", studenti: 454, link: "https://www.consbs.it/" },
    { nome: "Conservatorio statale di musica di Como \"Giuseppe Verdi\"", sigla: "ConsCo", citta: "Como", regione: "Lombardia", studenti: 311, link: "https://www.conservatoriocomo.it/" },
    { nome: "Conservatorio statale di musica di Cremona \"Claudio Monteverdi\"", sigla: "ConsCr", citta: "Cremona", regione: "Lombardia", studenti: 95, link: "https://www.conscremona.it/" },
    { nome: "Conservatorio statale di musica di Gallarate (VA) \"Giacomo Puccini\"", sigla: "ConsGa", citta: "Gallarate (VA)", regione: "Lombardia", studenti: 119, link: "https://issmpuccinigallarate.it/" },
    { nome: "Conservatorio statale di musica di Mantova \"Lucio Campiani\"", sigla: "ConsMn", citta: "Mantova", regione: "Lombardia", studenti: 219, link: "https://www.conservatoriomantova.com/it/home" },
    { nome: "Conservatorio statale di musica di Milano \"Giuseppe Verdi\"", sigla: "ConsMi", citta: "Milano", regione: "Lombardia", studenti: 1193, link: "https://www.consmilano.it/" },
    { nome: "Conservatorio statale di musica di Pavia \"Franco Vittadini\"", sigla: "ConsPv", citta: "Pavia", regione: "Lombardia", studenti: 222, link: "https://conspv.it/" },
    { nome: "Politecnico delle Arti statale di Bergamo \"Gaetano Donizetti - Giacomo Carrara\" (sezione musicale)", sigla: "ConsBg", citta: "Bergamo", regione: "Lombardia", studenti: 296, link: "https://www.consbg.it/" },

    // MARCHE
    { nome: "Conservatorio statale di musica di Fermo \"Giovambattista Pergolesi\"", sigla: "ConsFm", citta: "Fermo", regione: "Marche", studenti: 268, link: "https://conservatorio.net/" },
    { nome: "Conservatorio statale di musica di Pesaro \"Gioachino Rossini\"", sigla: "ConsPs", citta: "Pesaro", regione: "Marche", studenti: 360, link: "https://www.conservatoriorossini.it/" },

    // MOLISE
    { nome: "Conservatorio statale di musica di Campobasso \"Lorenzo Perosi\"", sigla: "ConsCb", citta: "Campobasso", regione: "Molise", studenti: 275, link: "https://www.conservatorioperosi.it/" },

    // PIEMONTE
    { nome: "Conservatorio statale di musica di Alessandria \"Antonio Vivaldi\"", sigla: "ConsAl", citta: "Alessandria", regione: "Piemonte", studenti: 287, link: "https://www.conservatoriovivaldi.it/" },
    { nome: "Conservatorio statale di musica di Cuneo \"Giorgio Federico Ghedini\"", sigla: "ConsCn", citta: "Cuneo", regione: "Piemonte", studenti: 289, link: "https://www.conservatoriocuneo.it/" },
    { nome: "Conservatorio statale di musica di Novara \"Guido Cantelli\"", sigla: "ConsNo", citta: "Novara", regione: "Piemonte", studenti: 314, link: "https://consno.it/" },
    { nome: "Conservatorio statale di musica di Torino \"Giuseppe Verdi\"", sigla: "ConsTo", citta: "Torino", regione: "Piemonte", studenti: 622, link: "https://www.conservatoriotorino.eu/" },

    // PUGLIA
    { nome: "Conservatorio statale di musica di Bari \"Niccolò Piccinni\"", sigla: "ConsBa", citta: "Bari", regione: "Puglia", studenti: 656, link: "https://www.conservatoriopiccinni.it/" },
    { nome: "Conservatorio statale di musica di Foggia \"Umberto Giordano\"", sigla: "ConsFg", citta: "Foggia - Rodi Garganico (FG)", regione: "Puglia", studenti: 496, link: "https://www.conservatoriofoggia.it/" },
    { nome: "Conservatorio statale di musica di Lecce \"Tito Schipa\"", sigla: "ConsLe", citta: "Lecce - Ceglie Messapica (BR)", regione: "Puglia", studenti: 469, link: "https://www.conservatoriolecce.it/" },
    { nome: "Conservatorio statale di musica di Monopoli (BA) \"Nino Rota\"", sigla: "ConsMo", citta: "Monopoli (BA)", regione: "Puglia", studenti: 374, link: "https://www.conservatoriodimonopoli.org/" },
    { nome: "Conservatorio statale di musica di Taranto \"Giovanni Paisiello\"", sigla: "ConsTa", citta: "Taranto", regione: "Puglia", studenti: 233, link: "https://www.paisiello.it/" },

    // SARDEGNA
    { nome: "Conservatorio di musica statale di Cagliari \"Pierluigi da Palestrina\"", sigla: "ConsCa", citta: "Cagliari", regione: "Sardegna", studenti: 429, link: "https://www.conservatoriocagliari.it/" },
    { nome: "Conservatorio di musica statale di Sassari \"Luigi Canepa\"", sigla: "ConsSs", citta: "Sassari", regione: "Sardegna", studenti: 284, link: "https://www.conservatorio.sassari.it/" },

    // SICILIA
    { nome: "Conservatorio statale di musica di Caltanissetta \"Vincenzo Bellini\"", sigla: "ConsCl", citta: "Caltanissetta", regione: "Sicilia", studenti: 405, link: "https://www.issmbellini.cl.it/" },
    { nome: "Conservatorio statale di musica di Catania \"Vincenzo Bellini\"", sigla: "ConsCt", citta: "Catania", regione: "Sicilia", studenti: 579, link: "https://www.conservatoriocatania.it/" },
    { nome: "Conservatorio statale di musica di Messina \"Arcangelo Corelli\"", sigla: "ConsMe", citta: "Messina", regione: "Sicilia", studenti: 538, link: "https://www.consme.it/" },
    { nome: "Conservatorio statale di musica di Palermo \"Alessandro Scarlatti\"", sigla: "ConsPa", citta: "Palermo", regione: "Sicilia", studenti: 772, link: "https://www.conservatoriopalermo.it/" },
    { nome: "Conservatorio statale di musica di Ribera (AG) \"Arturo Toscanini\"", sigla: "ConsRi", citta: "Ribera (AG)", regione: "Sicilia", studenti: 284, link: "https://www.conservatoriotoscanini.it/" },
    { nome: "Conservatorio statale di musica di Trapani \"Antonio Scontrino\"", sigla: "ConsTp", citta: "Trapani", regione: "Sicilia", studenti: 299, link: "https://www.constp.it/" },

    // TOSCANA
    { nome: "Conservatorio statale di musica di Firenze \"Luigi Cherubini\"", sigla: "ConsFi", citta: "Firenze", regione: "Toscana", studenti: 762, link: "https://www.consfi.it/" },
    { nome: "Conservatorio statale di musica di Livorno \"Pietro Mascagni\"", sigla: "ConsLi", citta: "Livorno", regione: "Toscana", studenti: 186, link: "https://www.consli.it/" },
    { nome: "Conservatorio statale di musica di Lucca \"Luigi Boccherini\"", sigla: "ConsLu", citta: "Lucca", regione: "Toscana", studenti: 243, link: "https://www.boccherini.it/" },
    { nome: "Conservatorio statale di musica di Siena \"Rinaldo Franci\"", sigla: "ConsSi", citta: "Siena", regione: "Toscana", studenti: 157, link: "https://www.conservatoriosiena.it/" },

    // TRENTINO-ALTO ADIGE
    { nome: "Conservatorio statale di musica / Hochschule für Musik di Bolzano / Bozen \"Claudio Monteverdi\"", sigla: "ConsBz", citta: "Bolzano", regione: "Trentino-Alto Adige", studenti: 332, link: "https://cons.bz.it/it/" },
    { nome: "Conservatorio statale di musica di Trento \"Francesco Antonio Bonporti\"", sigla: "ConsTn", citta: "Trento - Riva del Garda (TN)", regione: "Trentino-Alto Adige", studenti: 362, link: "https://www.conservatorio.tn.it/" },

    // UMBRIA
    { nome: "Conservatorio statale di musica di Perugia \"Francesco Morlacchi\"", sigla: "ConsPg", citta: "Perugia", regione: "Umbria", studenti: 427, link: "https://www.conservatorioperugia.it/" },
    { nome: "Conservatorio statale di musica di Terni \"Giulio Briccialdi\"", sigla: "ConsTr", citta: "Terni", regione: "Umbria", studenti: 187, link: "https://www.briccialditerni.it/" },

    // VALLE D'AOSTA
    { nome: "Istituto superiore pareggiato di studi musicali della Valle d'Aosta / Conservatoire de la Vallée d'Aoste", sigla: "ConsAo", citta: "Aosta", regione: "Valle d'Aosta", studenti: 89, link: "https://www.consaosta.it/" },

    // VENETO
    { nome: "Conservatorio statale di musica di Adria (RO) \"Antonio Buzzolla\"", sigla: "ConsAd", citta: "Adria (RO)", regione: "Veneto", studenti: 148, link: "https://www.conservatorioadria.it/" },
    { nome: "Conservatorio statale di musica di Castelfranco Veneto (TV) \"Agostino Steffani\"", sigla: "ConsCfv", citta: "Castelfranco Veneto (TV)", regione: "Veneto", studenti: 379, link: "https://conscfv.it/" },
    { nome: "Conservatorio statale di musica di Padova \"Cesare Pollini\"", sigla: "ConsPd", citta: "Padova", regione: "Veneto", studenti: 618, link: "https://www.conservatoriopollini.it/" },
    { nome: "Conservatorio statale di musica di Rovigo \"Francesco Venezze\"", sigla: "ConsRo", citta: "Rovigo", regione: "Veneto", studenti: 532, link: "https://www.conservatoriorovigo.it/" },
    { nome: "Conservatorio statale di musica di Venezia \"Benedetto Marcello\"", sigla: "ConsVe", citta: "Venezia", regione: "Veneto", studenti: 353, link: "https://www.conservatoriovenezia.net/" },
    { nome: "Conservatorio statale di musica di Verona \"Evaristo Felice Dall'Abaco\"", sigla: "ConsVr", citta: "Verona", regione: "Veneto", studenti: 440, link: "https://www.conservatorioverona.it/" },
    { nome: "Conservatorio statale di musica di Vicenza \"Arrigo Pedrollo\"", sigla: "ConsVi", citta: "Vicenza", regione: "Veneto", studenti: 424, link: "https://www.consvi.it/" }
];

const afamprivati = [
    // BASILICATA
    { nome: "Istituto del Design", sigla: "IdD", citta: "Matera", regione: "Basilicata", studenti: 58, link: "https://www.istitutodeldesign.it/" },

    // CAMPANIA
    { nome: "Accademia della Moda. Institute of Universal Art and Design", sigla: "IUAD", citta: "Napoli", regione: "Campania", studenti: 1279, link: "https://www.accademiamoda.it/" },

    // EMILIA-ROMAGNA
    { nome: "Libera Accademia di Belle Arti", sigla: "LABA", citta: "Brescia", regione: "Lombardia", studenti: 2546, link: "https://www.laba.edu/" },
    { nome: "The Bernstein School of Musical Theater", sigla: "BSMT", citta: "Bologna", regione: "Emilia-Romagna", studenti: 128, link: "https://www.bsmt.it/" },

    // FRIULI-VENEZIA GIULIA
    { nome: "Accademia di Belle Arti G.B. Tiepolo", sigla: "ABA Udine", citta: "Udine", regione: "Friuli-Venezia Giulia", studenti: 549, link: "https://www.abaud.it/" },

    // LAZIO
    { nome: "Accademia Costume & Moda", sigla: "ACM", citta: "Roma", regione: "Lazio", studenti: 485, link: "https://www.accademiacostumeemoda.it/" },
    { nome: "Accademia Internazionale di Teatro", sigla: "AIT", citta: "Roma", regione: "Lazio", studenti: 112, link: "https://www.scuoladiteatro.it/" },
    { nome: "Accademia Italiana", sigla: "AI", citta: "Roma", regione: "Lazio", studenti: 743, link: "https://www.accademiaitaliana.com/" },
    { nome: "Accademia Nazionale delle Arti e Nuove Tecnologie", sigla: "AANT", citta: "Roma", regione: "Lazio", studenti: 580, link: "https://www.accademiadellearti.it/" },
    { nome: "Istituto Pantheon Design & Technology", sigla: "Pantheon", citta: "Roma", regione: "Lazio", studenti: 362, link: "https://istitutopantheon.it/" },
    { nome: "Quasar Institute for Advanced Design", sigla: "Quasar", citta: "Roma", regione: "Lazio", studenti: 202, link: "https://quasarinstitute.it/" },
    { nome: "Saint Louis College of Music", sigla: "SLMC", citta: "Roma", regione: "Lazio", studenti: 665, link: "https://www.saintlouis.eu/" },
    { nome: "Rome University of Fine Arts", sigla: "RUFA", citta: "Roma", regione: "Lazio", studenti: 1241, link: "https://www.unirufa.it/" },
    { nome: "Accademia di Belle Arti Lorenzo da Viterbo", sigla: "ABAV", citta: "Viterbo", regione: "Lazio", studenti: 137, link: "https://www.abav.it/" },
    
    // LIGURIA
    { nome: "Accademia di Belle Arti Isadora Duncan", sigla: "ABA Sanremo", citta: "Sanremo (IM)", regione: "Liguria", studenti: 279, link: "https://www.accademiabelleartisanremo.it/" },
    
    // LOMBARDIA
    { nome: "Accademia SantaGiulia", sigla: "SantaGiulia", citta: "Brescia", regione: "Lombardia", studenti: 966, link: "https://www.accademiasantagiulia.it/" },
    { nome: "Accademia Aldo Galli", sigla: "Galli", citta: "Como", regione: "Lombardia", studenti: 82, link: "https://www.accademiagalli.it/" },
    { nome: "Accademia di Belle Arti ACME", sigla: "ACME", citta: "Milano", regione: "Lombardia", studenti: 166, link: "https://www.acmemilano.it/" },
    { nome: "Accademia del Lusso", sigla: "ADL", citta: "Milano", regione: "Lombardia", studenti: 233, link: "https://www.accademiadellusso.com/" },
    { nome: "Accademia Teatro alla Scala", sigla: "Scala", citta: "Milano", regione: "Lombardia", studenti: 73, link: "https://www.accademialascala.it/" },
    { nome: "Civica Scuola di Musica Claudio Abbado", sigla: "Civica Musica", citta: "Milano", regione: "Lombardia", studenti: 554, link: "https://musica.fondazionemilano.eu/" },
    { nome: "Civica Scuola di Teatro Paolo Grassi", sigla: "Civica Teatro", citta: "Milano", regione: "Lombardia", studenti: 113, link: "https://teatro.fondazionemilano.eu/" },
    { nome: "Istituto Europeo di Design", sigla: "IED", citta: "Milano", regione: "Lombardia", studenti: 4923, link: "https://www.ied.it/milano" },
    { nome: "SAE Institute", sigla: "SAE", citta: "Milano", regione: "Lombardia", studenti: 323, link: "https://www.sae.edu/ita/" },
    { nome: "CPM Music Institute", sigla: "CPM", citta: "Milano", regione: "Lombardia", studenti: 278, link: "https://www.cpm.it/" },
    { nome: "Nuova Accademia di Belle Arti", sigla: "NABA", citta: "Milano", regione: "Lombardia", studenti: 6274, link: "https://www.naba.it/" },
    { nome: "Istituto Marangoni", sigla: "Marangoni", citta: "Milano", regione: "Lombardia", studenti: 1796, link: "https://www.istitutomarangoni.com/" },
    { nome: "Raffles Milano", sigla: "Raffles", citta: "Milano", regione: "Lombardia", studenti: 48, link: "https://www.rafflesmilano.it/" },
    { nome: "Istituto Secoli", sigla: "Secoli", citta: "Milano", regione: "Lombardia", studenti: 86, link: "https://www.istitutosecoli.it/" },

    // MARCHE
    { nome: "Istituto Poliarte", sigla: "Poliarte", citta: "Ancona", regione: "Marche", studenti: 192, link: "https://www.poliarte.it/" },

    // PIEMONTE
    { nome: "Accademia di Belle Arti di Cuneo", sigla: "ABA Cuneo", citta: "Cuneo", regione: "Piemonte", studenti: 1306, link: "https://accademiabellearticuneo.it/" },
    { nome: "Istituto d'Arte Applicata e Design", sigla: "IAAD", citta: "Torino", regione: "Piemonte", studenti: 579, link: "https://www.iaad.it/" },
    { nome: "Scuola del Teatro Musicale", sigla: "STM", citta: "Novara", regione: "Piemonte", studenti: 105, link: "https://www.scuolateatromusicale.it/" },

    // SICILIA
    { nome: "Accademia di Belle Arti Rosario Gagliardi", sigla: "MADE", citta: "Siracusa", regione: "Sicilia", studenti: 96, link: "https://www.madeprogram.it/" },
    { nome: "Accademia di Design e Comunicazione Visiva", sigla: "Abadir", citta: "Sant'Agata li Battiati (CT)", regione: "Sicilia", studenti: 78, link: "https://www.abadir.net/" },

    // TOSCANA
    { nome: "Istituto Modartech", sigla: "Modartech", citta: "Pontedera (PI)", regione: "Toscana", studenti: 369, link: "https://www.modartech.com/" },
    { nome: "Scuola di Musica di Fiesole", sigla: "SMF", citta: "Fiesole (FI)", regione: "Toscana", studenti: 179, link: "https://www.scuolamusicafiesole.it/" },
    { nome: "Accademia Nazionale del Jazz", sigla: "SienaJazz", citta: "Siena", regione: "Toscana", studenti: 137, link: "https://www.sienajazz.it/" },

    // TRENTINO-ALTO ADIGE
    { nome: "Trentino Art Academy", sigla: "TNAA", citta: "Trento", regione: "Trentino-Alto Adige", studenti: 90, link: "https://www.trentinoartacademy.it/" },

    // UMBRIA
    { nome: "Istituto Italiano Design", sigla: "IID", citta: "Perugia", regione: "Umbria", studenti: 45, link: "https://istitutoitalianodesign.com/" },

    // VENETO
    { nome: "Scuola Italiana Design", sigla: "SID", citta: "Padova", regione: "Veneto", studenti: 179, link: "https://www.scuolaitalianadesign.com/" },
];

const corpoTabella = document.getElementById("tabellauni");

function renderizzaTabella(lista) {
    corpoTabella.innerHTML = "";
    let n = 1;
    for (let uni of lista) {
        let link = uni.link ? uni.link : "#";
        let nolink = uni.link ? "" : "onclick='alert(\"Sito non trovato\"); return false;'";
        let riga = `<tr>
                <td>${n}</td>
                <td><a class="uni" href="${link}" ${nolink} target="_blank">${uni.nome}</a></td>
                <td>${uni.sigla}</td>
                <td>${uni.citta}</td>
                <td>${uni.regione}</td>
                <td>${uni.studenti}</td>
                </tr>`;
        corpoTabella.innerHTML += riga;
        n++;
    }
}


// ORDINE PER REGIONE

var ordineregione

function ordinaPerRegioneStatali() {
    if (ordineregione) {
        renderizzaTabella(unistatali.toReversed());
        ordineregione = false;
        ordinestudenti = false;
    }
    else {
        renderizzaTabella(unistatali);
        ordineregione = true;
        ordinestudenti = false;
    }
}

function ordinaPerRegioneSuperiori() {
    if (ordineregione) {
        renderizzaTabella(superiori.toReversed());
        ordineregione = false;
        ordinestudenti = false;
    }
    else {
        renderizzaTabella(superiori);
        ordineregione = true;
        ordinestudenti = false;
    }
}

function ordinaPerRegionePrivate() {
    if (ordineregione) {
        renderizzaTabella(uniprivate.toReversed());
        ordineregione = false;
        ordinestudenti = false;
    }
    else {
        renderizzaTabella(uniprivate);
        ordineregione = true;
        ordinestudenti = false;
    }
}

function ordinaPerRegioneConservatori() {
    if (ordineregione) {
        renderizzaTabella(conservatori.toReversed());
        ordineregione = false;
        ordinestudenti = false;
    }
    else {
        renderizzaTabella(conservatori);
        ordineregione = true;
        ordinestudenti = false;
    }
}

function ordinaPerRegioneAbastatali() {
    if (ordineregione) {
        renderizzaTabella(abastatali.toReversed());
        ordineregione = false;
        ordinestudenti = false;
    }
    else {
        renderizzaTabella(abastatali);
        ordineregione = true;
        ordinestudenti = false;
    }
}

function ordinaPerRegioneAfamPrivati() {
    if (ordineregione) {
        renderizzaTabella(afamprivati.toReversed());
        ordineregione = false;
        ordinestudenti = false;
    }
    else {
        renderizzaTabella(afamprivati);
        ordineregione = true;
        ordinestudenti = false;
    }
}

// ORDINE PER STUDENTI

var ordinestudenti

function ordinaPerStudentiStatali() {
    let copiauniversita = [...unistatali];
    if (ordinestudenti) {
        copiauniversita.sort((a, b) => a.studenti - b.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = false;
        ordineregione = false;
    }
    else {
        copiauniversita.sort((a, b) => b.studenti - a.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = true;
        ordineregione = false;
    }
}

function ordinaPerStudentiSuperiori() {
    let copiauniversita = [...superiori];
    if (ordinestudenti) {
        copiauniversita.sort((a, b) => a.studenti - b.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = false;
        ordineregione = false;
    }
    else {
        copiauniversita.sort((a, b) => b.studenti - a.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = true;
        ordineregione = false;
    }
}

function ordinaPerStudentiPrivate() {
    let copiauniversita = [...uniprivate];
    if (ordinestudenti) {
        copiauniversita.sort((a, b) => a.studenti - b.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = false;
        ordineregione = false;
    }
    else {
        copiauniversita.sort((a, b) => b.studenti - a.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = true;
        ordineregione = false;
    }
}

function ordinaPerStudentiConservatori() {
    let copiauniversita = [...conservatori];
    if (ordinestudenti) {
        copiauniversita.sort((a, b) => a.studenti - b.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = false;
        ordineregione = false;
    }
    else {
        copiauniversita.sort((a, b) => b.studenti - a.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = true;
        ordineregione = false;
    }
}

function ordinaPerStudentiAbastatali() {
    let copiauniversita = [...abastatali];
    if (ordinestudenti) {
        copiauniversita.sort((a, b) => a.studenti - b.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = false;
        ordineregione = false;
    }
    else {
        copiauniversita.sort((a, b) => b.studenti - a.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = true;
        ordineregione = false;
    }
}

function ordinaPerStudentiAfamPrivati() {
    let copiauniversita = [...afamprivati];
    if (ordinestudenti) {
        copiauniversita.sort((a, b) => a.studenti - b.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = false;
        ordineregione = false;
    }
    else {
        copiauniversita.sort((a, b) => b.studenti - a.studenti);
        renderizzaTabella(copiauniversita);
        ordinestudenti = true;
        ordineregione = false;
    }
}
