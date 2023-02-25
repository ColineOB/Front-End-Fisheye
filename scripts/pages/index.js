
    async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        let photographers = []
        await fetch('./data/photographers.json')
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        photographers = data.photographers
                        console.log(photographers);
                    })
                } else {
                    console.log("ERROR", res.status);
                }
            })
            console.log(photographers);
        // let photographers = [
        //     {
        //         "name": "Ma data test",
        //         "id": 1,
        //         "city": "Paris",
        //         "country": "France",
        //         "tagline": "Ceci est ma data test",
        //         "price": 400,
        //         "portrait": "account.png"
        //     },
        //     {
        //         "name": "Autre data test",
        //         "id": 2,
        //         "city": "Londres",
        //         "country": "UK",
        //         "tagline": "Ceci est ma data test 2",
        //         "price": 500,
        //         "portrait": "account.png"
        //     },
        // ]
        // console.log(photographers);
        // et bien retourner le tableau photographers seulement une fois récupéré
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

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
        console.log(await getPhotographers());
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
