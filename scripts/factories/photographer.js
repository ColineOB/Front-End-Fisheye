function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/ID_Photos/${portrait}`;

    //function index page
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const a = document.createElement('a');
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        const button = document.querySelector('.contact_button')
        const text = {"address": city + ', ' + country, "tagline": tagline, "price": price + '€/jour'}

        setAttributes(img, {"src": picture, "alt": "photo de profil de "+ name})
        setAttributes(a ,{"href": "./photographer.html?id="+ id, "aria-label": name, "alt": name})
        h2.textContent = name;

        //loop for text paragraph
        for (const property in text) {
            const span = document.createElement('span');
            setAttributes(span, {"class": property});
            span.textContent = text[property]
            p.appendChild(span)
        }
        
        const idPhotographer = document.URL.split("?id=")[1]
        
        if (idPhotographer == undefined) {
            a.append(img, h2)
            article.append(a,p)
        } else {
            div.append(h2,p)
            article.append(div,button,img)
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

//function 
function mediaFactory(data, name) {
    const { id, date, image, likes, price, title } = data;
    const picture = `assets/photographers/${name}/${image}`
    const ext = image.lastIndexOf('.');
    console.log(image.split(ext)[1]);
    console.log(data);
    function getMediaCardDom() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const video = document.createElement('video');

        setAttributes(img, {"src": picture, "alt": title + ' ' + date})

        article.append(img);
        return article;
    }

    return {getMediaCardDom}
}