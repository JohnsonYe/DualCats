import React, {useState} from 'react';
import '../../css/catImage.css';

const CatImage = ({image, onDelete})=>{
  const [backDrop, showbackDrop] = useState(false);

  return(
    <div className='imageWrap'
         onMouseEnter={()=>showbackDrop(true)}
         onMouseLeave={()=>showbackDrop(false)}>
      <img src={(image.sources) ? image.sources : `data:image/png;base64, ${image.rawData}`} />
      <div className={`imageWrap-backdrop ${backDrop?'show':'hide'}`}>
        <p className='image-title'>{image.name}</p>
        <button className='image-del-btn' onClick={()=>onDelete(image.key)}>Delete</button>
      </div>
    </div>
  );
}

export default CatImage;