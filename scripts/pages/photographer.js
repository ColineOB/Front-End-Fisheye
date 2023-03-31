//media display
function mediaFactory(data, name, totalLikes) {
    const { id, date, image, video, likes, price, title } = data;
    const picture = `assets/photographers/${name}/${image}`
    const movie = `assets/photographers/${name}/${video}`
    function getMediaCardDom() {
        const article = document.createElement( 'article' );
        const a = document.createElement('a');
        const img = document.createElement( 'img' );
        const video = document.createElement('video');
        const h2 = document.createElement( 'h2' );
        const p = document.createElement('p');
        const heart = document.createElement ('i');
        const divDescriptionImg = document.createElement('div');

        
        setAttributes(divDescriptionImg, {"class": "descriptionImg"})
        setAttributes(heart, {'class': "fa-solid fa-heart"})

        h2.textContent = title;
        p.textContent = likes;
        p.append(heart)
        divDescriptionImg.append(h2,p);

        if(image) {
            setAttributes(img, {"src": picture, "alt": title + ' ' + date, "class": "picture", 'data-id': id, "onclick": `clickPicture(${id})`})
            article.append(img, divDescriptionImg);
        } else {
            setAttributes(video, {"src": movie, "alt": title + ' ' + date, "class": "picture", "controls": "controls", 'data-id': id, "onclick": `clickPicture(${id})` })
            article.append(video, divDescriptionImg);
        }
        document.querySelector('.totalLikes').innerHTML = totalLikes;
        return article;
    }

    return {getMediaCardDom}
}