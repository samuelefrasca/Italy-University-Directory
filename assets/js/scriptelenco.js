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
                <td class="num">${n}</td>
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

function caricaTabella(uni) {
    fetch(`../data/universita.json`)
        .then(res => res.json())
        .then(data => {
            const dataFiltered = data.filter(x => x.categoria == uni)
            renderizzaTabella(dataFiltered);
        })
}

// ORDINE PER REGIONE

var ordineregione

function ordinaPerRegione(uni) {
    fetch(`../data/universita.json`)
        .then(res => res.json())
        .then(data => {
            const dataFiltered = data.filter(x => x.categoria == uni)
            if (ordineregione) {
                renderizzaTabella(dataFiltered.toReversed());
                ordinecitta = false;
                ordineregione = false;
                ordinestudenti = false;
            }
            else {
                renderizzaTabella(dataFiltered);
                ordinecitta = false;
                ordineregione = true;
                ordinestudenti = false;
            }
        })
}

// ORDINE PER CITTÀ

var ordinecitta

function ordinaPerCitta(uni) {
    fetch(`../data/universita.json`)
        .then(res => res.json())
        .then(data => {
            const dataFiltered = data.filter(x => x.categoria == uni)
            const copiauniversita = [...dataFiltered];
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
    fetch(`../data/universita.json`)
        .then(res => res.json())
        .then(data => {
            const dataFiltered = data.filter(x => x.categoria == uni)
            const copiauniversita = [...dataFiltered];
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
