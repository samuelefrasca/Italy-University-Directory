const corpoTabella = document.getElementById("tabellauni");
const corsiTrovati = document.getElementById("corsitrovati");
const searchInput = document.getElementById("searchNelleClassi");

// Barra di ricerca

let offerteAttuali = [];
let mappaUniversitaAttuale = {};

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const paroleCercate = this.value.toLowerCase().trim().split(/\s+/).filter(Boolean);

        const offerteFiltrate = offerteAttuali.filter(offerta => {
            const uniData = mappaUniversitaAttuale[offerta.universita] || {};

            const contenuto = [
                offerta.nomeCorso,
                offerta.sede,
                offerta.didattica,
                offerta.lingua,
                uniData.nome,
                uniData.regione,
                uniData.citta
            ].join(" ").toLowerCase().replace(/\s+/g, " ");

            return paroleCercate.every(parola => contenuto.includes(parola));
        });

        renderizzaTabella(offerteFiltrate, mappaUniversitaAttuale);
    });
}

// Creazione tabella

function renderizzaTabella(offerte, mappaUniversita) {
    corpoTabella.innerHTML = "";
    let n = 0;
    for (let offerta of offerte) {
        const uniData = mappaUniversita[offerta.universita] || {};
        const link = uniData.link ?? "#";
        const nolink = uniData.link ? "" : `onclick='alert("Sito non trovato"); return false;'`;
        const regione = uniData.regione || "----";
        const nomeUni = uniData.nome || offerta.universita;
        const accesso = offerta.accessoLibero ? "✅ Accesso Libero" : "🔒 Accesso Programmato";

        corpoTabella.innerHTML += `
        <tr class="riga-principale">
            <td><a class="uni" href="${link}" ${nolink} target="_blank">${nomeUni}</a></td>
            <td colspan="4"><strong>${offerta.nomeCorso}</strong></td>
        </tr>
        <tr class="riga-dettagli">
            <td colspan="2" class="dettaglio">📍 ${offerta.sede} — ${regione}</td>
            <td class="dettaglio">🎓 ${offerta.didattica}</td>
            <td class="dettaglio">🌐 ${offerta.lingua} &nbsp;|&nbsp; ${accesso}</td>
        </tr>`;
        n++;
    }
    corsiTrovati.textContent = `${n} corsi trovati`;
}

function caricaTabella(codiceCorso) {
    Promise.all([
        fetch(`../data/corsi/triennali.json`).then(r => r.json()),
        fetch(`../data/universita.json`).then(r => r.json())
    ])
        .then(([corsi, universita]) => {
            // Trova il corso richiesto per codice (es. "L-1")
            const corso = corsi[codiceCorso];
            if (!corso) {
                corpoTabella.innerHTML = `<tr><td colspan="8">Corso non trovato.</td></tr>`;
                return;
            }

            // Costruisce una mappa { "UniBo": { nome, link, regione, ... }, ... }
            // così la ricerca è O(1) invece di O(n) per ogni riga
            const mappaUniversita = {};
            for (let uni of universita) {
                mappaUniversita[uni.sigla] = uni;
            }
            offerteAttuali = [...corso.offerte];
            mappaUniversitaAttuale = mappaUniversita;
            renderizzaTabella(corso.offerte, mappaUniversita);
        })
        .catch(err => {
            console.error("Errore nel caricamento dei dati:", err);
        });
}

// ORDINE PER NOME DEL CORSO

var ordinecorso

function ordinaPerCorso(codiceCorso) {
    Promise.all([
        fetch(`../data/corsi/triennali.json`).then(r => r.json()),
        fetch(`../data/universita.json`).then(r => r.json())
    ])
        .then(([corsi, universita]) => {
            // Trova il corso richiesto per codice (es. "L-1")
            const corso = corsi[codiceCorso];
            if (!corso) {
                corpoTabella.innerHTML = `<tr><td colspan="8">Corso non trovato.</td></tr>`;
                return;
            }

            // Costruisce una mappa { "UniBo": { nome, link, regione, ... }, ... }
            // così la ricerca è O(1) invece di O(n) per ogni riga
            const mappaUniversita = {};
            for (let uni of universita) {
                mappaUniversita[uni.sigla] = uni;
            }
            if (ordinecorso) {
                renderizzaTabella(corso.offerte.reverse(), mappaUniversita);
                ordinecorso = false;
                ordinecitta = false;
                ordineregione = false;
            } else {
                renderizzaTabella(corso.offerte, mappaUniversita);
                ordinecorso = true;
                ordinecitta = false;
                ordineregione = false;
            }
        })
}

// ORDINE PER REGIONE

var ordineregione;

function ordinaPerRegione(codiceCorso) {
    Promise.all([
        fetch(`../data/corsi/triennali.json`).then(r => r.json()),
        fetch(`../data/universita.json`).then(r => r.json())
    ])
        .then(([corsi, universita]) => {
            const corso = corsi[codiceCorso];
            const mappaUniversita = {};

            for (let uni of universita) {
                mappaUniversita[uni.sigla] = uni;
            }

            const offerteOrdinate = [...corso.offerte].sort((a, b) => {
                const regioneA = mappaUniversita[a.universita]?.regione || "";
                const regioneB = mappaUniversita[b.universita]?.regione || "";
                return regioneA.localeCompare(regioneB, "it");
            });

            if (ordineregione) {
                renderizzaTabella(offerteOrdinate.reverse(), mappaUniversita);
                ordinecorso = false;
                ordinecitta = false;
                ordineregione = false;
            } else {
                renderizzaTabella(offerteOrdinate, mappaUniversita);
                ordinecorso = false;
                ordinecitta = false;
                ordineregione = true;
            }
        });
}

