import React from 'react';
import '../../css/uploadimage.css';

const Uploader = ({showBtn, file, handleUpload, handleSubmit}) => {
  let labelName = file?file.name:"Upload an Image";

  return(
    <form className="upload-form" onSubmit={handleSubmit}>
        <input type="file" id="file" name="file" className="upload-input" accept="image/*" onChange= {handleUpload} />
        <label htmlFor="file" className="upload-label">{labelName}</label>
        <button type="submit" className={showBtn?"display":""}>Upload</button>
    </form>
  );
}

export default Uploader;