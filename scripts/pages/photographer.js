//media display
function mediaFactory(data, name, totalLikes) {
    const { id, date, image, video, likes, price, title } = data;
    const picture = `assets/photographers/${name}/${image}`
    const movie = `assets/photographers/${name}/${video}`
    function getMediaCardDom() {
        const article = document.createElement( 'article' );
        const aPicture = document.createElement('a');
        const aLikes = document.createElement('a');
        const img = document.createElement( 'img' );
        const video = document.createElement('video');
        const h2 = document.createElement( 'h2' );
        const p = document.createElement('p');
        const heart = document.createElement ('i');
        const divDescriptionImg = document.createElement('div');

        
        setAttributes(divDescriptionImg, {"class": "descriptionImg"})
        setAttributes(heart, {'class': "fa-solid fa-heart",})
        setAttributes(aPicture ,{"href": "#", "onclick": `clickPicture(${id})`, 'aria-label': title + ' ' + date});
        setAttributes(aLikes ,{"href": "#", 'onclick': 'like(this)', 'aria-label': 'like'});

        h2.textContent = title;
        p.textContent = likes;
        aLikes.append(heart)
        p.append(aLikes )
        divDescriptionImg.append(h2,p);

        if(image) {
            setAttributes(img, {"src": picture, "alt": title + ' ' + date, "class": "picture", 'data-id': id, 'data-title': title,})
            aPicture.append(img)
        } else {
            setAttributes(video, {"src": movie, "alt": title + ' ' + date, "class": "picture", "controls": "controls", 'data-id': id, 'data-title': title,  })
            aPicture.append(video)
        }
        article.append(aPicture, divDescriptionImg);
        document.querySelector('.totalLikes').innerHTML = totalLikes;
        return article;
    }
    return {getMediaCardDom}
}

//if like
function like(elem) {
    const totalLikes = document.querySelector('.totalLikes');
    let like = elem.parentNode;
    like.innerHTML = parseInt(like.innerHTML) + 1;
    totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1;
    like.append(elem)
}