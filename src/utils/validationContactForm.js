export const validateContactForm = (values) => {
    const { firstName, lastName, phoneNum, email } = values;
    const errors = {};

    if (!firstName) {
        errors.firstName = 'Required';
    } else if (firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (firstName.length > 15) {
        errors.firstName = 'Must be 15 characters of less.';
    }

    if (!lastName) {
        errors.lastName = 'Required';
    } else if (lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (lastName.length > 15) {
        errors.lastName = 'Must be 15 characters of less.';
    }

    const reg = /^\d+$/;
    if (!reg.test(phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    } else if (phoneNum.length > 10 || phoneNum.length < 10) {
        errors.phoneNum = 'A 10-digit phone number is required.'
    }

    if (!email.includes('@')) {
        errors.email = 'Email should contain a @';
    } else if (!email.includes('.')) {
        errors.email = 'Email must end in .com, .net, .mac, etc.';
    }

    return errors;
}