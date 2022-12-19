var elIMG = document.querySelector(".navbar-item__img")
var elLink = document.querySelectorAll(".navbar-list-item__link")



elLink.forEach((el) => {
    el.addEventListener("click", () => {
        elIMG.style.display = "none"
    })
})