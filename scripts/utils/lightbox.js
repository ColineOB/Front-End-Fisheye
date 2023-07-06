const main = document.querySelector('#main');
const lightbox = document.getElementById("lightbox");

function closelightbox() {
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.style.display = "none";
    main.style.display = "block";
}

function clickPicture(element) {
    const media_section = document.querySelector('.media_section');
    const images = media_section.querySelectorAll('.picture');
    const title = media_section.querySelectorAll('h2');
    const arrImages = Array.from(images);
    lightbox.style.display = "flex";
    main.style.display = "none";
    let index = arrImages.findIndex(e => e.dataset.id == element );
    const img = arrImages[index].cloneNode(true);
    const close = document.createElement('i');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const divRight = document.createElement('div');
    const divImg = document.createElement('div');
    const previous = document.createElement('i');
    const next = document.createElement('i');
    
    setAttributes(previous, {'class': "fa-solid fa-chevron-left", 'aria-label':'Previous image'});
    setAttributes(next, {'class': "fa-solid fa-chevron-right", 'aria-label':'Next image'});
    setAttributes(div, {'class': "carrousel"});
    setAttributes(divRight, {'class': "divRight"});
    setAttributes(close, {'class': "fa-solid fa-xmark", 'onclick':'closelightbox()', 'id':'close', 'aria-label':'Close Dialog'})
    img.removeAttribute("onclick");
    
    h2.textContent = img.dataset.title;

    divRight.append(close, next)
    div.append(img, h2)
    lightbox.append(previous, div, divRight);
    
    next.onclick = function() {
       carroussel('+', arrImages, index)
    }

    previous.onclick = function() {
        carroussel('-', arrImages, index)
     }

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                carroussel('-', arrImages, index)
                break;
            case 39:
                carroussel('+', arrImages, index)
                break;
            case 27:
                closelightbox()
        }
    }
}

function carroussel(symbole, array) {
    let carroussel = document.querySelector('.carrousel > img, .carrousel > video')
    let title = document.querySelector('.carrousel > h2')
    let index = array.findIndex(e => e.dataset.id == carroussel.dataset.id );
    let newIndex = "";
    if (symbole == "+") {
        newIndex = index +1;
        if (newIndex > array.length -1) {
            newIndex = 0;
        }
    } else {
        newIndex = index -1;
        if (newIndex < 0) {
            newIndex = array.length -1;
        } 
    }
    let newImg = array[newIndex].cloneNode(true);
    newImg.removeAttribute("onclick");
    title.innerHTML = newImg.dataset.title;
    carroussel.replaceWith(newImg)
}