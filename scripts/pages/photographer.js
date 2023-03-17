//function 
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
        const divDescriptionImg = document.createElement('div');

        
        h2.textContent = title;
        p.textContent = likes;
        divDescriptionImg.append(h2,p);
        setAttributes(divDescriptionImg, {"class": "descriptionImg"})

        if(image) {
            setAttributes(img, {"src": picture, "alt": title + ' ' + date})
            a.append(img);
        } else {
            setAttributes(video, {"src": movie})
            a.append(video);
        }
        document.querySelector('.totalLikes').innerHTML = totalLikes;
        article.append(a, divDescriptionImg);
        return article;
    }

    return {getMediaCardDom}
}