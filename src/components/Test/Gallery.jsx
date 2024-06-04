import React, { useState } from 'react'
import '../../styles/gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../../assets/gallery/about-us.png';
import Img2 from '../../assets/gallery/branding.jpg';
import Img3 from '../../assets/gallery/hero-img1.png';
import Img4 from '../../assets/gallery/aboutus1.jpg';
import Img5 from '../../assets/gallery/web-development.jpg';
import Img6 from '../../assets/gallery/kids-learning.jpg';

const Gallery = () => {

    let data = [
        {
            id:1,
            imgSrc:Img1
        },

        {
            id:2,
            imgSrc:Img2
        },

        {
            id:3,
            imgSrc:Img3
        },
        {
            id:4,
            imgSrc:Img4
        },

        {
            id:5,
            imgSrc:Img5
        },

        {
            id:6,
            imgSrc:Img6
        }

    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc,setTempImgSrc] = useState('');
const getImg = (imgSrc) => {
setTempImgSrc(imgSrc);
setModel(true);
}
  return (
    <>
    <br/>
    <h1 style = {{textAlign: 'center'}}>Image Gallery</h1>
    <div className={model? "model open" : "model"}>
        <img src={tempimgSrc}/>
<CloseIcon onClick={() => setModel(false)}/>
    </div>
    <div className='gallery'>
{data.map((item, index)=>{
    return(
        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
<img src={item.imgSrc} style={{width:'100%'}}/>
        </div>
    )
})}
    
     
     </div>
    </>
   
  )
}

export default Gallery
