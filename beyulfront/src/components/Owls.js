import PropTypes from 'prop-types'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import trek1 from 'img/trek_1.png'
import trek2 from 'img/trek_2.png'
import trek3 from 'img/trek_3.png'
import trek4 from 'img/trek_4.png'

const MediumOwl = styled.div``
// height: 15rem;
// width: 15rem;

const FullWidthImage = styled.img`
    width: 15rem;
    height: 15rem;
    max-height: auto;
    object-fit: contain;
`

const Owl = ({ imgSrc, text }) => {
    return <FullWidthImage src={imgSrc} />
}
// <MediumOwl className='item owl-img-div'>
// </MediumOwl>

// A group of owl is called a Parliament
const Parliament = ({ cars, itemNo }) => {
    return (
        <OwlCarousel
            className='owl-theme'
            loop={true}
            margin={10}
            nav={true}
            autoplay={true}
            autoplayTimeout={2000}
            items={itemNo}
        >
            {cars.map((car) => {
                return <Owl key={car.id} imgSrc={car.image} text={car.title} />
            })}
        </OwlCarousel>
    )
}

Parliament.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.object),
}

export default Parliament
