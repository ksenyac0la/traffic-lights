const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const redCircle = document.querySelector('.redCircle');
const yellowCircle = document.querySelector('.yellowCircle');
const greenCircle = document.querySelector('.greenCircle');

function makeActiv (element) {
    element.classList.add('active');
 
}

btn1.addEventListener('click', () => makeActiv(redCircle));
btn2.addEventListener('click', () => makeActiv(yellowCircle));
btn3.addEventListener('click', () => makeActiv(greenCircle));