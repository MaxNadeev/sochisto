var screenWidth = window.innerWidth;
var roundedScreenWidth = Math.round(screenWidth / 100) * 100;
let number = roundedScreenWidth / 40;

let bubbleDiv = document.querySelector('.bubble-container');

function getRandomNumber(min, max) {
    let gap = Math.abs(max - min) / 10;
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber += Math.random() < 0.5 ? gap : -gap;
    randomNumber = Math.max(min, Math.min(max, randomNumber));
    return Math.round(randomNumber);
}

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

function addBubble(cssClass, cy){
    let cx = getRandomNumber(0, 100);
    let r = getRandomNumber(5, 35);
    
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("class", `${cssClass}`);
    circle.setAttribute("cx", `${cx}%`);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    
    svg.appendChild(circle);
}

for (let i = 0; i < number; i++) {
    addBubble('bubble', 300);
}
bubbleDiv.appendChild(svg)

for (var i = 0; i < number; i++) {
    var animationDelay = (Math.random() * 4).toFixed(1);
    var cssRule = `.bubble:nth-child(${i + 1}) {
      animation-delay: ${animationDelay}s;
    }`;
  
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(cssRule));
  
    document.head.appendChild(style);
}

var svgStatic = document.createElementNS("http://www.w3.org/2000/svg", "svg");
for (let i = 0; i < number * 5; i++) {
    addBubble('static-bubble', 155);
}
bubbleDiv.appendChild(svg)

