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



style.addEventListener("mouseover", changeToStyle);
function changeToStyle(){
style.setAttribute("style","background-image:url('img/capture.png');"); 

} style.addEventListener("mouseleave", changeBack);
function changeBack(){
style.setAttribute("style","background-image:url('img/style1.png');");
}

redesign.addEventListener("mouseover", changeToRe);
function changeToRe(){
redesign.setAttribute("style","background-image:url('img/redes.png');");
}
redesign.addEventListener("mouseleave", changeBacks);
function changeBacks(){
 redesign.setAttribute("style","background-image:url('img/redes1.png');");
}

simple.addEventListener("mouseover", changeToSi);
function changeToSi(){
simple.setAttribute("style","background-image:url('img/simp.png');");
}
 simple.addEventListener("mouseleave", changeBackss);
function changeBackss(){
simple.setAttribute("style","background-image:url('img/simp1.png');"); 
}

sprite.addEventListener("mouseover", changeToSp);
function changeToSp(){
sprite.setAttribute("style","background-image:url('img/spri.png');");
}
 sprite.addEventListener("mouseleave", changeBacksss);
function changeBacksss(){
sprite.setAttribute("style","background-image:url('img/spri1.png');"); 
}

interanim.addEventListener("mouseover", changeToIn);
function changeToIn(){
interanim.setAttribute("style","background-image:url('img/inter.png');");
}
 interanim.addEventListener("mouseleave", changeBacks4);
function changeBacks4(){
interanim.setAttribute("style","background-image:url('img/inter1.png');"); 
}

intertrail.addEventListener("mouseover", changeToI);
function changeToI(){
intertrail.setAttribute("style","background-image:url('img/touch.png');");
}
 intertrail.addEventListener("mouseleave", changeBacks5);
function changeBacks5(){
intertrail.setAttribute("style","background-image:url('img/touch1.png')"); 
}
projectone.addEventListener("mouseover", changeToP1);
function changeToP1(){
projectone.setAttribute("style","background-image:url('img/pone.png');");
}
 projectone.addEventListener("mouseleave", changeBacks6);
function changeBacks6(){
projectone.setAttribute("style","background-image:url('img/pone1.png');"); 
}

projecttwo.addEventListener("mouseover", changeToP2);
function changeToP2(){
projecttwo.setAttribute("style","background-image:url('img/ptwo.png');;");
}
 projecttwo.addEventListener("mouseleave", changeBacks7);
function changeBacks7(){
projecttwo.setAttribute("style","background-image:url('img/ptwo1.png');"); 
}

digital.addEventListener("mouseover", changeToDi);
function changeToDi(){
digital.setAttribute("style","background-image:url('img/hina.png');");
}
 digital.addEventListener("mouseleave", changeBack8);
function changeBack8(){
digital.setAttribute("style","background-image:url('img/hina1.png');"); 
}

story.addEventListener("mouseover", changeToSt);
function changeToSt(){
story.setAttribute("style","background-image:url('img/story-no.png');");
}
 story.addEventListener("mouseleave", changeBacks9);
function changeBacks9(){
story.setAttribute("style","background-image:url('img/story1.png');"); 
}

city.addEventListener("mouseover", changeToCi);
function changeToCi(){
city.setAttribute("style","background-image:url('img/two-lakes.png');");
}
 city.addEventListener("mouseleave", changeBacks10);
function changeBacks10(){
city.setAttribute("style","background-image:url('img/two-lakes1.png');"); 
}