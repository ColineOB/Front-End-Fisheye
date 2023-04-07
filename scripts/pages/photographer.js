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
        setAttributes(aPicture ,{"href": `javascript:document.getElementById("${title}").focus()`, "onclick": `clickPicture(${id})`});
        setAttributes(aLikes ,{"href": "javascript:void(0)", 'onclick': 'like(this)', 'aria-label': 'likes'});

        h2.textContent = title;
        p.textContent = likes;
        aLikes.append(heart)
        p.append(aLikes )
        divDescriptionImg.append(h2,p);

        if(image) {
            setAttributes(img, {"src": picture, "id": title, "alt": title + ' ' + date, "class": "picture", 'data-id': id, 'data-title': title,})
            aPicture.append(img)
        } else {
            setAttributes(video, {"src": movie, "id": title, "alt": title + ' ' + date, "class": "picture", "controls": "controls", 'data-id': id, 'data-title': title,  })
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
    let heart = elem;
    const totalLikes = document.querySelector('.totalLikes');
    let like = elem.parentNode;
    like.innerHTML = parseInt(like.innerHTML) + 1;
    like.setAttribute("class", 'likeHeart')
    totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1;
    heart.removeAttribute("onclick");
    like.append(heart)
}