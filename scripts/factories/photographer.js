function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, likes, id } = data;

    const picture = `assets/photographers/ID_Photos/${portrait}`;

    //function index page
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const a = document.createElement('a');
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        const divPrice = document.createElement('div');
        const spanLikes = document.createElement('span');
        const heart = document.createElement ('i');
        const button = document.querySelector('.contact_button')
        const textPhotographer1 = {"address": city + ', ' + country, "tagline": tagline}
        const textPhotographer2 = {"price": price + '€/jour'}
        const textIndex = {...textPhotographer1,...textPhotographer2}
        const options = {"option1": "Popularité", "option2": "Date", "option3": "titre"}

        setAttributes(img, {"src": picture, "alt": "photo de profil de "+ name})
        setAttributes(a ,{"href": "./photographer.html?id="+ id, "aria-label": name, "alt": name})
        setAttributes(divPrice,{"class": "divprice"})
        setAttributes(spanLikes,{"class": "totalLikes"})
        setAttributes(heart, {'class': "fa-solid fa-heart"})

        h2.textContent = name;
        p.append(heart);
        divPrice.append(spanLikes, p, createParagraph(textPhotographer2))
        
        const idPhotographer = document.URL.split("?id=")[1]
        
        if (idPhotographer == undefined) {
            a.append(img, h2)
            article.append(a,createParagraph(textIndex))
        } else {
            div.append(h2,createParagraph(textPhotographer1))
            article.append(div,button,img, createFilter(options), divPrice)
        }
        return (article);
    }


    return { name, picture, getUserCardDOM }
}

// loop for multiple setAttribute
function setAttributes(element, attrs) {
    for(var key in attrs) {
        element.setAttribute(key, attrs[key])
    }
}

//loop for text paragraph
function createFilter(obj){
    const select = document.createElement('select');
    for (const property in obj) {
        const option = document.createElement('option');
        setAttributes(option, {"value": property});
        option.textContent = obj[property]
        select.appendChild(option)
    }
    return select
}

//loop for select
function createParagraph(obj){
    const p = document.createElement( 'p' );
    for (const property in obj) {
        const span = document.createElement('span');
        setAttributes(span, {"class": property});
        span.textContent = obj[property]
        p.appendChild(span)
    }
    return p
}

function sortMedia(medias) {
    select = document.querySelector('select')
    console.log(medias, medias.sort());
    let newArray = [];
    select.addEventListener("change", () => {
        switch (select.value) {
            case 'option1':
                    newArray = sortBy('likes')
                break
            case 'option2':
                    newArray = sortBy('dates')
                break
            case 'option3':
                    newArray = sortBy('title')
                break
        }
        console.log(newArray);
        return newArray;
    })
    function sortBy(property) {
        return medias.sort((a,b) => {
            return a[property] >= b[property]
            ? 1
            : -1
        })
    }
}


