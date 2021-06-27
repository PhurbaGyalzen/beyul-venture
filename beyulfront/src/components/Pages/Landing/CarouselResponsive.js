import React from 'react';
import {Carousel} from  'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselResponsive = (props) => {
    return (
        <Carousel autoplay infiniteLoop showThumbs={false}>
            <div>
                <img alt="Annarpuna" src="/static/images/annapurna.jpg" style={{filter:"brightness(50%)"}}/>
                <p className="legend">Travel with Us</p>
            </div>
            <div>
                <img alt="Gokyo" src="/static/images/gokyo.jpg" style={{filter:"brightness(50%)"}} />
                <p className="legend">Let us Help you create memories</p>
            </div>
            <div>
                <img alt="Peace Pagoda" src="/static/images/peacePagoda.jpg"style={{filter:"brightness(50%)"}}  />
                <p className="legend">The GOAT</p>
            </div>
        </Carousel>
    )
}



export default CarouselResponsive;

