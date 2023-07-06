function photographerFactory(data, optionSelect) {
    const { name, portrait, city, country, tagline, price, likes, id } = data;

    const picture = `assets/photographers/ID_Photos/${portrait}`;

    //function index page
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h1 = document.createElement('h1');
        const h2 = document.createElement( 'h2' );
        const a = document.createElement('a');
        const p = document.createElement( 'p' );
        const trierPar = document.createElement('p');
        const divSort = document.createElement('div');
        const div = document.createElement('div');
        const divPrice = document.createElement('div');
        const spanLikes = document.createElement('span');
        const heart = document.createElement ('i');
        const arrowUp = document.createElement ('i');
        const arrowDown = document.createElement ('i');
        const button = document.createElement('button');
        const buttonSort = document.createElement('div');
        const textfilter = document.createElement('p');
        const textPhotographer1 = {"address": city + ', ' + country, "tagline": tagline};
        const textPhotographer2 = {"price": price + '€/jour'};
        const textIndex = {...textPhotographer1,...textPhotographer2};
        const options = {"option1": "Popularité", "option2": "Date", "option3": "Titre"};

        setAttributes(img, {"src": picture, "alt": "photo de profil de "+ name});
        setAttributes(a ,{"href": "./photographer.html?id="+ id, "aria-label": name, "alt": name});
        setAttributes(divPrice,{"class": "divprice"});
        setAttributes(spanLikes,{"class": "totalLikes"});
        setAttributes(trierPar,{"class": "trierPar"});
        setAttributes(heart, {'class': "fa-solid fa-heart", 'alt': 'like'});
        setAttributes(arrowUp, {'class': "closeIcon fa-solid fa-chevron-up", "style": "display: none"});
        setAttributes(arrowDown, {'class': "menuIcon fa-solid fa-chevron-down"});
        setAttributes(button, {'class': 'contact_button', 'onclick': 'displayModal()'});
        setAttributes(buttonSort, {'class': 'hamburger_button', 'onclick': "toggleMenu()"})
        divSort.setAttribute('class','sort')
        
        h1.textContent = name;
        h2.textContent = name;
        button.textContent = 'Contactez-moi';
        
        if (optionSelect !== undefined) {
            textfilter.textContent = optionSelect;
        } else {
            textfilter.textContent = options.option1;

        }
        buttonSort.append(textfilter, arrowDown, arrowUp);
        trierPar.textContent = "Trier par";
        p.append(heart);
        divPrice.append(spanLikes, p, createParagraph(textPhotographer2))
        
        const idPhotographer = document.URL.split("?id=")[1]
        //create select
        const select = createFilter(options);
        if (idPhotographer == undefined) {
            // index.html
            a.append(img, h2)
            article.append(a,createParagraph(textIndex))
        } else {
            // photographer.html
            div.append(h1,createParagraph(textPhotographer1))
            divSort.append(trierPar, buttonSort, select)
            article.append(div, button, img, divSort, divPrice)
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
    const ul = document.createElement('ul');
    setAttributes(ul, {'aria-label':'trier par', 'class': 'filter', "style": "display: none"})
    for (const property in obj) {
        const li = document.createElement('li');
        setAttributes(li, {"value": property, 'class': 'item'});
        li.textContent = obj[property]
        ul.appendChild(li)
    }
    return ul
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


