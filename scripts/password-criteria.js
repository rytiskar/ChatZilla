import { checkLength, checkUpperCaseLetterContainment, checkLowerCaseLetterContainment } from "./password-validation.js";
import { checkNumberContainment, checkSpecialSymbolContainment } from "./password-validation.js";

export function updatePasswordCriteria(password) {
    const criteriaTable = document.querySelector('#password-information table');

    criteriaTable.innerHTML = '';

    const criteriaChecks = [
        { criteria: 'Length (12 characters minimum)', isValid: password.length >= 12},
        { criteria: 'Contains at least one lowercase letter', isValid: checkLowerCaseLetterContainment(password)},
        { criteria: 'Contains at least one uppercase letter', isValid: checkUpperCaseLetterContainment(password)},
        { criteria: 'Contains at least one digit', isValid: checkNumberContainment(password)},
        { criteria: 'Contains at least one special character', isValid: checkSpecialSymbolContainment(password)}
    ];

    for (const criterion of criteriaChecks) {
        const newRow = criteriaTable.insertRow();
        const criteriaCell = newRow.insertCell(0);
        const statusCell = newRow.insertCell(1);

        criteriaCell.textContent = criterion.criteria;
        statusCell.textContent = criterion.isValid ? '✅' : '❌';
    }

    const passwordInfoElement = document.querySelector('#password-information');
    passwordInfoElement.style.marginBottom = '15px';
}

export function invalidPasswordCriteria(password) {
    const criteriaChecks = [
        { criteria: 'Length (12 characters minimum)', isValid: password.length >= 12 },
        { criteria: 'Contains at least one lowercase letter', isValid: checkLowerCaseLetterContainment(password) },
        { criteria: 'Contains at least one uppercase letter', isValid: checkUpperCaseLetterContainment(password) },
        { criteria: 'Contains at least one digit', isValid: checkNumberContainment(password) },
        { criteria: 'Contains at least one special character', isValid: checkSpecialSymbolContainment(password) }
    ];

    const isPasswordValid = criteriaChecks.every(criterion => criterion.isValid);

    return !isPasswordValid;
}