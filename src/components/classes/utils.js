/**
 * This file contains list of helping method for the project
 */

const isNull = (ele) => {
    return ele === null ? true : false;
}

const isEmptyString = (ele) => {
    return ele === "" ? true : false;
}

const isStringLengthValid = (str, len) => {
    str = str.replace(/\ /g, "");
    return str.length >= len ? true : false;
}

const isContainWhiteSpace = (str) => {
    return str.indexOf(" ") == -1 ? false : true;
}

const isEmailFormat = (str) => {
    // just a very basic email validator on checking @
    // todo, install joi for doing email validation
    var index = str.indexOf("@");
    return (index != -1 && index != 0) ? true: false;
}

const utils = {
    isNull: isNull,
    isEmptyString: isEmptyString,
    isStringLengthValid: isStringLengthValid,
    isContainWhiteSpace: isContainWhiteSpace,
    isEmailFormat: isEmailFormat
}

export default utils;