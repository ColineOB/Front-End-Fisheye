function photographerFactory(data) {
    console.log(document.URL);
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const a = document.createElement('a');
        const p = document.createElement( 'p' );
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

        a.append(img, h2)
        article.append(a,p)

        return (article);
    }

    if (document.URL.includes('?')) {

    } else {
        return { name, picture, getUserCardDOM }
    }
}

// loop for setAttribute
function setAttributes(element, attrs) {
    for(var key in attrs) {
        element.setAttribute(key, attrs[key])
    }
}