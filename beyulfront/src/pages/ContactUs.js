// All dependences import
import { Container, makeStyles, Card,CardContent,CardMedia, CardActions } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { blue, grey } from '@material-ui/core/colors'
import { Button } from '@material-ui/core'
import Faq from '../pages/faq/Faq'
import TextField from '@material-ui/core/TextField'
import { Divider } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import YouTubeIcon from '@material-ui/icons/YouTube'

import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'

// All image import
import contactUsImg from 'img/contactUs.jpg'
import mapImg from 'img/map.png'
import question from 'img/question1.png'
import nischalImg from 'img/nischal.jpg'
import nishanImg from 'img/nishan.jpg'
import phurbaImg from 'img/phurba.jpg'
import sanjibImg from 'img/sanjib.jpg'
import sunilImg from 'img/sunil.png'

//validation import
import { Formik, Field, Form, useField } from 'formik'
import * as yup from 'yup';
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
        backgroundColor: '#F9F9F9',
        opacity: 1,
    },
    firstRowItem1: {
        paddingTop: 480,
        paddingLeft: 50,
    },

    contactUsTitle: {
        fontWeight: 'bold',
    },

    // secondRow
    secondRow: {
        height: 'auto',
        backgroundColor: '#F0F0F0',
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
        padding: 20,
    },

    faq: {
        padding: 20,
        marginTop: 50,
    },

    faqText: {
        marginBottom: 30,
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
        padding: '3rem 2px',
        margin: '0 auto',
        backgroundColor: '#888888',
    },

    map: {
        // paddingTop: 50,
    },

    worldmap: {
        // paddingTop: 50,
        width: '100%',
        height: '100%',
    },
}))




// ContactUs component
export default function ContactUs() {
    const classes = useStyles()

    const [devProfile,setDevProfile] =  useState([
        {
            id: 1,
            name:"Nischal Khatri",
            post: "FrontEnd Developer",
            bio: `Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, scrambled it to make a
            type specimen book.`,
            image:nischalImg,
            fb:"https://www.facebook.com/nischal.khatri.1",
            instagram:"#",
            twitter:"#"
        },
        {
            id: 2,
            name:"Nishan Thapa",
            post: "Backend Developer",
            bio: `Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, scrambled it to make a
            type specimen book.`,
            image:nishanImg,
            fb:"#",
            instagram:"https://www.instagram.com/n._.tc/",
            twitter:"#"
        },
        {
            id: 3,
            name:"Phurba Gyalzen Sherpa",
            post: "Backend Developer",
            bio: `Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, scrambled it to make a
            type specimen book.`,
            image:phurbaImg,
            fb:"https://www.facebook.com/Gyalzen.sherpa.360",
            instagram:"#",
            twitter:"#"
        },
        {
            id: 1,
            name:"Sunil Tamang",
            post: "FrontEnd Developer",
            bio: `Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, scrambled it to make a
            type specimen book.`,
            image:sunilImg,
            fb:"https://www.facebook.com/suniltamangvlog/",
            instagram:"#",
            twitter:"#"
        },
        {
            id: 1,
            name:"Sanjib Limbu",
            post: "Project Manager",
            bio: `Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, scrambled it to make a
            type specimen book.`,
            image:sanjibImg,
            fb:"https://www.facebook.com/sanjiv.limbu.92",
            instagram:"#",
            twitter:"#"
        }

    ]);




    return (
        <>
            <Box component='div' style={{ backgroundColor: '#F0F0F0' }}>
                {/* First Row */}
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
                        <Typography
                            variant='h3'
                            className={classes.contactUsTitle}
                        >
                            {' '}
                            Beyul Venture
                        </Typography>
                        <Typography>Need a help? Or a high five?</Typography>
                        <Typography>Here's how to reach us</Typography>
                    </Grid>
                </Grid>

                {/* Second Row */}


                {/* second row  our team*/}
                <Grid container justifyContent='space-evenly' style={{backgroundColor:'#FFE8DF'}} >


                    <Grid item xs={12} sm={12} md={12} style={{paddingTop:'1%',paddingBottom:'1%'}} align='center'>

                        <Typography variant='h5' style={{color:'Black'}}>
                            Meet Our Team

                        </Typography>
                        
                    </Grid>
                    
                    {/* creating profile card with DeveloperCard Component in Component */}
                    {devProfile.map((data)=>{
                        return <DeveloperCard key={data.id} data={data} />
                    })}

                </Grid>

                {/* Third Row */}
                <Grid
                    container
                    justifyContent='center'
                    className={classes.thirdRow}
                    style={{ backgroundColor: '#FFE8DF'}}
                >
                    <Grid item className={classes.faq} xs={12} md={5} sm={5}>
                        <Typography variant='h4' className={classes.faqText}>
                            Popular Questions
                        </Typography>
                        <Faq />
                    </Grid>

                    <Grid item xs={12} md={6} sm={6}>
                        <img
                            src={question}
                            alt='have any question'
                            className={classes.questionImg}
                        />
                        <Typography variant='h4' align='center'>
                            Have a question we didn't answer ?
                        </Typography>
                        <Typography
                            variant='body2'
                            align='left'
                            color='textSecondary'
                        >
                            If you have any questions or queries a member of
                            staff will always be happy to help. Feel free to
                            contact us by telephone or email and we will be
                            sure to get back to you as soon as possible.
                        </Typography>


                        {/* form */}
                        <ContactUsForm />
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
                                color: '#ffffff',
                                position: 'absolute',
                                bottom: '-0.8rem',
                                left: '1rem',
                            }}
                        >
                            Find Us In Google Map
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} sm={6}>
                        <img
                            src={mapImg}
                            alt='Beyul Venture in World Map'
                            className={classes.worldmap}
                        />
                    </Grid>

                    
                </Grid>
            </Box>
        </>
    )
}
