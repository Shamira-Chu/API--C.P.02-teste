
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
