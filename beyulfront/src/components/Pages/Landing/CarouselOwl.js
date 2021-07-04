import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './landingstyle.css'
import trek1 from '../../../assets/img/trek_1.png'
import trek2 from '../../../assets/img/trek_2.png'
import trek3 from '../../../assets/img/trek_3.png'
import trek4 from '../../../assets/img/trek_4.png'

const CarouselOwl = (props) => {
    return (
        <>
        <OwlCarousel className='owl-theme' loop margin={10} nav>
            
            <div className="item owl-img-div">
                <img src={trek1}/>
            </div>
            <div className="item owl-img-div">
                <img src={trek2}/>
            </div>
            <div className="item owl-img-div">
                <img src={trek3}/>
            </div>
            <div className="item owl-img-div">
                <img src={trek4}/>
            </div>
        </OwlCarousel>

        </>
    )
}



export default CarouselOwl
