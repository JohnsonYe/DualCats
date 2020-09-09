import Request from './request.js';

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
        const rest = new Request();
        return rest.postFetch(`${this.apiURI}/api/v1/users/login`, params)
            .then(data => {
                if (data.success) { 
                    const token = data.data.token;
                    // todo 
                    // create session to let user login for a amount of time
                    return data.data;
                } else {
                    return data.message;
                }
            })
    }

    register(params) {
        const rest = new Request();
        return rest.postFetch(`${this.apiURI}/api/v1/users/register`, params)
            .then(data => {
                if (data.success) {
                    return data.data;
                } else {
                    return data.success;
                }

            })
    }
}

export default User;