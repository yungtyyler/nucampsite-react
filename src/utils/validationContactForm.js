export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters of less.';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters of less.';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    } else if (values.phoneNum.length > 10 || values.phoneNum.length < 10) {
        errors.phoneNum = 'A 10-digit phone number is required.'
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    } else if (!values.email.includes('.')) {
        errors.email = 'Email must end in .com, .net, .mac, etc.';
    }

    return errors;
}