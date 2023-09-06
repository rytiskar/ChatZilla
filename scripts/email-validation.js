// Checks if the given email address is appropriate to the standart email template
const validateEmailRegex = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateEmail = (labelID, inputID) => {
    const $label = $(labelID);
    const $input = $(inputID);
    const email = $(inputID).val();
   
     if (validateEmailRegex(email)) {
        $label.css('color', 'green');
        $input.css('border-bottom', '1px solid green');
    }
    else {
        $label.css('color', 'red');
        $input.css('border-bottom', '1px solid red');
    }

    return false;
};