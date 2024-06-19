import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "./Slideshow.css";

import img1 from '../../assets/images/slide-main.png';
import img2 from '../../assets/images/slide2.jpg';
import img3 from '../../assets/images/slide-main.png';

const images = [img1, img2, img3];

function Slideshow() {
  return (
    <div className="box">
      <Carousel
        useKeyboardArrows={true}
        interval={1000} 
        transitionTime={500} 
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={image} />
           {/*<div className='content-clider'>
                <h1>Возьмите небо под свой контроль: изучите основы управления дроном</h1>
                <p>Овладейте искусством управления дроном и откройте для себя новые возможности</p>
                <Link to="https://р19.навигатор.дети/program/8216-yunyi-operator-bpla-letnyaya-smena" className='container-profil'><div >Войти</div></Link>
            </div>*/}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Slideshow;