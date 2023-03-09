
    async function getPhotographers() {
        let photographers = []
        const r = await fetch('./data/photographers.json')
        if (r.ok === true) {
            return r.json()
        }
        throw new Error('Error', r.status)
    }

    async function displayData(photographers, photographersSection) {
        // const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            console.log("photographer", photographer);
            const photographerModel = photographerFactory(photographer);
            console.log("photographerModel", photographerModel);
            const userCardDOM = photographerModel.getUserCardDOM();
            console.log("userCardDOM", userCardDOM);
            photographersSection.appendChild(userCardDOM);
        });
    };

    // async function displayPhotographers(photographer) {
    //     const photographersSection = document.querySelector(".photographer_section");
    //     console.log("photographer", photographer);
    //         const photographerModel = photographerFactory(photographer);
    //         console.log("photographerModel", photographerModel);
    //         const userCardDOM = photographerModel.getUserCardDOM();
    //         console.log("userCardDOM", userCardDOM);
    //         photographersSection.appendChild(userCardDOM);
    // };

    async function init() {
        // Récupère les datas des photographes
        const { photographers, media } = await getPhotographers()
        let querySelector = "";
        const idPhotographer = document.URL.split("?id=")[1]
        if (idPhotographer == undefined) {
            querySelector = document.querySelector(".photographer_section");
            displayData(photographers, querySelector);
        } else {
            let filterphotographer = photographers.filter((item)=>item.id == idPhotographer)
            let filterMedia = media.filter((item)=>item.photographerId == idPhotographer)
            querySelector = document.querySelector(".photographer_section");
            displayData(filterphotographer, querySelector);
        }
    };
    
    init();
    
