import React, { Component } from 'react';
import S3Bucket from './../classes/s3bucket';
import './../../css/catsGallery.css';
import profilePic from './../../images/milky.png';
import Uploader from './uploadImage';
import CatImage from './catImage';

class CatsGallery extends Component {
  constructor (props) {
    super(props);
    this.bucket = new S3Bucket();
    this.onDeleteImageListener = this.onDeleteImageListener.bind(this);
    this.onFormSubmitHandler = this.onFormSubmitHandler.bind(this);
    this.onChangeSelectedFile = this.onChangeSelectedFile.bind(this);
    this.horizontalScroll = this.horizontalScroll.bind(this);
    this.scrollRef = React.createRef();
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
        uploadedImage: "",
        uploadBtn: false
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
        });

        this.scrollRef.current.addEventListener('mousewheel',this.horizontalScroll,{passive:false});
  }

  componentWillUnmount() {
    this.scrollRef.current.removeEventListener('mousewheel',this.horizontalScroll);
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
        this.setState({uploadBtn: true});
    } else {
        this.setState({uploadBtn: false});
    }
    
  }

  horizontalScroll(e){
    e = e || window.event;
    e.preventDefault();
    var tab = this.scrollRef.current;
    var leftPosition = this.scrollRef.current.scrollLeft;
    tab.scrollTo({
        left: leftPosition + e.deltaY*20,
        behavior: "smooth"
    });
  }

  render() {
    let catBreadList = this.catBreedsCategory.map((name, index) => (
        <a key={index} className="catBreed">
            <img src={profilePic}></img>
            <span>{name}</span>
        </a>
    ));
    
    let catImage = (!this.state.isProcessImageSuccess)
                    ? (<div>404 Not Found</div>) /** finish the no image page */
                    : this.state.imageData.map((image, index) => (
                        // <div className="thumbnail-image" key={index} item-key={image.key}>
                        //     <img src={(image.sources) ? image.sources : `data:image/png;base64, ${image.rawData}`}></img>
                        //     <p>{image.name}</p>
                        //     <button onClick={ () => this.onDeleteImageListener(image.key) }>Delete</button>
                        // </div>
                        <CatImage key={index} image={image} onDelete={this.onDeleteImageListener} />
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
            <div className="tablist" ref={this.scrollRef}>
                {catBreadList}
            </div>

            {/* Cat Image Section */}
            
            <div className="image-section">
                {catImage}
            </div>
            
            {/* <form className="upload-form" onSubmit={this.onFormSubmitHandler}>
                <input type="file" id="file" name="file" className="upload-input" accept="image/*" onChange= {this.onChangeSelectedFile} />
                <label htmlFor="file" className="upload-label">{labelName}</label>
                <button type="submit">Upload</button>
            </form> */}
            <Uploader showBtn={this.state.uploadBtn} file={this.state.selectedFile} handleUpload={this.onChangeSelectedFile} handleSubmit={this.onFormSubmitHandler} />
        </div>
    );
  }
}

export default CatsGallery;