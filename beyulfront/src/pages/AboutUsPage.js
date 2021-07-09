// All dependences import 
import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { blue, grey} from '@material-ui/core/colors';
import { Button } from '@material-ui/core';

// All image import 
import aboutUs from 'img/aboutUs_2.png'
import globe_1 from 'img/globe.png'
import price_1 from 'img/last1.png'
import service from 'img/service.png'
import save_1 from 'img/savePayment.png'

//Defining CustomStyles for AboutUs Page
const useStyles = makeStyles((theme) => ({
    button:{
        marginTop:"2rem",
        marginBottom:"1rem",
        '&:hover':{
            cursor:'pointer',
            backgroundColor:blue[1000]
        }
    },

    aboutUsImg:{
        width:"100%",
        height:"100%"
    },

    whyWithUsTitle:{
        padding: '2.5rem 0 0rem',
        marginBottom:'2rem'
    },

    aboutUs:{
        marginBottom: '1rem' 
    },

    card:{
        height: '18.9rem',
        margin:"3%",
        '&:hover':{
            backgroundColor:blue[500],
            cursor:'pointer',
            color:grey[50]
        }
    }

}))

// Card Information
export default function AboutUsPage(){
    const classes=useStyles();
    return (
        <>
            {/* First row */}
            <Box maxWidth="100%" ml={5} mt={12} mb={5}>
                <Grid container spacing={3} xs={12} item>
                    <Grid item xs={12} md={6} sm={6} ml={5}>
                        <Typography variant="h5"
                        color="primary"
                        align="start"
                        className={classes.aboutUs}>
                        About Us
                        </Typography>
                        <Typography component="p" align="justify">
                            Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, scrambled it to make a type specimen
                                book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, scrambled it to make a type specimen
                                book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum. It was popularised
                                in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like Aldus
                                PageMaker including versions.
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button}>Readmore</Button>
                    </Grid>

                    <Grid item xs={12} md={6} sm={6}>
                            <img src={aboutUs} className={classes.aboutUsImg}
                            />
                    </Grid>

                </Grid>
            </Box>

            {/* Second row */}

            <Box>
                <Grid container 
                style={{ backgroundColor: '#d1e2f0' }}
                className={classes.whyWithUs}
                xs={12}>

                    <Grid item xs={12} md={12} sm={12}>
                        <Typography
                            variant='h5'
                            color='primary'
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
                                <Typography variant='h6' color='primary' gutterBottom>
                                    Global Reach
                                </Typography>
                                <Typography style={{ fontSize: '14px' }} gutterBottom>
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
                        <Card
                            className={classes.card}
                            align='center'
                        >
                            <CardMedia
                                image={price_1}
                                style={{
                                    margin: '1.1rem 0 1.3rem',
                                    height: '3.5rem',
                                    width: '4.3rem',
                                }}
                            />
                            <CardContent style={{ paddingTop: '0' }}>
                                <Typography variant='h6' color='primary' gutterBottom>
                                    Compitative prices
                                </Typography>
                                <Typography style={{ fontSize: '14px' }} gutterBottom>
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
                        <Card
                            className={classes.card}
                            align='center'
                        >
                            <CardMedia
                                image={service}
                                style={{
                                margin: '0.6rem 0 0.7rem',
                                height: '4.5rem',
                                width: '6rem',
                                }}
                            />

                            <CardContent style={{ paddingTop: '0' }}>
                                <Typography variant='h6' color='primary' gutterBottom>
                                    Excellent service
                                </Typography>
                                <Typography style={{ fontSize: '14px' }} gutterBottom>
                                    With Beyul.com, you always travel
                                    worry-free, knowing you can count on us
                                    when needed. Our customer service team
                                    speaks multiple languages. Customer
                                    service in English is available 24/7 by
                                    phone, e-mail and directly via our
                                    mobile app.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Fourth Card */}

                    <Grid item xs={12} sm={6} md={3}>
                        <Card
                            className={classes.card}
                            align='center'
                        >
                            <CardMedia
                                image={save_1}
                                style={{
                                    margin: '0.8rem 0 0.9rem',
                                    height: '4rem',
                                    width: '4rem',
                                }}
                            />

                            <CardContent style={{ paddingTop: '0' }} >
                                <Typography variant='h6' color='primary'>
                                    Save Payment
                                </Typography>
                                <Typography style={{ fontSize: '14px' }} gutterBottom>
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

        </>
    )
}

