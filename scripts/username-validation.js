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
    const username = $(inputID).val();

    if (usernameLengthValidation(username.length)) {
        $label.css('color', 'green');
    }
    else {
        $label.css('color', 'red');
    }

    return false;
}