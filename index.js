console.log("Welcome to Dragon Travel Desk");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

// console.log(name,email,phone);

name.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('Your Name is Valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your Name is not Valid');
        name.classList.add('is-invalid');
        validUser = false;
    }
})
email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here
    let regx = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('Your email is Valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not Valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regx = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('Your Phone is Valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your Phone is not Valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You have Clicked');
    console.log('validEmail, validPhone, validUser')
    // submit your form here
    if (validEmail && validPhone && validUser) {


        console.log('Phone, Email & User are Valid');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log('One of the Phone, Email & User is invalid, correct it & try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();
    }
})