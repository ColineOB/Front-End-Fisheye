
    async function getPhotographers() {
        let photographers = []
        const r = await fetch('./data/photographers.json')
        if (r.ok === true) {
            return r.json()
        }
        throw new Error('Error', r.status)
    }

    async function displayData(photographers, photographersSection) {

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function displayMedia(medias, name) {
        const querySelector = document.querySelector(".media_section");
        medias.forEach((media) => {
            const mediaModel = mediaFactory(media, name);
            const mediaCardDom = mediaModel.getMediaCardDom();
            querySelector.appendChild(mediaCardDom);
        })
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers, media } = await getPhotographers()
        let querySelector = "";
        const idPhotographer = document.URL.split("?id=")[1]
        if (idPhotographer == undefined) {
            querySelector = document.querySelector(".photographers_section");
            displayData(photographers, querySelector);
        } else {
            let filterphotographer = photographers.filter((item)=>item.id == idPhotographer)
            let filterMedia = media.filter((item)=>item.photographerId == idPhotographer)
            querySelector = document.querySelector(".photograph-header");
            displayData(filterphotographer, querySelector);
            displayMedia(filterMedia, filterphotographer[0].name.split(/-|\s/)[0])
        }
    };
    
    init();
    
