import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import toast from 'react-hot-toast'
import { getEsewaLink } from 'utils/payment'
import pck from 'img/pck_1.webp'
import WhyBeyulVenture from './WhyBeyulVenture'
import {
    Container,
    Grid,
    Box,
    makeStyles,
    Typography,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import PackageTabs from './PackageTabs'
import TripFacts from './TripFacts'
import PackageForm from './PackageForm'
import { Review } from './Review'
import { StorySection } from './StorySection'


import sunil from 'img/sunil.png';
import nishan from 'img/nishan.jpg';
import phurba from 'img/phurba.jpg';



const packageStyles = makeStyles((theme) => ({
    packageCont: {
        // marginTop:'10rem',
        paddingTop: '3rem',
    },
    ratingDesc:{
        
        color:'#545454',
        verticalAlign: 'middle',
        display: 'inline-flex'
        
    },
    checkList:{
        verticalAlign: 'middle',
        display: 'inline-flex'
    },
    checkIc:{
        fill:'#6bb53f'
    }
}))

const FullWidthImage = styled.img`
    width: 100%;
    height: 24rem;
`

const PaymentOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
`

const BlueBtn = styled('a')`
    background-color: #36c9f8;
    color: white;
    font-size: 1.2rem;
    /*width: 100%;*/
    max-width: 15rem;
    border-radius: 3px;
    padding: 0.6rem;
    /*flex: 0 1 100%;*/
`

const GreenBtn = styled(BlueBtn)`
    background-color: #2fc32c;
`

const Owl = ({ imgSrc, text }) => {
    return <FullWidthImage src={imgSrc} />
}

export const PackDetail = () => {
    const loc = useLocation()
    const classes = packageStyles()
    useEffect(() => {
        if (loc.search) {
            const paymentQuery = new URLSearchParams(loc.search).get(
                'paymentResp',
            )
            if (paymentQuery === 'success') {
                toast.success('Payment Successful!')
            } else if (paymentQuery === 'fail') {
                toast.error('Payment Failed. Please try again.')
            }
        }
    })

    const [detail, setDetail] = useState({
        id: 1,
        name: '6 Days',
        desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
        rating: 4,
        thumb_src: '/static/images/peacePagoda.jpg',
        type: 'Family',
        durationDays: 6.3,
        images: [
            { id: 1, url: '/static/images/annapurna.jpg' },
            { id: 2, url: '/static/images/annapurna5.jpg' },
            { id: 3, url: '/static/images/annapurna6.jpg' },
            { id: 4, url: '/static/images/annapurna7.jpg' },
            { id: 5, url: '/static/images/gokyo.jpg' },
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
        reviews:[
            {
                userId:1,
                user:'Sunil Tamang',
                rating:5 ,
                review:"Very exciting and wonderful journey  It was exhilarating. We are so glad we did it and want to thank Ganga and Team for their excellent service and care. We enthusiastically recommend Nepal Hiking Team!",
                userImage: sunil,
            },
            {
                userId:2,
                user:'Phurba Gyalzen Sherpa',
                rating:4 ,
                userImage: '',
                review:"I am missing it already i wish i was born in such a beautiful place  It was exhilarating. We are so glad we did it and want to thank Ganga and Team for their excellent service and care. We enthusiastically recommend Nepal Hiking Team!"
            },
            {
                userId:3,
                user:'Nishan Thapa',
                rating:5 ,
                userImage: nishan,
                review:"Je gara jaso gara jata sukai laijau malai tara nepal chodna sakdina ma  It was exhilarating. We are so glad we did it and want to thank Ganga and Team for their excellent service and care. We enthusiastically recommend Nepal Hiking Team!"
            }
        ]
        // routeIds: [66, 32, 34, 40, 129, 32, 66],
    })

    return (
        <>  
            
            <Box pt={'3rem'}>
                <Container className={classes.packageCont}>
                    <Grid
                        container
                        // justifyContent='space-evenly'
                        spacing={4}
                        alignItems='center'
                    >
                        <Grid item xs={12} md={8} sm={6}>
                            <OwlCarousel
                                className='owl-theme'
                                loop={true}
                                margin={10}
                                nav={true}
                                autoplay={true}
                                // autoplayTimeout={2000}
                                items={1}
                                dots={false}
                            >
                                {detail.images.map((car) => {
                                    return (
                                        <Owl key={car.id} imgSrc={car.url} />
                                    )
                                })}
                            </OwlCarousel>
                        </Grid>
                        <Grid item xs={12} md={4} sm={6}>
                            <div>
                                <Typography
                                    variant='h6'
                                    align='left'
                                    gutterBottom
                                >
                                    Annapurna trek
                                </Typography>

                                <Typography className={classes.ratingDesc} variant="body2"> 
                                    {' '}
                                    <Rating
                                        name='read-only'
                                        value={detail.rating}
                                        readOnly
                                    />{' '}
                                    78 ratings
                                </Typography>
                                <Typography className={classes.checkList} variant="body2">
                                    <CheckCircleIcon className={classes.checkIc}/> Experience the mountain
                                </Typography>
                                <Typography className={classes.checkList} variant="body2">
                                    <CheckCircleIcon className={classes.checkIc} /> Enjoy the trails
                                </Typography>
                                <Typography className={classes.checkList} gutterBottom variant="body2"> 
                                    <CheckCircleIcon className={classes.checkIc} /> Visit Ghandruk
                                </Typography>
                                <Typography>
                                    Price{' '}
                                    <span
                                        style={{
                                            fontWeight: '700',
                                            fontSize: '1.8rem',
                                        }}
                                    >
                                        12,000
                                    </span>{' '}
                                </Typography>
                                <PaymentOptions>
                                    <GreenBtn
                                        href={getEsewaLink(
                                            100,
                                            Math.random().toString(),
                                        )}
                                    >
                                        Book this tour
                                    </GreenBtn>
                                    <BlueBtn>
                                        <Link to='/stripe-payment/1'>
                                            Pay with stripe
                                        </Link>
                                    </BlueBtn>
                                </PaymentOptions>
                            </div>
                        </Grid>

                        <Grid item xs={11} md={8} sm={11} lg={8}>
                            <TripFacts />
                        </Grid>
                        

                        <Grid item xs={11} md={4} sm={4} lg={4}>
                            <PackageForm />
                        </Grid>                            

                        <Grid item xs={11} md={8} sm={11}>
                            <PackageTabs imageList={detail.images}/>
                        </Grid>

                        <Grid item xs={11} md={4} sm={4}>
                            <WhyBeyulVenture />
                        </Grid>
                        
                        <Grid item xs={11} md={8} sm={11}>
                            <Review reviewList={detail.reviews} />
                        </Grid>
                        <Grid item xs={11} md={8} sm={11}>
                            <StorySection />
                        </Grid>

                        
                    </Grid>
                </Container>
                
            </Box>
        </>
    )
}
