import React from 'react'
import {Box,Grid,Typography,Link} from '@material-ui/core'



import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PaymentIcon from '@material-ui/icons/Payment';
export const Footer = () => {
    return (
        <div>
            <footer>
                <Box  color='white'>
                        <Grid container  justifyContent="space-around"  style={{backgroundColor:'#4e524f',padding:'2.2rem 2.2rem 1rem 2.2rem'}}>

                            {/* first col */}
                            <Grid item md={3} xs={12}>
                                <Box style={{marginBottom:'1rem'}}>
                                    <Typography variant='h5'>
                                        Beyul Venture Logo
                                    </Typography>
                                </Box>
                                <Typography align='justify'>
                                    Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, scrambled it to make a type specimen
                                    book. It has survived not only five centuries.
                                </Typography>
                                {/* <Card>
                                    <CardMedia
                                    image={location}
                                    style={{
                                        height:'10rem',
                                        width:'15rem'
                                }}
                                    />                        
                                </Card> */}
                            
                            </Grid>

    


                            {/* second col */}
                            <Grid item>
                                <Box borderBottom={1} style={{marginBottom:'1rem'}}>
                                    <Typography variant='h6' >
                                        Our office
                                    </Typography>
                                </Box>
                                <Typography>
                                <LocationOnIcon fontSize='small'/>   
                                    Dillibazar, Kathmandu
                                </Typography>
                                <Typography style={{paddingLeft:'1.2rem'}}>
                                 Nepal
                                </Typography>
                                <Typography>
                                    <CallIcon fontSize='small'/> +977 9807631204
                                </Typography>
                                <Typography>
                                    <EmailIcon fontSize='small'/> BeyulVenture2021@gmail.com
                                </Typography>
                                
                                    
                            </Grid>

                            {/* third col */}

                            <Grid item>
                                <Box borderBottom={1} style={{marginBottom:'1rem'}}>
                                    <Typography variant='h6' >
                                        Links
                                    </Typography>
                                </Box>
                                <Box>
                                    <Link href='#' color='inherit'>
                                        Home
                                    </Link>
                                </Box>  
                                <Box>
                                    <Link href='#' color='inherit'>
                                        About Us
                                    </Link>
                                </Box>  
                                <Box>
                                    <Link href='#' color='inherit'>
                                        Blog
                                    </Link>
                                </Box> 
                                <Box>
                                    <Link href='#' color='inherit'>
                                        Privacy Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href='#' color='inherit'>
                                        FAQs
                                    </Link>
                                </Box>
                                    
                            </Grid>


                            {/* fourth col */}
                            <Grid item>
                                <Box borderBottom={1} style={{marginBottom:'1rem'}}>
                                    <Typography variant='h6' >
                                        Follow us on
                                    </Typography>
                                </Box>
                                <Box>
                                    <Link href='#'>
                                        <FacebookIcon fontSize='large' style={{color:'#4267B2'}}/>
                                    </Link>
                                    <Link href='#'>
                                        <TwitterIcon fontSize='large' style={{color:'#1DA1F2'}}/>
                                    </Link>
                                    <Link href='#'>
                                        <InstagramIcon fontSize='large' style={{color:'#DD2A7B'}}/>
                                    </Link>
                                    <Link href='#'>
                                        <YouTubeIcon fontSize='large' style={{color:'#FF0000'}}/>
                                    </Link>
                                    <Link href='#'>
                                        <LinkedInIcon fontSize='large' style={{color:'#2867B2'}}/>
                                    </Link>
                                </Box>  
                                
                                    
                            </Grid>


                            {/* fifth col */}
                            <Grid item>
                                <Box borderBottom={1} style={{marginBottom:'1rem'}}>
                                    <Typography variant='h6' >
                                        Payment
                                    </Typography>
                                </Box>
                                <Box>
                                    <PaymentIcon fontSize='large'/>    
                                </Box> 
                                <Box>
                                    <PaymentIcon fontSize='large'/>    
                                </Box>
                                <Box>
                                    <PaymentIcon fontSize='large'/>    
                                </Box> 
                                
                                    
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <Box textAlign='center' pt={{xs:5, sm:6, md:5}} pb={{xs:0, sm:0}}>
                                    BeyulVenture &reg; 2021

                                </Box>
                            </Grid>




                            
                           
                        </Grid>
                    
                </Box>
            </footer>
        </div>
    )
}
