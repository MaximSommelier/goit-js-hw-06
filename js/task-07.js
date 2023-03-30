const rangeEl = document.querySelector('#font-size-control')
const spanTextSize = document.querySelector('#text')
console.log(spanTextSize)
rangeEl.addEventListener('input', changeFontSize);

function changeFontSize(event){
spanTextSize.style.fontSize = event.currentTarget.value +'px';
console.log(event.currentTarget.value)
};