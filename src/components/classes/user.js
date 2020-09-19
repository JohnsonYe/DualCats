import Request from './request.js';
import Validator from './validator.js';
/**
 * !TODO
 *      Validate user form for login and regiester
 */

class User {
    constructor () {
        this.apiURI = process.env.API_URI;
    }
    /**
     * 
     * @param {object} params, contain email and password
     */
    login(params) {
        try {
            const validator = new Validator();
            validator.validateLoginInformation(params);
            const rest = new Request();
            return rest.postFetch(`${this.apiURI}/api/v1/users/login`, params)
            .then(data => {
                if (data.success) { 
                    const token = data.data.token;
                    // todo 
                    // create session to let user login for a amount of time
                    return {success: true, data: data.data};
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
                .then(data => {
                    if (data.success) {
                        return {success: true, data: data.data};
                    } else {
                        return { success: false, message: data.message };
                    }
                }).catch(err => {
                    console.log("TODO", err);
                });
        } catch (error) {
            return Promise.resolve({ success: false, message: error.message });
        }
    }
}

export default User;