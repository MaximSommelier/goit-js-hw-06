const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', checkTextLength);


function checkTextLength(event){
   if (event.currentTarget.value.length !== Number(dataLength)){
    input.classList.add("invalid")
} else {
   input.classList.add("valid")
}
};

// console.log(dataLength)
