let style = document.querySelector(".styleweb");
let redesign = document.querySelector(".redesign");
let simple = document.querySelector(".simple");
let sprite = document.querySelector(".sprite");
let interanim = document.querySelector(".interanim");
let intertrail = document.querySelector(".intertrail");
let projectone = document.querySelector(".projectone");
let projecttwo = document.querySelector(".projecttwo");
let digital = document.querySelector(".digital");
let story = document.querySelector(".story");
let city = document.querySelector(".city");



style.addEventListener("mouseover", changeToStyle);

function changeToStyle() {
    style.setAttribute("src", "img/capture.png");

}
style.addEventListener("mouseleave", changeBack);

function changeBack() {
    style.setAttribute("src", "img/style1.png");
}

redesign.addEventListener("mouseover", changeToRe);

function changeToRe() {
    redesign.setAttribute("src", "img/redes.png");
}
redesign.addEventListener("mouseleave", changeBacks);

function changeBacks() {
    redesign.setAttribute("src", "img/redes1.png");
}

simple.addEventListener("mouseover", changeToSi);

function changeToSi() {
    simple.setAttribute("src", "img/simp.png");
}
simple.addEventListener("mouseleave", changeBackss);

function changeBackss() {
    simple.setAttribute("src", "img/simp1.png");
}

sprite.addEventListener("mouseover", changeToSp);

function changeToSp() {
    sprite.setAttribute("src", "img/spri.png");
}
sprite.addEventListener("mouseleave", changeBacksss);

function changeBacksss() {
    sprite.setAttribute("src", "img/spri1.png");
}

interanim.addEventListener("mouseover", changeToIn);

function changeToIn() {
    interanim.setAttribute("src", "img/inter.png");
}
interanim.addEventListener("mouseleave", changeBacks4);

function changeBacks4() {
    interanim.setAttribute("src", "img/inter1.png");
}

intertrail.addEventListener("mouseover", changeToI);

function changeToI() {
    intertrail.setAttribute("src", "img/touch.png");
}
intertrail.addEventListener("mouseleave", changeBacks5);

function changeBacks5() {
    intertrail.setAttribute("src", "img/touch1.png");
}
projectone.addEventListener("mouseover", changeToP1);

function changeToP1() {
    projectone.setAttribute("src", "img/pone.png");
}
projectone.addEventListener("mouseleave", changeBacks6);

function changeBacks6() {
    projectone.setAttribute("src", "img/pone1.png");
}

projecttwo.addEventListener("mouseover", changeToP2);

function changeToP2() {
    projecttwo.setAttribute("src", "img/ptwo.png");
}
projecttwo.addEventListener("mouseleave", changeBacks7);

function changeBacks7() {
    projecttwo.setAttribute("src", "img/ptwo1.png");
}

digital.addEventListener("mouseover", changeToDi);

function changeToDi() {
    digital.setAttribute("src", "img/hina.png");
}
digital.addEventListener("mouseleave", changeBack8);

function changeBack8() {
    digital.setAttribute("src", "img/hina1.png");
}

story.addEventListener("mouseover", changeToSt);

function changeToSt() {
    story.setAttribute("src", "img/story-no.png");
}
story.addEventListener("mouseleave", changeBacks9);

function changeBacks9() {
    story.setAttribute("src", "img/story1.png");
}

city.addEventListener("mouseover", changeToCi);

function changeToCi() {
    city.setAttribute("src", "img/two-lakes.png");
}
city.addEventListener("mouseleave", changeBacks10);

function changeBacks10() {
    city.setAttribute("src", "img/two-lakes1.png");
}
