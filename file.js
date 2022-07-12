var show = document.querySelector(".fa-bars");
show.addEventListener("click",function(){
    document.querySelector(".nav-link").style.display="block";
    document.querySelector(".fa-bars").style.display="none"
})

var hiden = document.querySelector(".fa-xmark");
hiden.addEventListener("click",function(){
    document.querySelector(".nav-link").style.display="none"
    document.querySelector(".fa-bars").style.display="block"
})