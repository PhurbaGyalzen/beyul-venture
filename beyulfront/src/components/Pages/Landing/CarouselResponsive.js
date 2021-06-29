import React from 'react';
import {Carousel} from  'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BrushyText = (props) => {
    let {style, ...attrs} = props
    style = {
        ...style,
        ...{
            fontFamily: 'pioneerbrush',
            bottom: '50%', // cant use top cuz bottom is used by default and never use top and bottom
            backgroundColor: '#ffffff00',
            fontSize: '4rem',
            transform: 'translateY(+50%)'
        }
    }
    return <span {...attrs} style={style} >{props.children}</span>
}

const CarouselWithText = ({imgProps, text}) => {
    const imgStyles = {
        filter:"brightness(50%)",
        maxHeight: '100vh'
    }
    return (
        <>
            <img
                {...imgProps}
                style={imgStyles}
            />
            <BrushyText className="legend">{text}</BrushyText>
        </>
    )
}

const CarouselResponsive = ({cars}) => {
    return (
        
        <Carousel autoplay infiniteLoop showThumbs={false}>
            {cars.map((car) => {
                const imgProps = {
                    alt: car.alt,
                    src: car.src
                }
                return (
                    <div key={car.position}>
                        <CarouselWithText imgProps={imgProps} text={car.desc}/>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default CarouselResponsive;