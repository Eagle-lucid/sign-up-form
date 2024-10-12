// Phone input field initialization
const phoneInputField = document.querySelector("#phoneNum"); 
const iti = window.intlTelInput(phoneInputField, { 
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js", 
}); 

// Password input and requirement elements
const passwordInput = document.querySelector("#password");  
const confirmPasswordInput = document.querySelector("#confirm");
const requirements = document.querySelectorAll('.requirement');
const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");


// Individual password requirement elements
const lengthRequirement = document.querySelector("#lengthRequirement"); 
const uppercaseRequirement = document.querySelector("#uppercaseRequirement"); 
const lowercaseRequirement = document.querySelector("#lowercaseRequirement"); 
const numberRequirement = document.querySelector("#numberRequirement");
const specialCharRequirement = document.querySelector("#specialCharRequirement");

// Update password requirements display
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    lengthRequirement.style.textDecoration = password.length >= 8 ? "line-through" : "none";
    uppercaseRequirement.style.textDecoration = /[A-Z]/.test(password) ? "line-through" : "none";
    lowercaseRequirement.style.textDecoration = /[a-z]/.test(password) ? "line-through" : "none";
    numberRequirement.style.textDecoration = /\d/.test(password) ? "line-through" : "none";
    specialCharRequirement.style.textDecoration = /[\W_]/.test(password) ? "line-through" : "none";
});

// Check if passwords match and update border color
confirmPasswordInput.addEventListener("input", () => {
    const confirmPassword = confirmPasswordInput.value;
    confirmPasswordInput.style.borderColor = passwordInput.value === confirmPassword ? "green" : "red";
});

// Input validation for all fields
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.classList.toggle('valid', input.checkValidity());
        input.classList.toggle('invalid', !input.checkValidity());
    });
});

// Real-time validation of password requirements
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;

    requirements.forEach((req, index) => {
        switch (index) {
            case 0:
                req.classList.toggle('valid', password.length >= 8);
                req.classList.toggle('invalid', password.length < 8);
                break;
            case 1:
                req.classList.toggle('valid', /[A-Z]/.test(password));
                req.classList.toggle('invalid', !/[A-Z]/.test(password));
                break;
            case 2:
                req.classList.toggle('valid', /[a-z]/.test(password));
                req.classList.toggle('invalid', !/[a-z]/.test(password));
                break;
            case 3:
                req.classList.toggle('valid', /\d/.test(password));
                req.classList.toggle('invalid', !/\d/.test(password));
                break;
            case 4:
                req.classList.toggle('valid', /[!@#$%^&*(),.?":{}|<>]/.test(password));
                req.classList.toggle('invalid', !/[!@#$%^&*(),.?":{}|<>]/.test(password));
                break;
        }
    });

    passwordInput.classList.toggle('valid', passwordInput.checkValidity());
    passwordInput.classList.toggle('invalid', !passwordInput.checkValidity());
});
// Toggle password visibility for password field
togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';  // Switch icon
});

// Toggle password visibility for confirm password field
toggleConfirmPassword.addEventListener('click', () => {
    const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
    confirmPasswordInput.type = type;
    toggleConfirmPassword.textContent = type === 'password' ? '👁️' : '🙈';  // Switch icon
});
