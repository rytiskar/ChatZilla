import { validateEmail, invalidEmailField } from "./email-validation.js";
import { usernameValidation, invalidUsernameFieldLength } from "./username-validation.js";
import { passwordValidation, repeatPasswordValidation, invalidRepeatPasswordField } from "./password-validation.js";
import { updatePasswordCriteria, invalidPasswordCriteria } from "./password-criteria.js";
import { emptyField } from "./global-validation.js";

document.getElementById('create-account-button').addEventListener('click', createAccountClick);


function getInputValue(elementsID) {
    const element = document.getElementById(elementsID);
    const elementsValue = element.value;

    return elementsValue;
}


// Constantly checks for user's input validation state
$('#input-email').on('input', function() {
    validateEmail('#input-email-label', '#input-email'); 
});

$('#input-username').on('input', function() {
    usernameValidation('#input-username-label', '#input-username');
});

$('#input-password').on('input', function() {
    passwordValidation('#input-password-label', '#input-password');
})

$('#input-password-repeat').on('input', function() {
    repeatPasswordValidation('#input-password-repeat-label', '#input-password', '#input-password-repeat');
})

$('#input-password').on('input', function() {
    const password = $(this).val();
    updatePasswordCriteria(password);
});

function createAccountClick() {
    const email = getInputValue('input-email');
    const username = getInputValue('input-username');
    const password = getInputValue('input-password');
    const repeatPassword = getInputValue('input-password-repeat');

    let correctEmail = false;
    let correctUsername = false;
    let correctPassword = false;
    let corectPasswordRepeat = false;

    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const repeatPasswordError = document.getElementById('repeat-password-error');

    // email validation
    if (emptyField(email)) {
        emailError.textContent = 'Please fill in the Email field';
        correctEmail = false;
    }
    else if (invalidEmailField(email)) {
        emailError.textContent = 'Please provide a valid email address';
        correctEmail = false;
    }
    else {
        emailError.textContent = '';
        correctEmail = true;
    }

    // username validation
    if (emptyField(username)) {
        usernameError.textContent = 'Please fill in the Username field';
        correctUsername = false;
    }
    else if (invalidUsernameFieldLength(username)) {
        usernameError.textContent = 'Username should be between 4 and 20 characters';
        correctUsername = false;
    }
    else {
        usernameError.textContent = '';
        correctUsername = true;
    }

    // password validation
    if (emptyField(password)) {
        passwordError.textContent = 'Please fill in the Password field';
        correctPassword = false;
    }
    else if (invalidPasswordCriteria(password)) {
        passwordError.textContent = 'Please satisfy all the Password criteria';
        correctPassword = false;
    }
    else {
        passwordError.textContent = '';
        correctPassword = true;
    }

    // repeat password validation
    if (emptyField(repeatPassword)) {
        repeatPasswordError.textContent = 'Please fill in the Repeat Password field';
        corectPasswordRepeat = false;
    }
    else if (invalidRepeatPasswordField(password, repeatPassword)) {
        repeatPasswordError.textContent = 'Passwords does not match';
        corectPasswordRepeat = false;
    }
    else {
        repeatPasswordError.textContent = '';
        corectPasswordRepeat = true;
    }

    if ((correctEmail && correctUsername && correctPassword && corectPasswordRepeat) == true) {
        console.log(email);
        console.log(username);
        console.log(password);
        console.log(repeatPassword);
    }
}