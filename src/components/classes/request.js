import axios from 'axios';

class Request {
    constructor(jwt) {
        this.jwt = jwt
        this.headers = {'Content-Type': 'application/json'};

        // this.baseURL = process.env.API_URI;
        // this.failedRequests = [];
        // this.client = axios.create({
        //     timeout: 5000,
        //     baseUrl: process.env.API_URI,
        //     header: {'Content-Type': 'application/json'}
        // })

    }

    getFetch(url, params) {
        if (params) {
            const queryString = Object.entries(params).map(param => {
                return `${param[0]}=${param[1]}`
            }).join('&');
            url += `?${queryString}`;
        }
        
        return fetch(`${url}`, {
            method: "GET",
            headers: this.headers
        }).then(res => res.json())
            .catch(err => err);
          
    }

    postFetch(url, body, headers) {
        for (var header in headers) {
            this.headers[header] = headers[header];
        }
        return axios.post(url, body, headers)
            .then(response => {
                return handleSuccessResponse(response);
            }).catch(error => {
                return handleErrorResponse(error.response);
            });
    }
}

const handleSuccessResponse = (response) => {
    return {
        success: true,
        status: response.status,
        data: response.data
    }
}

const handleErrorResponse = (response) => {
    return {
        success: false,
        status: response.status,
        message: response.data
    }
}

export default Request