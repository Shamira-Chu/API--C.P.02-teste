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