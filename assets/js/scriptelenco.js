const corpoTabella = document.getElementById("tabellauni");
const uniTrovate = document.getElementById("unitrovate");
const searchInput = document.getElementById("searchNegliAtenei");

// Barra di ricerca

let uniAttuale = [];

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const paroleCercate = this.value.toLowerCase().trim().split(/\s+/).filter(Boolean);

        const filtrate = uniAttuale.filter(uni => {
            const contenuto = [
                uni.nome,
                uni.sigla,
                uni.citta,
                uni.regione
            ].join(" ").toLowerCase();

            return paroleCercate.every(parola => contenuto.includes(parola));
        });

        renderizzaTabella(filtrate);
    });
}

// Creazione tabella

function renderizzaTabella(lista) {
    corpoTabella.innerHTML = "";
    let n = 1;
    for (let uni of lista) {
        let link = uni.link ? uni.link : "#";
        let nolink = uni.link ? "" : "onclick='alert(\"Sito non trovato\"); return false;'";
        if (!uni.studenti) { uni.studenti = "----" }
        if (!uni.sigla) { uni.sigla = "----" }
        let studenti_display = typeof uni.studenti === "number"
            ? uni.studenti.toLocaleString("it-IT", { useGrouping: "always" })
            : uni.studenti;
        let riga = `<tr data-uni="${JSON.stringify(uni).replace(/"/g, '&quot;"')}">
                <td class="num">${n}</td>
                <td><a class="uni" href="${link}" ${nolink} target="_blank">${uni.nome}</a></td>
                <td>${uni.sigla}</td>
                <td>${uni.citta}</td>
                <td>${uni.regione}</td>
                <td class="studenti">${studenti_display}</td>
                </tr>`;
        corpoTabella.innerHTML += riga;
        n++;
    }
    uniTrovate.textContent = `${n - 1} atenei trovati`;
}

// Carica dal DOM statico (pre-generato da Python)

function caricaTabella(categoria) {
    const righe = corpoTabella.querySelectorAll("tr[data-uni]");
    uniAttuale = Array.from(righe).map(riga => JSON.parse(riga.dataset.uni));
    uniTrovate.textContent = `${uniAttuale.length} atenei trovati`;
    ordineregione = true;
}

// ORDINE PER REGIONE

var ordineregione

function ordinaPerRegione(categoria) {
    const copia = [...uniAttuale];
    copia.sort((a, b) => a.regione.localeCompare(b.regione, "it"));
    if (ordineregione) {
        renderizzaTabella(copia.reverse());
        ordineregione = false;
    } else {
        renderizzaTabella(copia);
        ordineregione = true;
    }
    ordinecitta = false;
    ordinestudenti = false;
}

// ORDINE PER CITTÀ

var ordinecitta

function ordinaPerCitta(categoria) {
    const copia = [...uniAttuale];
    copia.sort((a, b) => a.citta.localeCompare(b.citta, "it"));
    if (ordinecitta) {
        renderizzaTabella(copia.reverse());
        ordinecitta = false;
    } else {
        renderizzaTabella(copia);
        ordinecitta = true;
    }
    ordinestudenti = false;
    ordineregione = false;
}

// ORDINE PER STUDENTI

var ordinestudenti

function ordinaPerStudenti(categoria) {
    const copia = [...uniAttuale];
    if (ordinestudenti) {
        copia.sort((a, b) => a.studenti - b.studenti);
        renderizzaTabella(copia);
        ordinestudenti = false;
    } else {
        copia.sort((a, b) => b.studenti - a.studenti);
        renderizzaTabella(copia);
        ordinestudenti = true;
    }
    ordinecitta = false;
    ordineregione = false;
}
