let links = document.querySelector(".header .links");
let ul = document.querySelector(".header .links ul");
let span2 = document.querySelector(".header .links span:nth-child(2)");
let lan = document.querySelector(".landing");


lan.onclick = function() {
    console.log("saliit");
    ul.style.display = "none";
    span2.style.width = "60%";
};

links.onclick = function() {
    console.log("breekt");
    ul.style.display = "block";
    span2.style.width = "100%";
};

window.onscroll = function() {
    if(window.scrollY > 300) {
        console.log("saliit");
        ul.style.display = "none";
        span2.style.width = "60%";
    }
}
