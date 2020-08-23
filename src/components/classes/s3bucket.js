// import React, { Component } from 'react';
import axios, { post } from 'axios';

class S3Bucket {
    constructor () {
        this.getRawImageDataFromBucket = this.getRawImageDataFromBucket.bind(this);
        this.uploadFormDataToBucket    = this.uploadFormDataToBucket.bind(this);
        this.apiURL = process.env.REACT_APP_AWS_API_URL || "http://localhost:8084";
    }
    
    getRawImageDataFromBucket() {
        console.log(process.env.REACT_APP_AWS_API_URL);
        return fetch(`${this.apiURL}/api/v1/getImageRawData`)
            .then(response => response.json())
            .then((data) => {
                return data.rawData;
            })
    }

    deleteObject(key) {
        return fetch(`${this.apiURL}/api/v1/deleteFileFromBucket/${key}`, {method: 'delete'})
                .then(response => 
                    response.json().then(json => {
                        return json;
                    }))
    }

    uploadFormDataToBucket(formData) {
        // return axios.post("http://localhost:8084/api/v1/uploadFileTobucket", file, { // receive two parameter endpoint url ,form data 
        // }).then(res => { // then print response status
        //     console.log(res.statusText)
        // })
        const config = { headers: { 'content-type': 'multipart/form-data' } };
        return axios.post(`${this.apiURL}/api/v1/uploadFileTobucket`, formData, config)
            .then((data) => {
                return data.data.response;
            }).catch((error) => {
                console.log("Fail to upload,", error);
            });
    }
}

export default S3Bucket;