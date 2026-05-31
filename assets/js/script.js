const corpoTabella = document.getElementById("tabellauni");

function renderizzaTabella(lista) {
    corpoTabella.innerHTML = "";
    let n = 1;
    for (let uni of lista) {
        let link = uni.link ? uni.link : "#";
        let nolink = uni.link ? "" : "onclick='alert(\"Sito non trovato\"); return false;'";
        if (!uni.studenti) { uni.studenti = "----" }
        if (!uni.sigla) { uni.sigla = "----" }
        let riga = `<tr>
                <td>${n}</td>
                <td><a class="uni" href="${link}" ${nolink} target="_blank">${uni.nome}</a></td>
                <td>${uni.sigla}</td>
                <td>${uni.citta}</td>
                <td>${uni.regione}</td>
                <td class="studenti">${uni.studenti.toLocaleString('it-IT', { useGrouping: 'always' })}</td>
                </tr>`;
        corpoTabella.innerHTML += riga;
        n++;
    }
}

function caricaTabella(lista) {
    fetch(`data/${lista}.json`)
        .then(res => res.json())
        .then(data => {
            renderizzaTabella(data);
        })
}

// ORDINE PER REGIONE

var ordineregione

function ordinaPerRegione(uni) {
    fetch(`data/${uni}.json`)
        .then(res => res.json())
        .then(data => {
            if (ordineregione) {
                renderizzaTabella(data.toReversed());
                ordinecitta = false;
                ordineregione = false;
                ordinestudenti = false;
            }
            else {
                renderizzaTabella(data);
                ordinecitta = false;
                ordineregione = true;
                ordinestudenti = false;
            }
        })
}

// ORDINE PER CITTÀ

var ordinecitta

function ordinaPerCitta(uni) {
    fetch(`data/${uni}.json`)
        .then(res => res.json())
        .then(data => {
            let copiauniversita = [...data];
            if (ordinecitta) {
                copiauniversita.sort((a, b) => b.citta.localeCompare(a.citta));
                renderizzaTabella(copiauniversita);
                ordinecitta = false;
                ordinestudenti = false;
                ordineregione = false;
            }
            else {
                copiauniversita.sort((a, b) => a.citta.localeCompare(b.citta));
                renderizzaTabella(copiauniversita);
                ordinecitta = true;
                ordinestudenti = false;
                ordineregione = false;
            }
        })
}

// ORDINE PER STUDENTI

var ordinestudenti

function ordinaPerStudenti(uni) {
    fetch(`data/${uni}.json`)
        .then(res => res.json())
        .then(data => {
            let copiauniversita = [...data];
            if (ordinestudenti) {
                copiauniversita.sort((a, b) => a.studenti - b.studenti);
                renderizzaTabella(copiauniversita);
                ordinecitta = false;
                ordinestudenti = false;
                ordineregione = false;
            }
            else {
                copiauniversita.sort((a, b) => b.studenti - a.studenti);
                renderizzaTabella(copiauniversita);
                ordinecitta = false;
                ordinestudenti = true;
                ordineregione = false;
            }
        })
}
