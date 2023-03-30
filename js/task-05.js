const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', checkInput);
const textDefault = 'Anonimus';

function checkInput (evt){
    console.log(evt.currentTarget.value)
    if (!evt.currentTarget.value){
        output.textContent = textDefault;
    }
output.textContent = evt.currentTarget.value.trim();
};