import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Box, Grid, Card, CardContent,CardMedia ,Typography,makeStyles} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './landingstyle.css'

const useStyles = makeStyles((theme)=>({
    card: {
        // height: '100%',
    },
    cardImage: {
        height: "15rem",
        width: "15rem",
    },
    cardCont: {
    }
}));


const Place = ({place}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4} sm={6}>
            <Card className={classes.card}>
                <div className={classes.cardImage}>
                    <CardMedia
                        component="img" 
                        className={classes.cardImage}
                        image={place.thumb_src}
                        title={place.title} 
                        // style={{height: "3rem", paddingTop: '56.25%'}}
                    />
                </div>
                <CardContent className={classes.cardCont}>
                    <Typography
                        align="center"
                        style={{color: "#9d9fa5", fontSize: "0.8rem", fontWeight: "bold"}}
                    >{place.title}</Typography>
                </CardContent> 
            </ Card>
        </ Grid>
    )
}


export default Place
