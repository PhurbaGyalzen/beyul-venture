// All dependences import 
import { Container, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { blue, grey} from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import Faq from '../pages/faq/Faq';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';




// All image import 
import contactUsImg from 'img/contactUs.jpg';
import mapImg from 'img/map.png';
import question from 'img/question1.png';
import nischalImg from 'img/nischal.jpg';
import nishanImg from 'img/nishan.png';
import phurbaImg from 'img/phurba.jpg';
import sanjibImg from 'img/sanjib.jpg';
import sunilImg from 'img/sunil.png';

//Defining CustomStyles for ContactUs Page
const useStyles = makeStyles((theme) => ({
    button:{
        marginTop:"2rem",
        marginBottom:"1rem",
        '&:hover':{
            cursor:'pointer',
            backgroundColor:blue[1000]
        }
    },

    card:{
        height: '18.9rem',
        margin:"3%",
        '&:hover':{
            backgroundColor:blue[500],
            cursor:'pointer',
            color:grey[100]
        }
    },

    contactImg:{
        width:'100%',
        height:'100vh'
    },


    firstRow:{
       
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '100vh',
        textAlign: 'center',
        backgroundImage: `url(${contactUsImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundColor:"#F9F9F9",
        opacity:1,
        
    },
    firstRowItem1:{
        paddingTop:480,
        paddingLeft:50
    },

    contactUsTitle:{
        fontWeight:'bold'
    },

    secondRow:{
        width:'100%',
        height:'100vh',
        paddingTop:50,
        paddingLeft:30,
        backgroundColor:"#F0F0F0",
        marginBottom:50,
        marginTop:50
    },

    map:{
        paddingTop:50
    },

    
    worldmap:{
        paddingTop:50,
        width:'90%',
        height:'90%'
    },

    thirdRow:{
        height:'auto',
        padding:20
    },

    faq:{
        padding:20,
        marginTop:50
    },

    faqText:{
        marginBottom:30
    },

    questionImg:{
        height:100,
        width:100,
        marginTop:30,
        marginLeft:150
    },

    form:{
        marginTop:25
    },

    textField:{
        width:"100%",
        border:0,
        borderBottom:"2px solid black",
        outline:0,
        marginBottom:20
        
    },

    askButton:{
        width:"100%",
        border:"2px solid black",
        marginTop:20,
        marginBottom:10,
        fontWeight:'bold',
        '&:hover':{
            
         
        }

    },

    fourthRow:{
        marginTop:50,
        height:'auto',
        backgroundColor:"#F0F0F0"
    },

    contactCard:{
        width:'80%',
        height:'auto',
        marginTop:50,
        marginLeft:45
    },

    icon:{
        marginRight:20
    }

    

}))

// ContactUs component
export default function ContactUs (){
    const classes=useStyles();
    return(
        <>
                <Box className={classes.mainDiv} component="div" style={{backgroundColor:"#F0F0F0"}}>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center"
                        className={classes.firstRow}>

                        <Grid item xs={12} md={12} sm={12} className={classes.firstRowItem1}>
                            <Typography variant="h3" className={classes.contactUsTitle}> Beyul Venture</Typography>
                            <Typography>Need a help? Or a high five?</Typography>
                            <Typography>Here's how to reach us</Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid container className={classes.secondRow}>
                        <Grid item xs={12} md={6} sm={6}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.276891975016!2d85.29111309519689!3d27.709031933725658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1626018943682!5m2!1sen!2snp"
                             width="90%" height="90%" style={{border:0}} 
                              loading="lazy" className={classes.map}></iframe>

                            <Typography variant="h6" mt={10} color="textSecondary">
                                Find Us In Google Map
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6} sm={6}>
                            <img src={mapImg} alt="Beyul Venture in World Map" className={classes.worldmap}/>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.thirdRow} style={{backgroundColor:"#FFE8DF"}}>
                        <Grid item className={classes.faq} xs={12} md={5} sm={5}>
                            <Typography variant="h4" className={classes.faqText}>
                                Popular Questions
                            </Typography>
                            <Faq/>
                        </Grid>

                        <Grid item xs={12} md={6} sm={6}>
                            <img src={question} alt="have any question" className={classes.questionImg}/>
                            <Typography variant="h4" align="center">Have a question we didn't answer ?</Typography>
                            <Typography variant="body2" align="left" color="textSecondary">If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</Typography>

                            <form noValidate autoComplete="off" className={classes.form}>
                                <TextField placeholder="name" name="name" id="name" className={classes.textField} required></TextField>
                                <TextField type="email" name="email" id="email" placeholder="email" className={classes.textField} required></TextField>
                                <TextField type="number" name="phone" id="phone" placeholder="phone" className={classes.textField} required></TextField>
                                <TextField type="message" multiline rows={4} placeholder="message" className={classes.textField} required></TextField>
                                <Button variant="outlined" size="large" className={classes.askButton}> CATAPULT YOUR MESSAGE TO BEYUL VENTURE </Button>
                               <Typography variant="body2" color="textSecondary" style={{marginBottom:40}}><LockIcon fontSize="small" style={{marginRight:5, marginTop:20}}/> We never share your private data. <span style={{color:"blue"}}>Privacy Policy</span></Typography> 
                            </form>

                        </Grid>

                    </Grid>
                    
                    <Grid container className={classes.fourthRow} style={{backgroundColor:"#888888"}}>
                        <Grid xs={12} md={5} sm={5}>
                            <Card className={classes.contactCard} variant="outlined" elevation={3}>
                                <CardContent>
                                    <Typography varinat="h5" style={{fontWeight:'bold', marginBottom:5}}>CONTACT INFORMATION</Typography>
                                    <Divider/><br/>
                                    <Typography ><RoomIcon className={classes.icon}/>Thamel, Kathmandu, Nepal</Typography>
                                    <Typography><LocalPhoneIcon className={classes.icon}/>+977 9848859531</Typography>
                                    <Typography><EmailIcon className={classes.icon}/><span style={{color:"blue"}}>beyulventure@gmail.com</span></Typography>
                                    
                                </CardContent>
                                <CardContent>
                                    <Typography varinat="h5" style={{fontWeight:'bold', marginBottom:5}}>CONNECT WITH US</Typography>
                                    <Divider/><br/>
                                    <FacebookIcon fontSize="small" className={classes.icon}/>
                                    <InstagramIcon fontSize="small" className={classes.icon}/>
                                    <WhatsAppIcon fontSize="small" className={classes.icon}/>
                                    <YouTubeIcon fontSize="small" className={classes.icon}/>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Card className={classes.contactCard} variant="outlined" elevation={3}>
                                    <CardContent>
                                        <Typography variant="h5" style={{fontWeight:'bold', marginBottom:15}}>Meet our brilliant and knowledgable support team</Typography>
                                        <Divider/><br/> 
                                        <Avatar alt="Remy Sharp" src={nischalImg} className={classes.large} />
                                        <Avatar alt="Remy Sharp" src={nishanImg} className={classes.large} />
                                        <Avatar alt="Remy Sharp" src={phurbaImg} className={classes.large} />
                                        <Avatar alt="Remy Sharp" src={sanjibImg} className={classes.large} />
                                        <Avatar alt="Remy Sharp" src={sunilImg} className={classes.large} />
                                       
                                    </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                    
                </Box>
           
        </>
    )
}