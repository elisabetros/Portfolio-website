let slideIndex = 1;
showSlides(slideIndex);

let style= document.querySelector(".styleweb");
let redesign= document.querySelector(".redesign");
let simple= document.querySelector(".simple");
let sprite= document.querySelector(".sprite");
let interanim= document.querySelector(".interanim");
let intertrail= document.querySelector(".intertrail");
let projectone= document.querySelector(".projectone");
let projecttwo= document.querySelector(".projecttwo");
let digital= document.querySelector(".digital");
let story= document.querySelector(".story");
let city= document.querySelector(".city");
let logoTransfer= document.getElementById("front");


window.addEventListener("scroll", moveIt);

function moveIt(){
  logoTransfer.classList.add("moveit");
}


style.addEventListener("mouseover", changeToStyle);
function changeToStyle(){
style.setAttribute("style","background-image:url('img/stylewe.png');"); 

} style.addEventListener("mouseleave", changeBack);
function changeBack(){
style.setAttribute("style","background-image:url('img/prufa8.svg');");
}

redesign.addEventListener("mouseover", changeToRe);
function changeToRe(){
    console.log('working');
redesign.setAttribute("style","background-image:url('img/redes.png'); filter: opacity(0.5);");
}
redesign.addEventListener("mouseleave", changeBacks);
function changeBacks(){
 redesign.setAttribute("style","background-image:url('img/prufa8.svg');");
    console.log("working");
}

simple.addEventListener("mouseover", changeToSi);
function changeToSi(){
simple.setAttribute("style","background-image:url('img/simp.png'); width:100%; height:100%; filter: opacity(.5);");
}
 simple.addEventListener("mouseleave", changeBackss);
function changeBackss(){
simple.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

sprite.addEventListener("mouseover", changeToSp);
function changeToSp(){
sprite.setAttribute("style","background-image:url('img/spri.png'); width:100%; height:100%; filter: opacity(.5);");
}
 sprite.addEventListener("mouseleave", changeBacksss);
function changeBacksss(){
sprite.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

interanim.addEventListener("mouseover", changeToIn);
function changeToIn(){
interanim.setAttribute("style","background-image:url('img/inter.png'); width:100%; height:100%; filter:opacity(.5);");
}
 interanim.addEventListener("mouseleave", changeBacks4);
function changeBacks4(){
interanim.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

intertrail.addEventListener("mouseover", changeToI);
function changeToI(){
intertrail.setAttribute("style","background-image:url('img/touch.png'); width:100%; height:100%; filter:opacity(0.5);");
}
 intertrail.addEventListener("mouseleave", changeBacks5);
function changeBacks5(){
intertrail.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}
projectone.addEventListener("mouseover", changeToP1);
function changeToP1(){
projectone.setAttribute("style","background-image:url('img/pone.png'); width:100%; height:100%; filter: grayscale(100%);");
}
 projectone.addEventListener("mouseleave", changeBacks6);
function changeBacks6(){
projectone.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

projecttwo.addEventListener("mouseover", changeToP2);
function changeToP2(){
projecttwo.setAttribute("style","background-image:url('img/ptwo.png'); filter: grayscale(100%); width:100%; height:100%;filter:opacity(.5);");
}
 projecttwo.addEventListener("mouseleave", changeBacks7);
function changeBacks7(){
projecttwo.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

digital.addEventListener("mouseover", changeToDi);
function changeToDi(){
digital.setAttribute("style","background-image:url('img/hina.png'); width:100%; height:100%; filter: opacity(.5);");
}
 digital.addEventListener("mouseleave", changeBack8);
function changeBack8(){
digital.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

story.addEventListener("mouseover", changeToSt);
function changeToSt(){
story.setAttribute("style","background-image:url('img/story-no.png'); width:100%; height:100%; filter:opacity(.5);");
}
 story.addEventListener("mouseleave", changeBacks9);
function changeBacks9(){
story.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

city.addEventListener("mouseover", changeToCi);
function changeToCi(){
city.setAttribute("style","background-image:url('img/two-lakes.png'); width:100%; height:100%; filter:opacity(.5);");
}
 city.addEventListener("mouseleave", changeBacks10);
function changeBacks10(){
city.setAttribute("style","background-image:url('img/prufa8.svg');"); 
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display ="block"; 
  dots[slideIndex-1].className += (" active");
}