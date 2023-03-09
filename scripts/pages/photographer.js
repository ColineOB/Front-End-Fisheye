//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() {
    let photographers = []
    const r = await fetch('./data/photographers.json')
    if (r.ok === true) {
        return r.json()
    }
    throw new Error('Error', r.status)
}

async function displayData(photographers) {
    const photographersSection = document.querySelector("#main");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        console.log("photographerModel", photographerModel);
        const userCardDOM = photographerModel.getUserCardDOM();
        console.log("userCardDOM", userCardDOM);
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers()
    displayData(photographers);
};

init();