const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  timerId = setInterval(changeBodyColor, 1000);
  startBtn.disabled = true;
}
function onStopClick() {
  clearInterval(timerId);
  startBtn.disabled = false;
}
function changeBodyColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
