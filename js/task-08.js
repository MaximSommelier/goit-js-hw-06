const form = document.querySelector('.login-form');
// const email = document.querySelector('email');
// const password = document.querySelector('password');

form.addEventListener('submit', onSubmit);
const alert = `Усі поля мають бути заповені!`

function onSubmit(event){
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    if (email || password  === ""){
        console.log(alert);
    } else {
    const dataUser ={
        email: email.value,
        password: password.value,    
    }
    console.log(dataUser)
    }
    document.onSubmit('form').reset();
};

// Я ХЗ как правильно сделать((