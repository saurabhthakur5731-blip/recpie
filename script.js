alert("welcome to my portfolio website!");

document.querySelector(".logo").addEventListener("click", function(){
alert("logo clicked");
});

document.querySelectorAll(".menu li a").forEach(function(link){
link.addEventListener("click", function(e){

e.preventDefault();

let target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior: "smooth"
});
}

});

});



window.addEventListener("scroll", function(){

let navbar = document.querySelector("nav");

if(window.scrollY > 50){
navbar.style.backgroundColor = "black";
}
else{
navbar.style.backgroundColor = "transparent";
}

});



let menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(link=>{
link.addEventListener("click",function(){

menuLinks.forEach(l=>l.classList.remove("active"));

this.classList.add("active");

});
});



let cards = document.querySelectorAll(".recipe-card");

function showCards(){

let trigger = window.innerHeight * 0.85;

cards.forEach(card => {

let cardTop = card.getBoundingClientRect().top;

if(cardTop < trigger){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

}



window.addEventListener("scroll", showCards);

showCards();
document.querySelectorAll(".recipe-card img").forEach(img=>{

img.addEventListener("click",function(){

let popup = document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,0.8)";
popup.style.display="flex";
popup.style.alignItems="center";
popup.style.justifyContent="center";

let bigImg = document.createElement("img");
bigImg.src = this.src;
bigImg.style.width="60%";

popup.appendChild(bigImg);

popup.addEventListener("click",function(){
popup.remove();
});

document.body.appendChild(popup);

});

});


window.addEventListener("scroll",function(){

let scrollTop = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let percent = (scrollTop/height)*100;

document.getElementById("progress").style.width = percent+"%";

});



document.querySelectorAll(".routine button").forEach(btn=>{
btn.addEventListener("click",function(e){

let circle = document.createElement("span");

circle.style.position="absolute";
circle.style.width="100px";
circle.style.height="100px";
circle.style.background="rgba(255,255,255,0.5)";
circle.style.borderRadius="50%";
circle.style.left=e.offsetX+"px";
circle.style.top=e.offsetY+"px";

this.appendChild(circle);

setTimeout(()=>{
circle.remove();
},500);

});
});



let lastScroll = 0;

window.addEventListener("scroll",function(){

let nav = document.querySelector("nav");
let current = window.pageYOffset;

if(current > lastScroll){
nav.style.top = "-80px";
}
else{
nav.style.top = "0";
}

lastScroll = current;

});



let search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".recipe-card");

cards.forEach(function(card){

let title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});


let btn = document.getElementById("topBtn");

window.onscroll = function(){
if(window.scrollY > 50){
btn.style.display="block";
}else{
btn.style.display="none";
}
};

btn.onclick = function(){
window.scrollTo({top:0,behavior:"smooth"});
};

document.getElementById("darkmode").onclick = function(){
document.body.classList.toggle("dark");
}


function toggleMenu(){
document.getElementById("menu").classList.toggle("show");
}
