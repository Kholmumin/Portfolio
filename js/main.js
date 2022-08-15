let elBtn = document.querySelector(".site-header__hamburg");
let elHeader = document.querySelector(".site-header");

elBtn.addEventListener("click",function(){
    elHeader.classList.toggle("open");
    
    if (elHeader.classList.contains("open")){
        elHeader.parentElement.style.position = "fixed"
        elHeader.parentElement.style.width = "100%"
    }else{
        elHeader.parentElement.style.position = "static"
    }
})
