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
import Hidden from '@material-ui/core/Hidden'

// All image import
import aboutUs from 'img/another.svg'
import history from 'img/history.svg'

import globe_1 from 'img/globe.png'
import location from 'img/map.jpg'
import price_1 from 'img/last1.png'
import service from 'img/service.png'
import save_1 from 'img/savePayment.png'

//Defining CustomStyles for AboutUs Page
const useStyles = makeStyles((theme) => ({
    button: {
        marginBottom: '1rem',
        textDecoration: 'underline',
        letterSpacing: '0.1rem',
        fontSize: '14px',
        lineHeight: '24px',
        color:'#cdcdcd',

        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#DF9534',
            color: '#694311',
        },
    },

    aboutUsImg: {
        width: '100%',
        height: '100%',
    },

    whyWithUsTitle: {
        padding: '2.5rem 0 0rem',
        marginTop: '2rem',
        fontSize: '2rem',
        lineHeight: '4rem',
        fontWeight: 'bold',
    },

    aboutUs: {
        marginBottom: '1rem',
    },

    card: {
        height: '18.9rem',
        margin: '3%',
        '&:hover': {
            cursor: 'pointer',
            color: '#13181e',
        },
    },

    paragraph: {
        fontSize: '1rem',
        lineHeight: '1.685rem',
    },

    cardHeading: {
        fontWeight: 'bold',
        paddingTop: '1.5rem',
    },
}))

// Card Information
export default function AboutUsPage() {
    const classes = useStyles()
    return (
        <>
            <div
                style={{
                    color: '#13181e',
                    paddingTop: '2rem',
                    backgroundColor: '#edeef0',
                }}
                style={{ width: '100%' }}
            >
                {/* First row */}
                <Box
                    style={{ maxWidth: '100%', overflow: 'hidden' }}
                    pt={15}
                    mb={3}
                >
                    <Grid
                        container
                        spacing={3}
                        item
                        style={{ padding: ' 0 2rem 0 2rem ' }}
                    >
                        <Grid item xs={12} md={6} sm={6}>
                            <Typography
                                variant='body1'
                                className={classes.aboutUs}
                            >
                                About Us
                            </Typography>
                            <Typography
                                component='p'
                                align='justify'
                                variant='body2'
                            >
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum. Lorem Ipsum
                                has been the industry's standard dummy text
                                ever since the 1500s, scrambled it to make a
                                type specimen book. It has survived not only
                                five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem
                                Ipsum passages.
                            </Typography>
                            <Button className={classes.button}                                     style={{color:"#cdcdcd"}}
>
                                Readmore
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6} sm={6} mt={{ xs: '3rem' }}>
                            <img
                                src={aboutUs}
                                className={classes.aboutUsImg}
                            />
                        </Grid>
                        <Hidden only='xs'>
                            <Grid item xs={12} md={6} sm={6} ml={5}>
                                <img
                                    src={history}
                                    className={classes.aboutUsImg}
                                />
                            </Grid>
                        </Hidden>

                        <Grid item xs={12} md={6} sm={6}>
                            <Typography
                                variant='body1'
                                className={classes.aboutUs}
                            >
                                Our History
                            </Typography>
                            <Typography
                                component='p'
                                variant='body2'
                                align='justify'
                            >
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, scrambled it
                                to make a type specimen book. It has survived
                                not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum. Lorem Ipsum
                                has been the industry's standard dummy text
                                ever since the 1500s, scrambled it to make a
                                type specimen book. It has survived not only
                                five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged.
                            </Typography>
                            <Button className={classes.button} >
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
                            padding: '0 2rem 3rem 2rem',
                        }}
                        className={classes.whyWithUs}
                    >
                        <Grid item xs={12} md={12} sm={12}>
                            <Typography
                                variant='h5'
                                align='center'
                                className={classes.whyWithUsTitle}
                                gutterBottom
                            >
                                Why book with us?
                            </Typography>
                        </Grid>

                        {/* First Card */}
                        <Grid item xs={12} md={3} sm={6}>
                            <Card
                                className={classes.card}
                                align='center'
                                sm={12}
                            >
                                <CardMedia
                                    image={globe_1}
                                    style={{ height: '6rem', width: '6rem' }}
                                />

                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography
                                        variant='body1'
                                        gutterBottom
                                        className={classes.cardHeading}
                                    >
                                        Global Reach
                                    </Typography>
                                    <Typography variant='body2' gutterBottom>
                                        No matter where in the world you want
                                        to go, Beyul.com has everything you
                                        need. From flights and hotels to car
                                        rental and tickets to local
                                        attractions, our extensive network
                                        connects all corners of the globe
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
                                        variant='body1'
                                        gutterBottom
                                        className={classes.cardHeading}
                                    >
                                        Compitative prices
                                    </Typography>
                                    <Typography variant='body2' gutterBottom>
                                        Beyul.com has over 400 hundreds
                                        members, which allows it to offer
                                        competitive prices - so you can save
                                        more on your travels every day. Sign up
                                        for even bigger discounts!
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
                                        variant='body1'
                                        className={classes.cardHeading}
                                        gutterBottom
                                    >
                                        Excellent service
                                    </Typography>
                                    <Typography variant='body2' gutterBottom>
                                        Our customer service team speaks
                                        multiple languages. Customer service in
                                        English is available 24/7 by phone,
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
                                    <Typography
                                        variant='body1'
                                        className={classes.cardHeading}
                                    >
                                        Save Payment
                                    </Typography>
                                    <Typography variant='body2' gutterBottom>
                                        No matter where in the world you want
                                        to go, Beyul.com has everything you
                                        need. From flights and hotels to car
                                        rental and tickets to local
                                        attractions, our extensive network
                                        connects all corners of the globe
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
