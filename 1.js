const btn1 = document.querySelector('.btn1');
const redCircle = document.querySelector('.redCircle');

function makeRed(){
    redCircle.classList.add('active');
}

btn1.addEventListener('click', makeRed);


const btn2 = document.querySelector('.btn2');
const yellowCircle = document.querySelector('.yellowCircle');

function makeYellow(){
    yellowCircle.classList.add('active');
}

btn2.addEventListener('click', makeYellow);


const btn3 = document.querySelector('.btn3');
const greenCircle = document.querySelector('.greenCircle');

function makeGreen(){
    greenCircle.classList.add('active');
}

btn3.addEventListener('click', makeGreen);