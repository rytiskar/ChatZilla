// checks if the password is atleast 12 characters long, has lower and upper case letters, atleast
// one number and atleast one special character
function passwordComplexityValidation(password) {
    let validLength = false;
    let containsUpperCaseLetter = false;
    let containsLowerCaseLetter = false;
    let containsNumber = false;
    let containsSpecialSymbol = false;

    validLength = checkLength(password.length);
    containsUpperCaseLetter = checkUpperCaseLetterContainment(password);
    containsLowerCaseLetter = checkLowerCaseLetterContainment(password);
    containsNumber = checkNumberContainment(password);
    containsSpecialSymbol = checkSpecialSymbolContainment(password);

    if ((validLength && containsUpperCaseLetter && containsLowerCaseLetter && containsNumber && containsSpecialSymbol) == true) {
        return true;
    }
    else {
        return false;
    }
}

export function checkLength(passwordLength) {
    if (passwordLength >= 12) {
        return true;
    }
    else {
        return false;
    }
}

export function checkLowerCaseLetterContainment(password) {
    let upperCasePassword = password.toUpperCase();

    if (password == upperCasePassword) {
        return false;
    }
    else {
        return true;
    }
}

export function checkUpperCaseLetterContainment(password) {
    let lowerCasePassword = password.toLowerCase();

    if (password == lowerCasePassword) {
        return false;
    }
    else {
        return true;
    }
}

export function checkNumberContainment(password) {
    return /\d/.test(password);
}

export function checkSpecialSymbolContainment(password) {
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    return format.test(password);
}

export const passwordValidation = (labelID, inputID) => {
    const $label = $(labelID);
    const $input = $(inputID);
    const password = $(inputID).val();

    if (passwordComplexityValidation(password)) {
        $label.css('color', 'green');
        $input.css('border-bottom', '1px solid green');
    }
    else {
        $label.css('color', 'red');
        $input.css('border-bottom', '1px solid red');
    }

    return false;
}

// checks if the repeated password is identical to the previously given password
function checkPasswordIdenticality(initialPassword, repeatedPassword) {
    if (initialPassword == repeatedPassword) {
        return true;
    }
    else {
        return false;
    }
}

export const repeatPasswordValidation = (labelID, initialPasswordInputID, repeatedPasswordInputID) => {
    const $label = $(labelID);
    const $input = $(repeatedPasswordInputID);
    const initialPassword = $(initialPasswordInputID).val();
    const repeatedPassword = $(repeatedPasswordInputID).val();

    if (checkPasswordIdenticality(initialPassword, repeatedPassword)) {
        $label.css('color', 'green');
        $input.css('border-bottom', '1px solid green');
    }
    else {
        $label.css('color', 'red');
        $input.css('border-bottom', '1px solid red');
    }

    return false;
}

export function invalidRepeatPasswordField(initialPasswordID, repeatedPasswordID) {
    return !checkPasswordIdenticality(initialPasswordID, repeatedPasswordID);
}