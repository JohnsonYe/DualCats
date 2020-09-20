import Request from './request.js';
import Validator from './validator.js';

/**
 * @class Oauth
 * @description provide method to requestion token and refresh token,
 *              Login and register
 */
class Oauth {
    constructor () {
        this.apiURI = process.env.API_URI;
    }

    /**
     * @param {string} token 
     * @description request new token wikth the refresh token
     */
    refreshToken(token) {
        const rest = new Request();
        return rest.postFetch(`${this.apiURI}/api/v1/oauth/token/refresh`, {refresh_token: token})
            .then(response => {
                if (response.success) {
                    return response.data.data;
                } else {
                    return response.message;
                }
            }).catch(err => {
                console.log("TODO", err);
                return err;
            })
    }

    /**
     * @param {object} params, contain email and password
     */
    login(params) {
        try {
            const validator = new Validator();
            validator.validateLoginInformation(params);
            const rest = new Request();
            return rest.postFetch(`${this.apiURI}/api/v1/users/login`, params)
            .then(response => {
                if (response.success) { 
                    // todo 
                    // create session to let user login for a amount of time
                    return {success: true, data: response.data.data};
                } else {
                    return { success: false, message: data.message };
                }
            }).catch(err => {
                console.log("TODO", err);
            });
        } catch(error) {
            return Promise.resolve({ success: false, message: error.message });
        }
    }

    register(params) {
        try {
            const validator = new Validator();
            validator.validateRegisterInformation(params);
            const rest = new Request();
            return rest.postFetch(`${this.apiURI}/api/v1/users/register`, params)
                .then(response => {
                    if (response.success) {
                        return {success: true, data: response.data.data};
                    } else {
                        return { success: false, message: response.message.error.message };
                    }
                }).catch(err => {
                    console.log(err);
                    return { success: false, message: err.message.error.message };
                    // return { success: false, message: response.error.message };
                });
        } catch (error) {
            return Promise.resolve({ success: false, message: error.message });
        }
    }
}

export default Oauth;
