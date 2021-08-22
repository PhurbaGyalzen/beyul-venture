import { useState, useEffect } from 'react'
import { Box, Typography, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useParams,
    useRouteMatch,
} from 'react-router-dom'
import Place from 'components/Place'
import Package from 'components/Package'
import CarouselResponsive from './CarouselResponsive'
import Parliament from 'components/Owls'
import PackageDetail from 'pages/package-detail/PackageDetail'
import InstagramWidget from 'components/InstaWidget'
import { fetchPosts } from 'utils/instagram'
import trek from 'img/trek_1.png'
import pck from 'img/pck_1.webp'

const useStyles = makeStyles((theme) => ({
    subHeading: {
        paddingTop:"2rem",
        paddingBottom:"1rem",
    },
    spacious: {
        margin: '2rem auto',
    },
}))

const MaxViewPortHeightWrapper = (props) => (
    <div style={{ maxHeight: '100vh' }}>{props.children}</div>
)

const HomePage = () => {
    const [instaPosts, setInstaPosts] = useState(null)
    useEffect(() => {
        if (!instaPosts) {
            fetcher()
        }
    }, [])
    const fetcher = async () => {
        const posts = await fetchPosts('nepal.nature')
        setInstaPosts(posts)
    }
    const [packageData, setpackageData] = useState([
        {
            id: 1,
            title: 'Annapurna Trek',
            image: '/static/images/annapurna.jpg',
            duration: '18 Days',
            rating: 3.5,
            description:
                'Trek through the incredible Annapurna region and be awed by the Nepalese Himalayas. These snow-capped peaks, mist-shrouded valleys, isolated communities and remote monasteries will inspire those with a bold spirit and a yearning for a definitive nature experience. Reach altitudes of more than 5000 metres, discover the ancestral traditions of the local people and immerse yourself completely in the spectacular mountain wilderness of the Annapurna Circuit. This is a challenging trip, but the sense of accomplishment will leave even the most seasoned trekker with some unforgettable memories.',
            price: 15000,
        },
        {
            id: 2,
            title: 'Pokhara Tour',
            image: '/static/images/peacePagoda.jpg',
            duration: '4 Days',
            rating: 4.5,
            description:
                'Pokhara Lekhnath, better known as Pokhara is tucked in the northwestern corner of the Pokhara Valley, Nepal. The city is one such place where tourists can enjoy a truly unique experience with some amazing Pokhara tour packages. Be it discovering the panoramic views over the Himalayan peaks, relaxing on the lakeside, experiencing the charm of this largest city of Nepal, or indulging in boating or paragliding - Pokhara vacation package uplifts the journey for the travelers with a perfect blend of serene atmosphere, famous tourist attractions, and amazing delicacies to enjoy their vacations.',
            price: 10000,
        },
        {
            id: 3,
            title: 'Gokyo Trek',
            image: '/static/images/gokyo.jpg',
            duration: '15 Days',
            rating: 2,
            description:
                'The sparkling, pristine blue and green waters of the Gokyo Lakes are one of Nepal’s most memorable sights. They comprise the highest freshwater lake system in the world, at around 5,000 meters. The Gokyo Lakes trek is ideal for people who want to trek in the Everest region, but who want more variety of views and fewer nights spent at very high altitude.',
            price: 18000,
        },
        {
            id: 4,
            title: 'Manang Trek',
            image: '/static/images/langtang.jpg',
            duration: '10 Days',
            rating: 5,
            description:
                'The sparkling, pristine blue and green waters of the Gokyo Lakes are one of Nepal’s most memorable sights. They comprise the highest freshwater lake system in the world, at around 5,000 meters. The Gokyo Lakes trek is ideal for people who want to trek in the Everest region, but who want more variety of views and fewer nights spent at very high altitude.',
            price: 18000,
        },
        {
            id: 5,
            title: 'Chitwan Safari Package',
            image: '/static/images/chitwan2.jpg',
            duration: '3 Days',
            rating: 4,
            description:
                'They are all around 6/7hours distance of each other (depending on traffic) via the tourist buses which run daily.Most travel offices in Kathmandu or Pokhara will have buses which run to Chitwan and it should cost no more than $8-$15 USD (800-1500 Nepalese rupees) depending on what bus company you choose and if it includes lunch.Blue Sky Travels, Mountain Overland and Greenline were the popular choices and recommended in Lonely Planet.But, there are many companies which go the same route, you’re really just paying for the bus quality. For some reason, all buses seemed to leave at the same time of 7am to the popular tourist destinations in Kathmandu, Pokhara and ChitwanIf you wanted to avoid commission fees you could just turn up at the bus stand and pay on the bus.But, you’re not guaranteed to find a bus with a seat available.Obviously, it’s good to check when and where the buses go from',
            price: 8000,
        },
        {
            id: 6,
            title: 'Illam Package',
            image: '/static/images/illam1.jpg',
            duration: '4days',
            rating: 3,
            description:
                'he name Ilam is derived from the Limbu language in which “Ii” means twisted and “Lam” means road. Ilam was one of the ten self ruling states of Limbuwan before the unification of Nepal, its ruler King Hangshu Phuba Lingdom of Lingdom dynasty ruled Ilam as a confederate state of Limbuwan until 1813 AD. The treaty between the other Limbuwan states and the King of Gorkha (Gorkha-Limbuwan Treaty of 1774 AD) and the conflict of Gorkha and Sikkim led to the unification of Ilam with Gorkha. Ilam was the last of the ten kingdoms of Limbuwan to join the union of Nepal. The King of Gorkha gave the ruler of Ilam full autonomy to rule and the right of Kipat. Ilam was an independent Limbu kingdom until 1813 CE/1869 BS.',
            price: 15000,
        },
    ])

    const [places, setPlaces] = useState([
        {
            id: 1,
            title: 'Annapurna Trekking',
            thumb_src: trek,
        },
        {
            id: 2,
            title: 'Dhaulagiri Trekking',
            thumb_src: trek,
        },
        {
            id: 3,
            title: 'Machapuchhare Trekking',
            thumb_src: trek,
        },
        {
            id: 4,
            title: 'Everest Trekking',
            thumb_src: trek,
        },
    ])

    const [imagesInfo, setImageInfos] = useState([
        {
            position: 1,
            alt: 'Annarpuna',
            src: '/static/images/annapurna.jpg',
            desc: 'Travel with Us',
        },
        {
            position: 2,
            alt: 'Gokyo',
            src: '/static/images/gokyo.jpg',
            desc: 'Let us Help you create memories',
        },
        {
            position: 3,
            alt: 'Peace Pagoda',
            src: '/static/images/peacePagoda.jpg',
            desc: 'An investment in travel is an investment into yourself',
        },
    ])
    const classes = useStyles()

    return (
        <>
            <MaxViewPortHeightWrapper>
                <CarouselResponsive cars={imagesInfo} />
            </MaxViewPortHeightWrapper>
            <Box mt='1rem'>
                <Container>
                    <Typography
                        variant='h3' components="h3"
                        className={classes.subHeading}
                    >
                        Popular Packages
                    </Typography>
                    <Grid container spacing={4} align='center'>
                        {packageData.map((data) => {
                            return <Package key={data.id} data={data} />
                        })}
                    </Grid>
                </Container>
            </Box>
            <Container className={classes.spacious}>
                <div>
                    <Typography
                        variant='h4'
                        className={classes.subHeading}
                        gutterBottom={true}
                    >
                        Recommended Destinations
                    </Typography>
                    <Grid
                        container
                        justifyContent='space-evenly'
                        alignItems='center'
                    >
                        {places.map((place) => {
                            return (
                                <Grid key={place.id} item>
                                    <Place place={place} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </Container>
            <Container>
                <Typography variant='h4' className={classes.subHeading}>Recommended Trekking</Typography>
                <Parliament cars={packageData} itemNo={3}/>
            </Container>

            {/*for insta widget*/}
            {/*<div class='elfsight-app-93f2b927-f005-4b5a-90ac-f40e3c7319f8'></div>*/}

            {instaPosts ? (
                <Container>
                    <Typography variant='h4' className={classes.subHeading}>
                        Our adventures on Instagram.
                    </Typography>
                    <InstagramWidget posts={instaPosts} />
                </Container>
            ) : (
                ''
            )}
        </>
    )
}

export default HomePage
