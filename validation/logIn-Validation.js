const Validator = require('validator');
const isEmpty = require('is-empty');
module.exports = function validateLoginInputs(data) {
    let errors = {};
    data.email = isEmpty(data.email) ? '' : data.email;
    data.password = isEmpty(data.password) ? '' : data.password;

    if (validator.isEmpty(data.email)) {
        errors.email = 'email is required'
    }
    else if (!validator.isEmail(data.email)) {
        errors.email = 'email is invalid'
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "email is require"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};