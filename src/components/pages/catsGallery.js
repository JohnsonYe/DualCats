import React, { Component } from 'react';
import S3Bucket from './../classes/s3bucket';
import './../../css/catsGallery.css';
import profilePic from './../../images/milky.png';

class CatsGallery extends Component {
  constructor (props) {
    super(props);
    this.bucket = new S3Bucket();
    this.onDeleteImageListener = this.onDeleteImageListener.bind(this);
    this.onFormSubmitHandler = this.onFormSubmitHandler.bind(this);
    this.onChangeSelectedFile = this.onChangeSelectedFile.bind(this);
    this.catBreedsCategory = [
        "Abyssinian",
        "Aegean",
        "American Bobtail",
        "American Curl",
        "American Ringtail",
        "American Shorthair",
        "American Wirehair",
        "Arabian Mau",
        "Asian",
        "Asian Semi-longhair",
        "Australian Mist"
    ];
    this.state = {
        isProcessImageSuccess: true,
        imageData: [],
        selectedFile: null,
        isDelete: false,
        uploadedImage: ""
    };
  }

  componentDidMount() {
      this.bucket.getRawImage()
        .then((rawData) => {
            console.log(rawData);
            let imageList = [];
            for (var item of rawData) {
                imageList.push({
                    name: (item.key).split(".")[0],
                    key: item.key,
                    rawData: item.rawData
                });
            }
            this.setState({isProcessImageSuccess: true, imageData: imageList});
        }).catch((err) => {
            this.setState({isProcessImageSuccess: false});
        })
  }

  onDeleteImageListener = (key) => {
    this.bucket.deleteObject(key).then(()=>{
        let updateImageList = this.state.imageData.reduce((newAarray, current) => {             
            if (current.key !== key) newAarray.push(current);
            return newAarray;
          }, []);
        this.setState({imageData: updateImageList});
    }).catch((err) => {
        /** @todo error handler */
    })
  }

  onFormSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    this.bucket.uploadFile(formData).then((data)=>{
        console.log("got key", data);
        let update = this.state.imageData;
        let newImage = {
            name: (data.key).split(".")[0],
            key: data.key,
            sources: this.state.uploadedImage
        }
        update.push(newImage);
        this.setState({imageData: update});
    }).catch((err) =>{
        /** @todo Handle form submit error*/
        console.error(err);
    });
  }

  onChangeSelectedFile(event) {
    this.setState({selectedFile: event.target.files[0]});
    if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({uploadedImage: e.target.result});
        };
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  render() {
    let catBreadList = this.catBreedsCategory.map((name, index) => (
        <div className="catBreeds" key={index}>
            <a>
                <img src={profilePic}></img>
                <span>{name}</span>
            </a>
        </div>
    ));
    
    let catImage = (!this.state.isProcessImageSuccess)
                    ? (<div>404 Not Found</div>) /** finish the no image page */
                    : this.state.imageData.map((image, index) => (
                        <div className="thumbnail-image" key={index} item-key={image.key}>
                            <img src={(image.sources) ? image.sources : `data:image/png;base64, ${image.rawData}`}></img>
                            <p>{image.name}</p>
                            <button onClick={ () => this.onDeleteImageListener(image.key) }>Delete</button>
                        </div>
                    ));

    return (
        <div id="gallery-section">
            {/* {this.processRawImageData()} */}
            {/* <div className="search-section">
                <div className="search-bar">
                    <input name="catsSearch" title="Search" type="text" placeholder="Search for cat breeds..."></input>
                </div>
            </div> */}

            {/* Cat bread tap list section */}
            <div className="tablist">
                {catBreadList}
            </div>

            {/* Cat Image Section */}
            
            <div className="image-section">
                {catImage}
            </div>
            
            <div>
                <form onSubmit={this.onFormSubmitHandler}>
                    <input type="file" name="file" onChange= {this.onChangeSelectedFile} />
                    <button type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
  }
}

export default CatsGallery;