function clickPicture(element) {
    const media_section = document.querySelector('.media_section');
    const images = media_section.querySelectorAll('img');
    const arrImages = Array.from(images);
    const main = document.querySelector('#main');
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "block";
    main.style.display = "none";
    const index = arrImages.findIndex(e => e.dataset.id == element.dataset.id );
    
    const close = document.createElement('i');
    const h2 = document.createElement('h2');
    const previous = document.createElement('i');
    const next = document.createElement('i');

    lightbox.append(element)
}

// function clickPicture(idPicture, data, name) {
//     const media_section = document.querySelector('#main');
//     const lightbox = document.getElementById("lightbox");
//     lightbox.style.display = "block";
//     media_section.style.display = "none";

//     const result = data.filter(e => e.id == idPicture);
//     const index = data.findIndex(e => e.id == idPicture);
//     console.log(result);

//     const { id, date, image, video, likes, price, title } = result[0];
//     const picture = `assets/photographers/${name}/${image}`
//     const movie = `assets/photographers/${name}/${video}`

    
//     const close = document.createElement('i');
//     const img = document.createElement('img');
//     const h2 = document.createElement('h2');
//     const previous = document.createElement('i');
//     const next = document.createElement('i');


//     setAttributes(img, {"src": picture, "alt": title + ' ' + date, "class": "picture", 'data-id': id})
//     console.log();
//     lightbox.append(img)
//     console.log(idPicture, result, index);
// }