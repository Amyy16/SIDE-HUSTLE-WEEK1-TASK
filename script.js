const form = document.getElementById('form');
// const firstname = document.getElementById('fname');
// const email = document.getElementById('email');
const password = document.getElementById('password');
// const lastname = document.getElementById('lname');
// const phone = document.getElementById('phone');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    validateInputs();
});

const setError = (element, message) => {
    const innerForm = element.parentElement;
    const errorDisplay = innerForm.querySelector('.error');
    
    errorDisplay.innerText = message;
    innerForm.classList.add('error');
    innerForm.classList.remove('success')
};

const setSuccess = element => {
    const innerForm = element.parentElement;
    const errorDisplay = innerForm.querySelector('.error');

    errorDisplay.innerText = '';
    innerForm.classList.add('success');
    innerForm.classList.remove('error')
};

// const isValidEmail = email => {
//     const emailCheck =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
//     return emailCheck.test(String(email).toLowerCase());
// };



const validateInputs = () => {
    // const firstnameValue = firstname.value.trim();
    // const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    // const lastnameValue = lastname.value.trim();
    // const phoneValue = phone.value.trim();
    const password2Value = password2.value.trim();

    // if(firstnameValue === '') {
    //     setError(firstname, 'Firstname is required');
    // } else {
    //     setSuccess(firstname);
    // }

    // if(emailValue ==='') {
    //     setError(email, 'Email is required');
    // } else if(!isValidEmail(emailValue)) {
    //     setError(email, 'provide a valid email address');
    // } else {
    //     setSuccess(email);
    // }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

    // if(lastnameValue === '') {
    //     setError(lastname, 'Lastname is required');
    // } else {
    //     setSuccess(lastname);
    // }
    
    // if (phoneValue === '') {
    //     setError(phone, 'Phone number is required');
    // } else if (phoneValue.length < 11 ) {
    //     setError(phone, 'phone number must be 11 digits');
    // } else if (phoneValue.length == 11) {
    //     setSuccess(phone);
    // }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password, "* Passwords do not match");
        setError(password2, '')
    } else {
        setSuccess(password2);
    }
};
