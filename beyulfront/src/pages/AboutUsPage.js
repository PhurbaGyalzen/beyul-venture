// All dependences import
import { Container, makeStyles, Link } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { blue, grey } from '@material-ui/core/colors'
import { Button } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';


// All image import
import aboutUs from 'img/another.svg'
import history from 'img/history.svg'

import globe_1 from 'img/globe.png'
import location from 'img/map.jpg'
import price_1 from 'img/last1.png'
import service from 'img/service.png'
import save_1 from 'img/savePayment.png'

// icons
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PaymentIcon from '@material-ui/icons/Payment'

//Defining CustomStyles for AboutUs Page
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: '2rem',
        marginBottom: '1rem',
        backgroundColor:"#694311",
        color:"#ffffff",
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:"#DF9534",
            color:"#13181e"
        },
    },

    aboutUsImg: {
        width: '100%',
        height: '100%',
    },

    whyWithUsTitle: {
        padding: '2.5rem 0 0rem',
        marginTop:"2rem",
        fontSize:"2rem",
        lineHeight:"4rem",
        fontWeight:"bold",
        color:"#694311"
    },

    aboutUs: {
        marginBottom: '1rem',
        color:"#694311",
        fontSize:"1rem",
        fontWeight:"bold"
    },

    card: {
        height: '18.9rem',
        margin: '3%',
        '&:hover': {
            backgroundColor: "#EDEEF0",
            cursor: 'pointer',
            color: "#13181e",
        },
    },

    paragraph:{
        fontSize:"1rem",
        lineHeight:"2rem"
    },

    cardHeading:{
        color:"#694311",
        fontWeight:"bold",
        paddingTop:"1.5rem"
    }
}))

// Card Information
export default function AboutUsPage() {
    const classes = useStyles()
    return (
        <>
            <div  style={{ color:"#13181e", paddingTop:"2rem"}}>
                    {/* First row */}
                <Box maxWidth='100%' ml={5} pt={10} mb={3}>
                    <Grid
                        container
                        spacing={3}
                        item
                        style={{ padding: ' 0 1.6rem 0 1.6rem ' }}
                    >
                        <Grid item xs={12} md={6} sm={6} ml={5}>
                            <Typography
                                variant='h5'
                                className={classes.aboutUs}
                            >
                                About Us
                            </Typography>
                            <Typography component='p' align='justify' className={classes.paragraph}>
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, scrambled it to make a
                                type specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem
                                Ipsum. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, scrambled it to
                                make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages.
                            </Typography>
                            <Button
                                variant='contained'
                                className={classes.button}
                            >
                                Readmore
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6} sm={6}>
                            <img src={aboutUs} className={classes.aboutUsImg} />
                        </Grid>
                        <Hidden only="xs">
                            <Grid item xs={12} md={6} sm={6} ml={5}>
                                <img src={history} className={classes.aboutUsImg} />
                            </Grid>
                        </Hidden>
                        

                        <Grid item xs={12} md={6} sm={6}>
                            <Typography
                                variant='h5'
                                color='primary'
                                className={classes.aboutUs}
                            >
                                Our History
                            </Typography>
                            <Typography component='p' align='justify' className={classes.paragraph}>
                                Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, scrambled it to make a
                                type specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem
                                Ipsum. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, scrambled it to
                                make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. 
                            </Typography>
                            <Button
                                variant='contained'
                                className={classes.button}
                            >
                                Readmore
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* Second row */}

                <Box>
                    <Grid
                        container
                        style={{
                            backgroundColor: '#FCFCFC',
                            padding: '0 2rem 3rem 2rem',
                        }}
                        className={classes.whyWithUs}
                    >
                        <Grid item xs={12} md={12} sm={12}>
                            <Typography
                                variant='h5'
                                color='#694311'
                                align='center'
                                className={classes.whyWithUsTitle}
                                gutterBottom
                            >
                                Why book with us?
                            </Typography>
                        </Grid>

                        {/* First Card */}
                        <Grid item xs={12} md={3} sm={6}>
                            <Card className={classes.card} align='center' sm={12}>
                                <CardMedia
                                    image={globe_1}
                                    style={{ height: '6rem', width: '6rem' }}
                                />

                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography
                                        variant='h6'
                                        color='#694311'
                                        gutterBottom
                                        className={classes.cardHeading}
                                    >
                                        Global Reach
                                    </Typography>
                                    <Typography
                                        style={{ fontSize: '14px' }}
                                        gutterBottom
                                    >
                                        No matter where in the world you want to
                                        go, Beyul.com has everything you need. From
                                        flights and hotels to car rental and
                                        tickets to local attractions, our extensive
                                        network connects all corners of the globe
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Second Card */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card} align='center'>
                                <CardMedia
                                    image={price_1}
                                    style={{
                                        margin: '1.1rem 0 1.3rem',
                                        height: '3.5rem',
                                        width: '4.3rem',
                                    }}
                                />
                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography
                                        variant='h6'
                                        color='#694311'
                                        gutterBottom
                                        className={classes.cardHeading}
                                    >
                                        Compitative prices
                                    </Typography>
                                    <Typography
                                        style={{ fontSize: '14px' }}
                                        gutterBottom
                                    >
                                        Beyul.com has over 400 hundreds members,
                                        which allows it to offer competitive prices
                                        - so you can save more on your travels
                                        every day. Sign up for even bigger
                                        discounts!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Third Card */}

                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card} align='center'>
                                <CardMedia
                                    image={service}
                                    style={{
                                        margin: '0.6rem 0 0.7rem',
                                        height: '4.5rem',
                                        width: '6rem',
                                    }}
                                />

                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography
                                        variant='h6'
                                        color='#694311'
                                        className={classes.cardHeading}
                                        gutterBottom

                                    >
                                        Excellent service
                                    </Typography>
                                    <Typography
                                        style={{ fontSize: '14px' }}
                                        gutterBottom
                                    >
                                        With Beyul.com, you always travel
                                        worry-free, knowing you can count on us
                                        when needed. Our customer service team
                                        speaks multiple languages. Customer service
                                        in English is available 24/7 by phone,
                                        e-mail and directly via our mobile app.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Fourth Card */}

                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card} align='center'>
                                <CardMedia
                                    image={save_1}
                                    style={{
                                        margin: '0.8rem 0 0.9rem',
                                        height: '4rem',
                                        width: '4rem',
                                    }}
                                />

                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography variant='h6' color="#694311" className={classes.cardHeading}>
                                        Save Payment
                                    </Typography>
                                    <Typography
                                        style={{ fontSize: '14px' }}
                                        gutterBottom
                                    >
                                        No matter where in the world you want to
                                        go, Beyul.com has everything you need. From
                                        flights and hotels to car rental and
                                        tickets to local attractions, our extensive
                                        network connects all corners of the globe
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            

        
        </>
    )
}
