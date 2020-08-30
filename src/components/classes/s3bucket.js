import axios from 'axios';
import aws from 'aws-sdk';


class S3Bucket {
    constructor () {
        this.getRawImageDataFromBucket = this.getRawImageDataFromBucket.bind(this);
        this.uploadFormDataToBucket    = this.uploadFormDataToBucket.bind(this);
        this.apiURI = process.env.API_URI;
        this.s3 = new aws.S3();
    }
    
    getObject(folderName = 'dualcats') {
        try {
            const response = this.s3.listObjectsV2({
                Bucket: BUCKET_NAME,
                Prefix: folderName
            }).promise();
            return response;
        } catch (err) {
            throw new Error("Fail to get data from S3 bucket.", err);
        }
    }

    getRawImageDataFromBucket() {
        return fetch(`${this.apiURI}/api/v1/getImageRawData`)
            .then(response => response.json())
            .then((data) => {
                return data.rawData;
            })
    }

    deleteObject(key) {
        return fetch(`${this.apiURI}/api/v1/deleteFileFromBucket/${key}`, {method: 'delete'})
                .then(response => 
                    response.json().then(json => {
                        return json;
                    }))
    }

    uploadFormDataToBucket(formData) {
        const config = { headers: { 'content-type': 'multipart/form-data' } };
        return axios.post(`${this.apiURI}/api/v1/uploadFileTobucket`, formData, config)
            .then((data) => {
                return data.data.response;
            }).catch((error) => {
                console.log("Fail to upload,", error);
            });
    }
}

export default S3Bucket;