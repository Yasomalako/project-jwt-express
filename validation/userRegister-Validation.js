const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function registerInputValidation(data) {
    let errors = {};
    data.name = isEmpty(data.name) ? '' : data.name;
    data.email = isEmpty(data.email) ? '' : data.email;
    data.lastName = isEmpty(data.lastName) ? '' : data.email;
    data.birthDate = isEmpty(data.birthDate) ? '' : data.birthDate;
    data.password = isEmpty(data.password) ? '' : data.password;
    data.passwordValid = isEmpty(data.passwordValid) ? '' : data.passwordValid;

    //validte name
    if (validator.isEmpty(data.name)) {
        errors.name = 'name field is require';
    }
    //validate last name

    if (validator.isEmpty(data.lastName)) {
        errors.lastName = 'last name is require';
    }
    // email validate
    if (validator.isEmpty(data.email)) {
        errors.email = 'email is require';
    }
    // birthdate validate
    if (validator.isEmpty(data.birthDate)) {
        errors.email = 'birth date is require';
    }
    if (validator.isLength(data.password, { min: 8, max: 30 })) {
        errors.password = 'password must be at least 8 character ';
    }
    if (validator.equals(data.password, data.passwordValid)) {
        errors.passwordValid = "password must to be match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};