import Request from './request.js';
import Validator from './validator.js';

class NullUser {
    constructor () {
        this.username = "";
        this.isSignIn = false;
    }
    
    hasAccess() {
        return false;
    }
}

class ClientUser {
    constructor ({username, email}) {
        this.username = username;
        this.email = email;
        this.isSignIn = true;
    }

    hasAccess() {
        return true;
    }
}

class User {
    constructor () {
        this.apiURI = process.env.API_URI;
    }

    /**
     * @param {object} params, contain email and password
     */
    // login(params) {
    //     try {
    //         const validator = new Validator();
    //         validator.validateLoginInformation(params);
    //         const rest = new Request();
    //         return rest.postFetch(`${this.apiURI}/api/v1/users/login`, params)
    //         .then(response => {
    //             if (response.success) { 
    //                 // todo 
    //                 // create session to let user login for a amount of time
    //                 return {success: true, data: response.data.data};
    //             } else {
    //                 return { success: false, message: data.message };
    //             }
    //         }).catch(err => {
    //             console.log("TODO", err);
    //         });
    //     } catch(error) {
    //         return Promise.resolve({ success: false, message: error.message });
    //     }
    // }

    // register(params) {
    //     try {
    //         const validator = new Validator();
    //         validator.validateRegisterInformation(params);
    //         const rest = new Request();
    //         return rest.postFetch(`${this.apiURI}/api/v1/users/register`, params)
    //             .then(response => {
    //                 if (response.success) {
    //                     return {success: true, data: response.data.data};
    //                 } else {
    //                     return { success: false, message: response.message.error.message };
    //                 }
    //             }).catch(err => {
    //                 return { success: false, message: err.message.error.message };
    //                 // return { success: false, message: response.error.message };
    //             });
    //     } catch (error) {
    //         return Promise.resolve({ success: false, message: error.message });
    //     }
    // }
}

export {
    User,
    NullUser,
    ClientUser
};