// ORDINE PER CITTÀ

var ordinecitta;

function ordinaPerSede(codiceCorso) {
    Promise.all([
        fetch(`../data/corsi/triennali.json`).then(r => r.json()),
        fetch(`../data/universita.json`).then(r => r.json())
    ])
        .then(([corsi, universita]) => {
            const corso = corsi[codiceCorso];
            const mappaUniversita = {};

            for (let uni of universita) {
                mappaUniversita[uni.sigla] = uni;
            }

            const offerteOrdinate = [...corso.offerte].sort((a, b) => {
                const cittaA = mappaUniversita[a.universita]?.citta || "";
                const cittaB = mappaUniversita[b.universita]?.citta || "";
                const cmpCitta = cittaA.localeCompare(cittaB, "it");
                if (cmpCitta !== 0) return cmpCitta;
                const nomeA = mappaUniversita[a.universita]?.nome || "";
                const nomeB = mappaUniversita[b.universita]?.nome || "";
                return nomeA.localeCompare(nomeB, "it");
            });

            if (ordinecitta) {
                renderizzaTabella(offerteOrdinate.reverse(), mappaUniversita);
                ordinecorso = false;
                ordinecitta = false;
                ordineregione = false;
            } else {
                renderizzaTabella(offerteOrdinate, mappaUniversita);
                ordinecorso = false;
                ordinecitta = true;
                ordineregione = false;
            }
        });
}

// FILTRI

function filtraLingua(codiceCorso, lingua) {
    Promise.all([
        fetch(`../data/corsi/triennali.json`).then(r => r.json()),
        fetch(`../data/universita.json`).then(r => r.json())
    ])
        .then(([corsi, universita]) => {
            const corso = corsi[codiceCorso];
            if (!corso) {
                corpoTabella.innerHTML = `<tr><td colspan="8">Corso non trovato.</td></tr>`;
                return;
            }

            const mappaUniversita = {};
            for (let uni of universita) {
                mappaUniversita[uni.sigla] = uni;
            }

            const offerteFiltrate = corso.offerte
                .filter(offerta => (offerta.lingua || "").toLowerCase().includes(lingua.toLowerCase()))
                .sort((a, b) =>
                    (mappaUniversita[a.universita]?.regione || "")
                        .localeCompare(mappaUniversita[b.universita]?.regione || "", "it")
                );

            renderizzaTabella(offerteFiltrate, mappaUniversita);
        })
}

function filtraAccesso(codiceCorso, flag) {
    Promise.all([
        fetch(`../data/corsi/triennali.json`).then(r => r.json()),
        fetch(`../data/universita.json`).then(r => r.json())
    ])
        .then(([corsi, universita]) => {
            const corso = corsi[codiceCorso];
            if (!corso) {
                corpoTabella.innerHTML = `<tr><td colspan="8">Corso non trovato.</td></tr>`;
                return;
            }

            const mappaUniversita = {};
            for (let uni of universita) {
                mappaUniversita[uni.sigla] = uni;
            }

            const offerteFiltrate = corso.offerte
                .filter(offerta => offerta.accessoLibero === flag)
                .sort((a, b) =>
                    (mappaUniversita[a.universita]?.regione || "")
                        .localeCompare(mappaUniversita[b.universita]?.regione || "", "it")
                );

            renderizzaTabella(offerteFiltrate, mappaUniversita);
        })
}

function filtraDidattica(codiceCorso, didattica) {
    Promise.all([
        fetch(`../data/corsi/triennali.json`).then(r => r.json()),
        fetch(`../data/universita.json`).then(r => r.json())
    ])
        .then(([corsi, universita]) => {
            const corso = corsi[codiceCorso];
            if (!corso) {
                corpoTabella.innerHTML = `<tr><td colspan="8">Corso non trovato.</td></tr>`;
                return;
            }

            const mappaUniversita = {};
            for (let uni of universita) {
                mappaUniversita[uni.sigla] = uni;
            }

            const offerteFiltrate = corso.offerte
                .filter(offerta => (offerta.didattica || "").toLowerCase().includes(didattica.toLowerCase()))
                .sort((a, b) =>
                    (mappaUniversita[a.universita]?.regione || "")
                        .localeCompare(mappaUniversita[b.universita]?.regione || "", "it")
                );

            renderizzaTabella(offerteFiltrate, mappaUniversita);
        })
}

// GESTISCI FILTRO

function gestisciFiltroLingua(valore, codiceCorso) {
    if (valore === "") {
        caricaTabella(codiceCorso);
    } else if (valore === "italiano") {
        filtraLingua(codiceCorso, "Italiano");
    } else if (valore === "inglese") {
        filtraLingua(codiceCorso, "Inglese");
    }
}

function gestisciFiltroAccesso(valore, codiceCorso) {
    if (valore === "") {
        caricaTabella(codiceCorso);
    } else if (valore === "libero") {
        filtraAccesso(codiceCorso, true);
    } else if (valore === "programmato") {
        filtraAccesso(codiceCorso, false);
    }
}

function gestisciFiltroDidattica(valore, codiceCorso) {
    if (valore === "") {
        caricaTabella(codiceCorso);
    } else if (valore === "presenza") {
        filtraDidattica(codiceCorso, "presenza");
    } else if (valore === "online") {
        filtraDidattica(codiceCorso, "online");
    } else if (valore === "misto") {
        filtraDidattica(codiceCorso, "presenza/online");
    }
}