import React from 'react';
import "./caroussselhome.css"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousselss() {

    


  return (

    <div class='carousselteam'>
    <div class="carousselone">
        
    <MDBCarousel class="caroussel-item">
        <a href='/dirilis'>
      <MDBCarouselItem
        className='w-100d-block'
        itemId={1}
        src='https://res.cloudinary.com/dwtevsy7r/image/upload/v1690942726/dirilis_jxboqc.jpg'
        alt='...'
      />
      </a>
    </MDBCarousel>
    </div>
    <div class="carousseltwo">
    <MDBCarousel class='caroussel-item'>
      <a href='/dirilis'>
      <MDBCarouselItem
        className='w-100d-block'
        itemId={1}
        src='https://res.cloudinary.com/dwtevsy7r/image/upload/v1690942726/dirilis_jxboqc.jpg'
        alt='...'
      />
      </a>
    </MDBCarousel>
    </div>
    </div>
  );
}