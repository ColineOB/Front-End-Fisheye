
    async function getPhotographers() {
        let photographers = []
        const r = await fetch('./data/photographers.json')
        if (r.ok === true) {
            return r.json()
        }
        throw new Error('Error', r.status)
    }

    async function displayData(photographers, photographersSection, select) {

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer, select);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function displayMedia(medias, name) {
        const querySelector = document.querySelector(".media_section");
        let nblikes = 0;
        medias.forEach((media) => {
            nblikes = nblikes + media.likes;
            const mediaModel = mediaFactory(media, name, nblikes);
            const mediaCardDom = mediaModel.getMediaCardDom();
            querySelector.appendChild(mediaCardDom);
        })
    }

    async function init(array, select) {
        // Récupère les datas des photographes
        const { photographers, media } = await getPhotographers()
        let querySelector = "";
        let idPhotographer = "";
        if(document.URL.slice(-1) == "#") {
            idPhotographer = document.URL.split("?id=")[1].slice(0, -1)
        } else {
            idPhotographer = document.URL.split("?id=")[1]
        }
        if (idPhotographer == undefined) {
            //create index
            querySelector = document.querySelector(".photographers_section");
            displayData(photographers, querySelector, '');
        } else {
            //create photographer
            let filterphotographer = photographers.filter((item)=>item.id == idPhotographer)
            let filterMedia = media.filter((item)=>item.photographerId == idPhotographer)
            let sortPopularMedia = filterMedia.sort((a,b) => ( a.likes < b.likes) ? 1 : -1)
            querySelector = document.querySelector(".photograph-header");
            let media_section = document.querySelector(".media_section");
            querySelector.innerHTML = "";
            media_section.innerHTML = "";
            displayData(filterphotographer, querySelector, select);
            if (array == undefined) {
                array = sortPopularMedia;
            } 
            displayMedia(array, filterphotographer[0].name.split(/-|\s/)[0])
            sortMedia(filterMedia);
            displayForm(filterphotographer[0].name)
        }
    };
    
    init();
    
