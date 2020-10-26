import React from 'react';
import CatImage from '../component/catImage';
import '../../css/catsGallery1.css';

const catsGallery = ({}) => {

  const data = {
    sources: '/src/images/milky.png',
    name: 'Milky'
  };

  let catImage = [0,1,2,3,4].map((ele,i)=>{
    return <CatImage key={i} image={data} />
  });

  return (
    <div id="gallery-section" className="mainContent-padding">
      <input type='text' id='gallery-search' placeholder='Search'/>
      <main className="image-section">
        {catImage}
      </main>
    </div>
  )
}

export default catsGallery;