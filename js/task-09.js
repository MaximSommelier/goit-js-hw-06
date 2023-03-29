const span = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body');

button.addEventListener('click', changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 function changeBodyColor(event){
  button.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};
