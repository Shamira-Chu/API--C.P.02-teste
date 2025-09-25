
class DogImage {
    constructor(jsonData) {
        this.imageUrl = jsonData.message;
    }
}

function renderDogImage(dogPic) {
    const dogContainer = document.getElementById('dog-container');
    dogContainer.innerHTML = ''; 

    const imgElement = document.createElement('img');
    imgElement.src = dogPic.imageUrl; 
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

class DogImage {
    constructor(jsonData) {
        this.imageUrl = jsonData.message;
    }
}


function renderDogImage(dogPic) {
    const dogContainer = document.getElementById('dog-container');
    dogContainer.innerHTML = '';

    const imgElement = document.createElement('img');
    imgElement.src = dogPic.imageUrl;
    imgElement.alt = "Uma foto de um cachorro aleatório";
    imgElement.style.maxWidth = '500px';

    dogContainer.appendChild(imgElement);
}
async function getDogImage() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const dogPic = new DogImage(data);

        renderDogImage(dogPic);

    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

getDogImage();

function getDogImage() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    fetch(apiUrl)
        .then(response => {
        
            return response.json();
        })
        .then(data => {
            
            const dogPic = new DogImage(data);
            renderDogImage(dogPic);
        })
        .catch(error => {
            
            console.error('Ocorreu um erro ao buscar a imagem:', error);
        });
}



const newImageButton = document.getElementById('image-btn');


newImageButton.addEventListener('click', getDogImage);


getDogImage();
