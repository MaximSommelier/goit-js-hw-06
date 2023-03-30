const form = document.querySelector('.login-form');
// const email = document.querySelector('email');
// const password = document.querySelector('password');

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

