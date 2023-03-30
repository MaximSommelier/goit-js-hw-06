const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', checkTextLength);
input.addEventListener('input', clearInput);


function checkTextLength(event){
   if (event.currentTarget.value.length !== Number(dataLength)){
    input.classList.add("invalid")
} else {
   input.classList.add("valid")
}
};

function clearInput(event){
   input.classList.remove("invalid")
   input.classList.remove("valid")
};

// console.log(dataLength)
