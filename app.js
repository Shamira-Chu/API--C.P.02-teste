class CatFact {
    constructor(textoDoFato) {
        this.fact = textoDoFato;
    }
}

async function getCatFact() {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    const fatoDeGato = new CatFact(data.fact);
    return fatoDeGato;
}

function displayCatFact(objetoFatoDeGato) {
    const factElement = document.getElementById('cat-fact');
    factElement.textContent = objetoFatoDeGato.fact;
}

async function fetchAndDisplayFact() {
    const factElement = document.getElementById('cat-fact');
    factElement.textContent = 'Buscando um novo fato...';
    const fato = await getCatFact();
    displayCatFact(fato);
}

const newFactButton = document.getElementById('new-fact-btn');
newFactButton.addEventListener('click', fetchAndDisplayFact);
fetchAndDisplayFact();

