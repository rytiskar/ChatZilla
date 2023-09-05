import { validateEmail } from "./email-validation.js";
import { usernameValidation } from "./username-validation.js";

document.getElementById('create-account-button').addEventListener('click', createAccountClick);



function createAccountClick() {
    const email = getInputValue('input-email');
    const username = getInputValue('input-username');
    const password = getInputValue('input-password');
    const repeatPassword = getInputValue('input-password-repeat');

    console.log(email);
    console.log(username);
    console.log(password);
    console.log(repeatPassword);
}

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