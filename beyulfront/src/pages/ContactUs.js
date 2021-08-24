// All dependences import
import {
    makeStyles
 
} from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { useState, useEffect } from 'react'
import Faq from '../pages/faq/Faq'


import contactUsImg from 'img/contactUs2.jpg'
import mapImg from 'img/map.png'
import question from 'img/question1.png'

//validation import
import { ContactUsForm } from '../components/ContactUsForm'
import { DeveloperCard } from '../components/DeveloperCard'

//Defining CustomStyles for ContactUs Page
const useStyles = makeStyles((theme) => ({
    // firstRow
    firstRow: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '100vh',
        textAlign: 'center',
        backgroundImage: `url(${contactUsImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundColor: '#EDEEF0',
        opacity: 1,
    },
    firstRowItem1: {
        paddingTop: 480,
        paddingLeft: 50,
    },

    contactUsTitle: {
        fontWeight: 'bold',
        color:"#694311",
    },

    // secondRow
    secondRow: {
        height: 'auto',
        // backgroundColor: '#F0F0F0',
    },

    contactCard: {
        width: '80%',
        height: 'auto',
        marginTop: 50,
        marginLeft: 45,
    },

    icon: {
        marginRight: 20,
    },

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    //thirdRow
    thirdRow: {
        height: 'auto',
        padding:20,
        paddingBottom:50,
        backgroundColor:"primary"
    },

    faq: {
        padding: 20,
        marginTop: 50,
    },


    questionImg: {
        height: 100,
        width: 100,
        marginTop: 30,
        marginLeft: 150,
    },

    form: {
        marginTop: 25,
    },

    textField: {
        width: '100%',

        marginBottom: 20,
    },
    askButton: {
        width: '100%',
        border: '2px solid black',
        marginTop: 20,
        fontWeight: 'bold',
        '&:hover': {},
    },

    // fourthRow
    fourthRow: {
        width: '100%',
        height: 'auto',
        padding: '3rem 1rem 0  1rem',
        margin: '0 auto',
        // backgroundColor: '#888888',
    },

    map: {
        // paddingTop: 50,
    },

    worldmap: {
        // paddingTop: 50,
        width: '100%',
        height: '100%',
    },

    heading:{
        lineHeight:"4rem",
        paddingBotttom:"3rem"
    }
}))

// ContactUs component
export default function ContactUs() {
    const classes = useStyles()


    return (
        <>
            <Box component='div' style={{ backgroundColor: 'primary', color:"#ffffff" }}>
                {/* First Row */}
                <Box style={{height:"100vh"}}>
                    <Grid
                        container
                        direction='row'
                        justifyContent='flex-end'
                        alignItems='center'
                        className={classes.firstRow}
                    >
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sm={12}
                            className={classes.firstRowItem1}
                        >
                            {/* <Typography
                                variant='h3'
                                className={classes.contactUsTitle}
                            >
                                {' '}
                                Beyul Venture
                            </Typography>
                            <Typography style={{color:"#13181e"}}>Need a help? Or a high five?</Typography>
                            <Typography style={{color:"#13181e"}}>Here's how to reach us</Typography> */}
                        </Grid>
                    </Grid>
                </Box>

                
                {/* Third Row */}
                <Grid
                    container
                    justifyContent='center'
                    className={classes.thirdRow}
                    // style={{ backgroundColor: '#FFE8DF' }}
                >
                    <Grid item className={classes.faq} xs={12} md={4} sm={5} mr={{md:4, xs:0}}>
                        <Typography variant='h6' className={classes.heading}>
                            Popular Questions
                        </Typography>
                        <Faq />
                    </Grid>

                    <Grid item xs={12} md={6} sm={6}>
                        <Box pl={{xs:0, sm:5, md:5, lg:5}}>
                            <img
                                src={question}
                                alt='have any question'
                                className={classes.questionImg}
                            />
                            <Typography variant='h6' align='center' className={classes.heading}>
                                Have a question we didn't answer ?
                            </Typography>
                            <Typography
                                variant='body2'
                                align='left'
                            >
                                If you have any questions or queries a member of
                                staff will always be happy to help. Feel free to
                                contact us by telephone or email and we will be
                                sure to get back to you as soon as possible.
                            </Typography>

                            {/* form */}
                            <ContactUsForm />
                        </Box>
                        
                    </Grid>
                </Grid>

                {/* Fourth Row */}
                <Grid container spacing={4} className={classes.fourthRow}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sm={6}
                        style={{ position: 'relative' }}
                    >
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.276891975016!2d85.29111309519689!3d27.709031933725658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1626018943682!5m2!1sen!2snp'
                            width='100%'
                            height='100%'
                            style={{ border: 0 }}
                            loading='lazy'
                            className={classes.map}
                        ></iframe>

                        <Typography
                            variant='h6'
                            mt={10}
                            style={{
                                position: 'absolute',
                                bottom: '-0.8rem',
                                left: '1rem',
                            }}
                        >
                            Find Us In Google Map
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                        <Box pt={{xs:5, md:0, sm:0, lg:0}}>
                            <img
                                src={mapImg}
                                alt='Beyul Venture in World Map'
                                className={classes.worldmap}
                            />
                        </Box>

                        
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
