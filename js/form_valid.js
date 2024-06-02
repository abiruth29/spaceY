document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const fullName = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const dob = document.getElementById('dob');
    const gender = document.getElementById('gender');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        validateInputs();
    });

    function validateInputs() {
        // Full Name 
        const fullNameValue = fullName.value.trim();
        if(fullNameValue === '' || !/^[a-zA-Z\s]+$/.test(fullNameValue)) {
            setError(fullName, 'Full Name is required and should contain only letters.');
        } else {
            setSuccess(fullName);
        }

        // Email 
        const emailValue = email.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(emailValue === '') {
            setError(email, 'Email is required.');
        } else if (!emailPattern.test(emailValue)) {
            setError(email, 'Email is not valid.');
        } else {
            setSuccess(email);
        }

        // Phone Number 
        const phoneValue = phone.value.trim();
        if(phoneValue === '' || !/^\d{10}$/.test(phoneValue)) {
            setError(phone, 'Phone Number is required and should be 10 digits.');
        } else {
            setSuccess(phone);
        }

        // Date of Birth 
        const dobValue = dob.value.trim();
        if(dobValue === '') {
            setError(dob, 'Date of Birth is required.');
        } else {
            setSuccess(dob);
        }

        // Gender 
        const genderValue = gender.value.trim();
        if(genderValue === '') {
            setError(gender, 'Gender selection is required.');
        } else {
            setSuccess(gender);
        }
    }

    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorDisplay = inputGroup.querySelector('.error');

        errorDisplay.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
        const inputGroup = element.parentElement;
        const errorDisplay = inputGroup.querySelector('.error');

        errorDisplay.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }
});
