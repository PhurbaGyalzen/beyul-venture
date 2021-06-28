import React from 'react';
import {Grid, Card, CardContent,CardMedia ,Typography,makeStyles} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './landingstyle.css'

const useStyles = makeStyles((theme)=>({
    cardImage:{
        height:"15rem",
        overflow: "hidden"
    },
    card:{
        height: '100%',
        display: 'Flex',
        flexDirection : 'column'

    },
    cardCont:{
        height: "80px",
        overflow: "hidden",
    }
}));


const Package = (props) => {
    const classes = useStyles();
    return (
        <Grid item key={props.data.id} xs={12} md={4} sm={6}>
            <Card className={classes.card}>
                <div className={classes.cardImage}>
                    <CardMedia
                    component="img" 
                    className={classes.cardImage}
                    image ={props.data.image}
                    title={props.data.title} 
                    // style={{height: "3rem", paddingTop: '56.25%'}}
                    />
                </div>
                <CardContent className={classes.cardCont}>
                    <Typography gutterBottom variant="h5" align="justify">
                        {props.data.title}
                    </Typography>
                    <Typography gutterBottom align="left">
                        User Rating: <Rating 
                        name="Average Rating"
                        value={props.data.rating}
                        precision={0.5}
                        size="medium"
                        style={{paddingLeft:"2rem"}}
                        />
                    </Typography>
                    
                    <Typography align="justify">
                        {props.data.description}
                    </Typography>
                </CardContent> 
            </ Card>
        </ Grid>
    )
}


export default Package
