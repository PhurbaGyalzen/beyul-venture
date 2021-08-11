import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import toast from 'react-hot-toast'
import { getEsewaLink } from 'utils/payment'
import pck from 'img/pck_1.webp'
import { Container,Grid,Box,makeStyles,Typography} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { SRLWrapper } from "simple-react-lightbox";


import { DetailPortion } from './DetailPortion'
import PackageTabs from './PackageTabs'
import TripFacts from './TripFacts'



const packageStyles = makeStyles((theme) => ({
    packageCont:{
        // marginTop:'10rem',
        paddingTop:'3rem'
    }
}))

const FullWidthImage = styled.img`
    width: 100%;
    height: 24rem;
    
`
const Owl = ({ imgSrc, text }) => {
    return <FullWidthImage src={imgSrc} />
}


export const PackDetail = () => {
    const classes = packageStyles()

    const [detail,setDetail] = useState({
        id: 1,
        name: '6 Days',
        desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
        rating: 4,
        thumb_src: '/static/images/peacePagoda.jpg',
        type: 'Family',
        durationDays: 6.3,
        images:[
            {id:1,src:'/static/images/annapurna.jpg'},
            {id:2,src:'/static/images/annapurna5.jpg'},
            {id:3,src:'/static/images/annapurna6.jpg'},
            {id:4,src:'/static/images/annapurna7.jpg'},
            {id:5,src:'/static/images/gokyo.jpg'}
        ],
        route: [
        'kathmandu',
        'pokhara',
        'davis falls',
        'bat cave',
        'cliche arc bridge',
        'pokhara',
        'kathmandu',
        ],
        // routeIds: [66, 32, 34, 40, 129, 32, 66],
    });




    return (
        <>
           <Box pt={"3rem"}>
                <Container className={classes.packageCont}>
                    <Grid container 
                    // justifyContent='space-evenly'
                    spacing={4}
                    alignItems='center'>

                        <Grid item xs={12} md={8} sm={6}>
                            <OwlCarousel
                            className='owl-theme' 
                            loop ={true}
                            margin={10} 
                            nav={true}
                            autoplay={true}
                            // autoplayTimeout={2000}
                            items={1}
                            dots={false}
                            >
                                {detail.images.map((car) => {
                                    return <Owl key={car.id} imgSrc={car.src} />
                                })}

                            </OwlCarousel>
                        </Grid>
                        <Grid item xs={12} md={4} sm={6}>
                            <div>
                                <Typography 
                                variant="h6" 
                                align="left"
                                gutterBottom
                                >Annapurna trek</Typography>
                                
                                <Typography> <Rating name="read-only" value={detail.rating} readOnly /> 78 ratings</Typography>
                                <Typography><CheckCircleIcon /> Experience the mountain</Typography>
                                <Typography><CheckCircleIcon /> Enjoy the trails</Typography>
                                <Typography gutterBottom><CheckCircleIcon /> Visit Ghandruk</Typography>
                                <Typography>Price <span style={{fontWeight:'700',fontSize:'1.8rem'}}>12,000</span> </Typography>
                            </div>
                        </Grid>
                        
                        <Grid item xs={12} md={8} sm={8}>
                            <TripFacts/>
                        </Grid>
                        
                        <Grid item xs={12} md={8} sm={8}>
                            <PackageTabs/>
                        </Grid>

                        

                    </Grid>
                </Container>
                <Container>
                    <SRLWrapper elements={detail.images} />
                </Container>
                <DetailPortion />

            </Box> 

        </>
    )
}
