let btnHam = document.querySelector(".header__ham");
let btnClose = document.querySelector(".header__close");
let linksList = document.querySelector(".header__list");


btnHam.addEventListener("click", function (){
    linksList.style.transform="translateX(0)";
    btnClose.style.display="block";
});

btnClose.addEventListener("click", function (){
    linksList.style.transform="translateX(100%)";
    btnClose.style.display="none";
});