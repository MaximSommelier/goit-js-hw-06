const rangeEl = document.querySelector('#font-size-control')
const spanTextSize = document.querySelector('#text')
console.log(spanTextSize)
rangeEl.addEventListener('input', changeFontSize);

function changeFontSize(event){
spanTextSize.style.fontSize = event.currentTarget.valueAsNumber;
console.log(event.currentTarget.valueAsNumber)
};