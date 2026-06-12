const footer = document.getElementById("site-footer");

if (footer) {
    const base = footer.dataset.base || ".";

    footer.innerHTML += `
        <p>Fonte dati:
            <a class="a_footer" href="https://www.mur.gov.it/it/aree-tematiche/universita/le-universita" target="_blank">MUR</a>
            &middot;
            <a class="a_footer" href="https://ustat.mur.gov.it/" target="_blank">USTAT</a>
        </p>
        <p>&copy; 2026 -
            <a class="a_footer" href="https://samuelefrasca.github.io/" target="_blank">Samuele Frasca</a>
        </p>
        <p>
            <a class="a_footer github" href="https://github.com/samuelefrasca" target="_blank">
                <img class="github-logo" src="${base}/assets/img/GitHub_Invertocat_White.png" alt="github-logo">GitHub
            </a>
        </p>
    `;
}