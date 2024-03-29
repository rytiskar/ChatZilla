// checks if the username length is between 4 and 20 characters long
function usernameLengthValidation(usernameLength) {
    if (usernameLength >= 4 &&  usernameLength <= 20) {
        return true;
    }
    else {
        return false;
    }
}

export const usernameValidation = (labelID, inputID) => {
    const $label = $(labelID);
    const $input = $(inputID);
    const username = $(inputID).val();

    if (usernameLengthValidation(username.length)) {
        $label.css('color', 'green');
        $input.css('border-bottom', '1px solid green');
    }
    else {
        $label.css('color', 'red');
        $input.css('border-bottom', '1px solid red');
    }

    return false;
}

export function invalidUsernameFieldLength(usernameID) {
    return !usernameLengthValidation(usernameID.length);
}