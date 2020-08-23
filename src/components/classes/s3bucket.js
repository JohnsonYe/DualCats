// import React, { Component } from 'react';
import axios, { post } from 'axios';

class S3Bucket {
    constructor () {
        // this.state = {
        //     imageRawData: []
        // };
        this.getRawImageDataFromBucket = this.getRawImageDataFromBucket.bind(this);
        this.uploadFormDataToBucket    = this.uploadFormDataToBucket.bind(this);
    }
    
    getRawImageDataFromBucket() {
        return fetch("http://localhost:8084/api/v1/getImageRawData")
            .then(response => response.json())
            .then((data) => {
                return data.rawData;
            })
    }

    deleteObject(key) {
        return fetch(`http://localhost:8084/api/v1/deleteFileFromBucket/${key}`, {method: 'delete'})
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
        return axios.post("http://localhost:8084/api/v1/uploadFileTobucket", formData, config)
            .then((data) => {
                return data.data.response;
            }).catch((error) => {
                console.log("Fail to upload,", error);
            });
    }
}

export default S3Bucket;