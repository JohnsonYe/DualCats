import aws from 'aws-sdk';
import Request from './request.js';

class S3Bucket {
    constructor () {
        this.getRawImage = this.getRawImage.bind(this);
        this.uploadFile    = this.uploadFile.bind(this);
        this.apiURI = process.env.API_URI;
        this.s3 = new aws.S3();
    }
    
    getRawImage() {
        const rest = new Request();
        return rest.getFetch(`${this.apiURI}/api/v1/images/loadImages`)
            .then(data => data.rawData)
            .catch(err => console.log(err));
    }

    deleteObject(key) {
        return fetch(`${this.apiURI}/api/v1/images/deleteFile/${key}`, {method: 'delete'})
                .then(response => 
                    response.json().then(json => {
                        return json;
                    }))
    }

    uploadFile(formData) {
        const rest = new Request();
        const headers = { headers: { 'content-type': 'multipart/form-data' } };
        return rest.postFetch(`${this.apiURI}/api/v1/images/uploadImages`, formData, headers)
                .then(data => data.data.response)
                .catch(err => console.log("Fail to upload,", err));
    }
}

export default S3Bucket;