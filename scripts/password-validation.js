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

function checkLength(passwordLength) {
    if (passwordLength >= 12) {
        return true;
    }
    else {
        return false;
    }
}

function checkUpperCaseLetterContainment(password) {
    let upperCasePassword = password.toUpperCase();

    if (password == upperCasePassword) {
        return false;
    }
    else {
        return true;
    }
}

function checkLowerCaseLetterContainment(password) {
    let lowerCasePassword = password.toLowerCase();

    if (password == lowerCasePassword) {
        return false;
    }
    else {
        return true;
    }
}

function checkNumberContainment(password) {
    return /\d/.test(password);
}

function checkSpecialSymbolContainment(password) {
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    return format.test(password);
}

export const passwordValidation = (labelID, inputID) => {
    const $label = $(labelID);
    const password = $(inputID).val();

    if (passwordComplexityValidation(password)) {
        $label.css('color', 'green');
    }
    else {
        $label.css('color', 'red');
    }

    return false;
}