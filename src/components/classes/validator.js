import utils from './utils';

/**
 * @class Validator
 * @description provided methods for validation
 */
class Validator {
    validateLoginInformation (params) {
        const userValidator = new UserInformationValidator(params);
        if (!userValidator.checkEmail()) {
            throw new Error("Invalid email.");
        }
        if (!userValidator.checkPassword()) {
            throw new Error("Invalid password.");
        }
    }

    validateRegisterInformation (params) {
        const userValidator = new UserInformationValidator(params);
        if (!userValidator.checkEmail()) {
            throw new Error("Invalid email.");
        }
        if (!userValidator.checkPassword()) {
            throw new Error("Invalid password.");
        }

        if (!userValidator.checkRepeatPassword()) {
            throw new Error("Password does not match.");
        }

        if (!userValidator.checkUsername()) {
            throw new Error("Invalid username.");
        }
    }
}

/**
 * @class UserValidator
 * @description provides validation method for user
 */
class UserInformationValidator {
    constructor ({email = "", password = "", username = "", repeat_password = ""}) {
        this.email = email;
        this.password = password;
        this.repeat_password = repeat_password;
        this.username = username;
    }

    checkEmail() {
        return (
            utils.isNull(this.email) ||
            utils.isEmptyString(this.email) ||
            !utils.isEmailFormat(this.email) ||
            utils.isContainWhiteSpace(this.email)
        ) ? false : true;
    }

    checkPassword() {
        return (
            utils.isNull(this.password) ||
            utils.isEmptyString(this.password) ||
            !utils.isStringLengthValid(this.password, 8) ||
            utils.isContainWhiteSpace(this.password)
        ) ? false : true;
    }

    checkRepeatPassword() {
        return (this.repeat_password === this.password) ? true : false;
    }

    checkUsername () {
        return (utils.isNull(this.username) || utils.isEmptyString(this.username)) ? false : true;
    }
}

export default Validator;