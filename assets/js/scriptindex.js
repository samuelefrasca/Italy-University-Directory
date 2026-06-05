const searchInput = document.getElementById("searchClassi");
const elementiLista = document.querySelectorAll("#listaClassi li");

searchInput.addEventListener("input", function () {
    const paroleCercate = this.value.toLowerCase().trim().split(/\s+/);
    elementiLista.forEach(function (item) {
        const contenuto = item.textContent.toLowerCase().replace(/\s+/g, ' ');
        const corrisponde = paroleCercate.every(parola => contenuto.includes(parola));
        if (corrisponde) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});