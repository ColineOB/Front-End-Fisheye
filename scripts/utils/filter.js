
function toggleMenu() {
  const filter = document.querySelector(".filter");
  const menuItems = document.querySelectorAll(".item");
  const hamburger= document.querySelector(".hamburger_button");
  const title= hamburger.querySelector("p")
  const menuIcon = document.querySelector(".menuIcon");
  const closeIcon = document.querySelector(".closeIcon");
    if (filter.classList.contains("showMenu")) {
      filter.classList.remove("showMenu");
      filter.style.display = "none";
      closeIcon.style.display = "none";
      menuIcon.style.display = "inline";
      hamburger.style.borderRadius = "5px";
    } else {
      filter.classList.add("showMenu");
      hamburger.style.borderRadius = "5px 5px 0 0";
      filter.style.display = "block";
      closeIcon.style.display = "inline";
      menuIcon.style.display = "none";
      for (let i = 0; i < menuItems.length; i++) {
        if(menuItems[i].innerHTML == title.innerText) {
          menuItems[i].style.display = "none";
        }
      }
    }
  }

function sortMedia(filterMedia){
  const select = document.querySelectorAll(".item");
  const hamburger= document.querySelector(".hamburger_button p");
  let newArray = [];
  for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("click", (e) => {
      switch (select[i].innerHTML) {
                    case 'Popularité':
                            newArray = sortBy('likes').reverse()
                            hamburger.innerHTML = select[i].innerHTML;
                        break
                    case 'Date':
                            newArray = sortBy('dates')
                            hamburger.innerHTML = select[i].innerHTML;
                        break
                    case 'Titre':
                            newArray = sortBy('title')
                            hamburger.innerHTML = select[i].innerHTML;
                        break
                    default :
                            newArray = filterMedia;
                }
                init(newArray, select[i].innerHTML);
                return newArray;
            })
            
  }
            function sortBy(property) {
                return filterMedia.sort((a,b) => {
                    return a[property] >= b[property]
                    ? 1
                    : -1
                })
            }
}