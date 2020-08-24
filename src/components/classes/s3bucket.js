import axios from 'axios';

class S3Bucket {
    constructor () {
        this.getRawImageDataFromBucket = this.getRawImageDataFromBucket.bind(this);
        this.uploadFormDataToBucket    = this.uploadFormDataToBucket.bind(this);
        this.apiURL = "https://ec2-18-144-165-120.us-west-1.compute.amazonaws.com"
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