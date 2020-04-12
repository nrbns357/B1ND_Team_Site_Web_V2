import React from 'react';
import './ImageSlide.scss';
import image1 from 'assets/images/이미지1.jpg';
import image2 from 'assets/images/권용빈.png';
import {Fade} from "react-slideshow-image";
 
const slideImages = [
  image1,
  image2,
  image1
];

const fadeProperties = {
  duration: 7000,
  transitionDuration: 700,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const ImageSlide = () => {
  return(
    <div className="ImageSlide">
      <Fade {...fadeProperties}>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
            <div className="ImageSlide__slide-img-1">
              <img src ={slideImages[0]} className ="ImageSlide__slide-img-1-1" alt ="slideimage" />
            </div>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
          <div className="ImageSlide__slide-img-2">
              <img src ={slideImages[1]} className ="ImageSlide__slide-img-2-2" alt ="slideimage" />
            </div>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
          <div className="ImageSlide__slide-img-3">
              <img src ={slideImages[2]} className ="ImageSlide__slide-img-3-3" alt ="slideimage" />
            </div>
          </span>
        </div>
        <div className="ImageSlide__slide" >
          <span className="ImageSlide__slide-img">
          <div className="ImageSlide__slide-img-4">
              <img src ={slideImages[1]} className ="ImageSlide__slide-img-4-4" alt ="slideimage" />
            </div>
          </span>
        </div>
      </Fade>
    </div>
  );
}

export default ImageSlide;