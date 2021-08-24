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

// All images import

//Defining CustomStyles for AboutUs Page
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        paddingTop:"4rem"
    },

    organizingTeam:{
        paddingTop:theme.spacing(3),
        textAlign:'center'
    },

    organizationTeamTitle:{
        paddingBottom:theme.spacing(3)
    },

    card: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
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
        borderRadius:"0rem" 
    },

    imageContainer:{
        overflow: 'hidden',

    }

}))

// ContactUs component
export default function OurTeam() {
    const classes = useStyles();
    const [teamData, setTeamData]=useState(datas);
    return (
        <>  
            <div className={classes.root}>
                <Container maxWidth="lg" className={classes.organizingTeam} >
                    <Typography variant="h4" className={classes.organizationTeamTitle}>
                        Our Organizing Team
                    </Typography>
                    
                    <Grid container spacing={3}>
                        {teamData.map((data)=>(
                            <Grid item xs={12} sm={4} md={4} >
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
                                    <Typography variant="body2">{data.bio}</Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        ))}
                        

                    </Grid>
                </Container>
            </div>
            
        </>
    )
}


