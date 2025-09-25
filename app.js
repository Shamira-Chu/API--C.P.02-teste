// app.js

class CatFact {
    // O construtor recebe o texto do fato
    constructor(textoDoFato) {
        // E armazena esse texto dentro da propriedade 'fact'
        this.fact = textoDoFato;
    }
}

// app.js (continuação)

async function getCatFact() {
    // 1. "Pescamos" os dados da URL. O `await` espera a pescaria terminar.
    const response = await fetch('https://catfact.ninja/fact');

    // 2. Pegamos o resultado da pesca e o transformamos em um objeto JavaScript que podemos usar.
    const data = await response.json();

    // 3. Usamos nosso molde (a classe CatFact) para criar um objeto organizado,
    //    passando para ele apenas a informação que nos interessa: data.fact
    const fatoDeGato = new CatFact(data.fact);

    // 4. Devolvemos o objeto prontinho.
    return fatoDeGato;
}
