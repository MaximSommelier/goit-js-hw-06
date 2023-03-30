const form = document.querySelector('.login-form');
const email = document.querySelector('input[name="email"\]');
const password = document.querySelector('input[name="password"\]');
// ДИВНИЙ СИТАКСИС, НЕ ПАМЯТАЮ ТАКОГО НА ЛЕКЦІЯХ, АЛЕ ОК, ДЯКУЮ))

form.addEventListener('submit', onSubmit);


function onSubmit(event){
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    if (!email || !password){
        alert ("Усі поля мають бути заповені!");
    } else {
    const dataUser ={
        email: email.value,
        password: password.value,    
    }
    console.log(dataUser)
    }
    event.currentTarget.reset();
};

