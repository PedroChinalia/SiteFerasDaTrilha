import React from 'react';
import Slider from 'infinite-react-carousel';

import foto2 from '../../assets/images/carrossel1.jpg'
import foto3 from '../../assets/images/carrossel4.jpg'
import foto1 from '../../assets/images/carrossel2.jpg'

import './style.css';

const SimpleSlider = () => (
  <Slider 
    dots
    autoplay={true}
    autoplaySpeed={5000}
    arrows={false} 
    rows={1}
    duration={5}

    className="slider"
  >

    <div >
        <img className="img"  src={foto1}/>  
    </div>

    <div >
        <img  className="img"  src={foto2}/>
    </div>
    
    <div >
        <img  className="img"  src={foto3}/>
    </div>
  </Slider>
);

export default SimpleSlider;    