import React from 'react';
import {Box, Typography, Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Package from './Package'
import CarouselResponsive from './CarouselResponsive';
const useStyles = makeStyles((theme)=>({
    subHeading: {
        fontWeight:"Bold",
        fontFamily:"sans-serif",
        fontSize:"2rem",
    },
}))

const MaxViewPortHeightWrapper = (props) => <div style={{maxHeight: '100vh'}}>{props.children}</div>

const Home = () => {
    const [packageData, setpackageData] = useState(
    [
        {
            id: 1,
            title: "Annapurna Trek",
            image: "/static/images/annapurna.jpg",
            rating: 3.5,
            description: "Trek through the incredible Annapurna region and be awed by the Nepalese Himalayas. These snow-capped peaks, mist-shrouded valleys, isolated communities and remote monasteries will inspire those with a bold spirit and a yearning for a definitive nature experience. Reach altitudes of more than 5000 metres, discover the ancestral traditions of the local people and immerse yourself completely in the spectacular mountain wilderness of the Annapurna Circuit. This is a challenging trip, but the sense of accomplishment will leave even the most seasoned trekker with some unforgettable memories."

        },
        {
            id: 2,
            title: "Pokhara Tour",
            image: "/static/images/peacePagoda.jpg",
            rating: 4.5,
            description: "Pokhara Lekhnath, better known as Pokhara is tucked in the northwestern corner of the Pokhara Valley, Nepal. The city is one such place where tourists can enjoy a truly unique experience with some amazing Pokhara tour packages. Be it discovering the panoramic views over the Himalayan peaks, relaxing on the lakeside, experiencing the charm of this largest city of Nepal, or indulging in boating or paragliding - Pokhara vacation package uplifts the journey for the travelers with a perfect blend of serene atmosphere, famous tourist attractions, and amazing delicacies to enjoy their vacations."
        },
        {
            id: 3,
            title: "Gokyo Trek",
            image: "/static/images/gokyo.jpg",
            rating: 2,
            description: "The sparkling, pristine blue and green waters of the Gokyo Lakes are one of Nepal’s most memorable sights. They comprise the highest freshwater lake system in the world, at around 5,000 meters. The Gokyo Lakes trek is ideal for people who want to trek in the Everest region, but who want more variety of views and fewer nights spent at very high altitude."
        }
    ]);

    const [imagesInfo, setImageInfos] = useState([
        {
            position: 1,
            alt: "Annarpuna",
            src: "/static/images/annapurna.jpg",
            desc: "Travel with Us",
        },
        {
            position: 2,
            alt: "Gokyo",
            src: "/static/images/gokyo.jpg",
            desc: "Let us Help you create memories",
        },
        {
            position: 3,
            alt: "Peace Pagoda",
            src: "/static/images/peacePagoda.jpg",
            desc: "An investment in travel is an investment into yourself",
        },
    ])

    const classes = useStyles()
    return (
        <>
        <MaxViewPortHeightWrapper>
            <CarouselResponsive cars={imagesInfo} />
        </MaxViewPortHeightWrapper>
        <Box mt="5rem">
            <Container>
                <Typography variant="h4" 
                color="textPrimary" 
                className={classes.subHeading}>
                    Popular Packages
                </Typography>
                <Grid container spacing={4} align="center" style={{ flexGrow:1 }}>
                    {packageData.map((data) => <Package key={data.id} data={data} />)}
                </Grid>
                
            </Container>
            
        </Box>
        <div className="elfsight-app-93f2b927-f005-4b5a-90ac-f40e3c7319f8"></div>
        </>
    )
};

export default Home;
