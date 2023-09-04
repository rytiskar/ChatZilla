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

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $label = $('#input-email-label');
    const email = $('#input-email').val();
   
     if (validateEmail(email)) {
        $label.css('color', 'green');
    }
    else {
        $label.css('color', 'red');
    }

    return false;
};

// Constantly checks for user's input validation state
$('#input-email').on('input', validate);