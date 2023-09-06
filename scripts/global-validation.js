export function emptyField(fieldID) {
    if (fieldID.trim() === '') {
        return true;
    }
    else {
        return false;
    }
}