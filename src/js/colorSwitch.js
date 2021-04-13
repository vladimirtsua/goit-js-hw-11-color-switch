const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const body = document.body;
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
let startSet = null;

function startChangeBcgColor() {
  startSet = setInterval(() => {
    body.setAttribute(
      'bgcolor',
      `${colors[randomIntegerFromInterval(0, colors.length - 1)]}`,
    );
      start.disabled = true
  }, 1000);
    
}
function stopChangeBcgColor() {
    clearInterval(startSet)
    start.disabled = false
}
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


start.addEventListener('click', startChangeBcgColor);
stop.addEventListener('click', stopChangeBcgColor);
