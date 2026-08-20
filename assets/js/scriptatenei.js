/**
 * atenei.js – Ricerca corsi e bottone "Vedi tutti i corsi"
 *
 * Tutte le offerte sono già nel DOM (per SEO).
 * Lo script nasconde i corsi oltre il limite iniziale
 * e gestisce ricerca e toggle expand/collapse.
 */

document.addEventListener("DOMContentLoaded", function () {

    const MAX_VISIBLE = 8;

    const searchInput = document.getElementById("cercaCorso");
    const btnTutti    = document.querySelector(".mostra-tutti");
    const categorie   = document.querySelectorAll(".categoria-corsi");
    const numeroCorsi = document.querySelector(".numero-corsi");

    let expanded    = false;
    let isSearching = false;


    /* ── Aggiorna la visibilità di ogni corso ────────────────────────── */

    function aggiorna() {
        const query  = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const parole = query.split(/\s+/).filter(Boolean);
        isSearching  = parole.length > 0;

        let totaleVisibili = 0;

        categorie.forEach(function (cat) {
            const corsi     = cat.querySelectorAll(".corso");
            const countSpan = cat.querySelector("h3 span");
            let matchInCat  = 0;

            corsi.forEach(function (corso) {
                const testo = corso.textContent.toLowerCase();
                const match = parole.length === 0 ||
                              parole.every(function (p) { return testo.includes(p); });

                if (!match) {
                    corso.style.display = "none";
                    return;
                }

                matchInCat++;

                // Se non si sta cercando e non è espanso, mostra solo i primi N
                if (!isSearching && !expanded && matchInCat > MAX_VISIBLE) {
                    corso.style.display = "none";
                } else {
                    corso.style.display = "";
                    totaleVisibili++;
                }
            });

            // Nascondi l'intera categoria se nessun corso corrisponde
            cat.style.display = (matchInCat === 0 && isSearching) ? "none" : "";

            // Aggiorna contatore nella categoria
            if (countSpan) {
                countSpan.textContent = matchInCat;
            }
        });

        // Aggiorna il contatore totale nella sezione header
        if (numeroCorsi && isSearching) {
            var corsoLabel = totaleVisibili === 1 ? "corso" : "corsi";
            numeroCorsi.textContent = totaleVisibili + " " + corsoLabel + " trovati";
        }

        // Mostra/nascondi il bottone durante la ricerca
        if (btnTutti) {
            btnTutti.style.display = isSearching ? "none" : "";
        }
    }


    /* ── Inizializzazione ────────────────────────────────────────────── */

    aggiorna();


    /* ── Barra di ricerca ────────────────────────────────────────────── */

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            aggiorna();
        });
    }


    /* ── Bottone "Vedi tutti i corsi" ────────────────────────────────── */

    if (btnTutti) {
        btnTutti.addEventListener("click", function (e) {
            e.preventDefault();
            expanded = !expanded;
            this.textContent = expanded
                ? "← Mostra meno"
                : "Vedi tutti i corsi →";
            aggiorna();
        });
    }

});
