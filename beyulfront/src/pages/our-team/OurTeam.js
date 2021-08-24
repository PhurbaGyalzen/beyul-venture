// All dependences import
import { Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { blue, grey } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import './index.css';
import { makeStyles } from '@material-ui/core';
import {datas} from './ourTeamData';
import {guides} from './ourTeamData';
import {assistant} from './ourTeamData';
import Masonry from 'react-masonry-css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';


// All images import

//Defining CustomStyles for AboutUs Page
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        paddingTop:"4rem"
    },

    organizingTeam:{
        paddingTop:theme.spacing(10),
        textAlign:'center',
        
    },

    organizationTeamTitle:{
        paddingBottom:theme.spacing(5),
    },

    card: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        '&:hover': {
          '& $cardImage': {
            filter: 'none',
            cursor: 'pointer',
            transform: 'scale(1.1)',
            transition: 'transform 0.9s ease-in-out, filter 2s',
          },
        },
      },

    media: {
        height: '10rem',
        filter: 'brightness(0.6)',
        transform: 'scale(1)',
        transition: 'transform 2.5s ease-in-out, filter 2s',
        boxSizing:"borderBox",
        maxWidth:"100%",
    },

    imageContainer:{
        overflow: 'hidden',

    }

}))

// ContactUs component
export default function OurTeam() {
    const classes = useStyles();
    const [teamData, setTeamData]=useState(datas);
    const [guide, setGuide]=useState(guides);

    const breakpoints={
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }
    return (
        <>  
            <div className={classes.root}>
                <Container maxWidth="lg" className={classes.organizingTeam} >
                    <Typography variant="h4" className={classes.organizationTeamTitle}>
                        OUR ORGANIZING TEAM
                    </Typography>
                    
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                    
                        {teamData.map((data)=>(
                            <div key={data.id} style={{borderRadius:"0.5rem"}}>
                                <Card className={classes.card}>
                                    <div className={classes.imageContainer}>
                                        <CardMedia
                                        component='img'
                                        className={classes.cardImage}
                                        image={data.photo}
                                        title={data.name}
                                        />
                                    </div>

                                    <CardContent>
                                        <Typography variant="h4">{data.name}</Typography>
                                        <Typography variant="body2" style={{fontStyle:"italic"}}>{data.post}</Typography>
                                        <Typography variant="body1">{data.email}</Typography>
                                        <Typography variant="body2" style={{paddingBottom:"1rem"}}>{data.bio}</Typography>


                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Facebook" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <FacebookIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Instagram" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <InstagramIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Twitter" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <TwitterIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>
                                        
                                        
                                    </CardContent>

                                </Card>
                        </div>
                        ))}
                        

                    </Masonry>
                </Container>


                <Container maxWidth="lg" className={classes.organizingTeam} colo="#ffffff" >
                    <Typography variant="h4" className={classes.organizationTeamTitle}>
                        OUR GUIDES
                    </Typography>
                    
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                    
                        {guide.map((data)=>(
                            <div key={data.id} style={{borderRadius:"0.5rem"}}>
                                <Card className={classes.card}>
                                    <div className={classes.imageContainer}>
                                        <CardMedia
                                        component='img'
                                        className={classes.cardImage}
                                        image={data.photo}
                                        title={data.name}
                                        />
                                    </div>

                                    <CardContent>
                                        <Typography variant="h4">{data.name}</Typography>
                                        <Typography variant="body2" style={{fontStyle:"italic"}}>{data.post}</Typography>
                                        <Typography variant="body1">{data.email}</Typography>
                                        <Typography variant="body2" style={{paddingBottom:"1rem"}}>{data.bio}</Typography>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Facebook" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <FacebookIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Instagram" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <InstagramIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Twitter" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <TwitterIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>
                                    </CardContent>

                                </Card>
                        </div>
                        ))}
                        

                    </Masonry>
                </Container>



                <Container maxWidth="lg" className={classes.organizingTeam} >
                    <Typography variant="h4" className={classes.organizationTeamTitle}>
                        EXPERIENCED ASSISTANT
                    </Typography>
                    
                    <Masonry
                        breakpointCols={breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                    
                        {assistant.map((data)=>(
                            <div key={data.id} style={{borderRadius:"0.5rem"}}>
                                <Card className={classes.card}>
                                    <div className={classes.imageContainer}>
                                        <CardMedia
                                        component='img'
                                        className={classes.cardImage}
                                        image={data.photo}
                                        title={data.name}
                                        />
                                    </div>

                                    <CardContent>
                                        <Typography variant="h4">{data.name}</Typography>
                                        <Typography variant="body2" style={{fontStyle:"italic"}}>{data.post}</Typography>
                                        <Typography variant="body1">{data.email}</Typography>
                                        <Typography variant="body2" style={{paddingBottom:"1rem"}}>{data.bio}</Typography>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Facebook" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <FacebookIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Instagram" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <InstagramIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>

                                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Twitter" arrow>
                                            <Link href='#' style={{ marginRight: 10 }}>
                                                <TwitterIcon
                                                    fontSize='small'
                                                    className='textHover'
                                                    style={{color:"#694311"}}
                                                />
                                            </Link>
                                        </Tooltip>
                                    </CardContent>

                                </Card>
                        </div>
                        ))}
                        

                    </Masonry>
                </Container>
            </div>
            
        </>
    )
}


