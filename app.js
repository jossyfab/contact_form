
const form = document.getElementById('form');
console.log(form, 'form');
form.addEventListener('submit', (e) => {
e.preventDefault();

    let valid = true;

    const firstName = document.getElementById('first-name').value;
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;

    function displayError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.parentElement.querySelector('.error');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    }

    function clearError(inputId) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.parentElement.querySelector('.error');
    errorElement.classList.add('hidden');
    }

    if (firstName === '') {
    displayError('first-name', 'This field is required.');
    valid = false;
    } else {
    clearError('first-name');
    }

    if (middleName === '') {
    displayError('middle-name', 'This field is required.');
    valid = false;
    } else {
    clearError('middle-name');
    }

    if (lastName === '') {
    displayError('last-name', 'This field is required.');
    valid = false;
    } else {
    clearError('last-name');
    }

    if (dob === '') {
    displayError('dob', 'Date of birth is required.');
    valid = false;
    } else {
    clearError('dob');
    }

    if (phone.length < 11) {
    displayError('phone', 'Phone number must be at least 11 digits.');
    valid = false;
    } else {
    clearError('phone');
    }

    if (address === '') {
    displayError('address', 'This field is required.');
    valid = false;
    } else {
    clearError('address');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
    displayError('email', 'Please enter a valid email address.');
    valid = false;
    } else {
    clearError('email');
    }

    if (message.length < 5) {
    displayError('message', 'Message must be at least 5 characters.');
    valid = false;
    } else {
    clearError('message');
    }

    if (!consent) {
    displayError('consent', 'You must consent to be contacted.');
    valid = false;
    } else {
    clearError('consent');
    }

    if (valid) {
    const input = {};
    input.firstName = firstName;
    input.middleName = middleName;
    input.lastName = lastName;
    input.address = address;
    input.message = message;
    input.dob = dob;
    input.email = email;
    input.phone = phone;


    localStorage.setItem('student-input', JSON.stringify(input));

    const ls = localStorage.getItem('student-input');
    let studentsInput = ls ? JSON.parse(ls) : [];

    if (studentsInput && Array.isArray(studentsInput)) {
        // if data exist
        studentsInput.push(input);
    } else {
        //  if value does not exist
        studentsInput = [];

        studentsInput.push(input);
    }

    localStorage.setItem('student-input', JSON.stringify(studentsInput));

    window.location.replace('./info.html');
    form.reset();

    }
 


})
