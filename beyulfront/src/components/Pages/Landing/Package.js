import React from 'react';
import {Grid, Card, CardContent,CardMedia ,Typography,makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    cardImage:{

    },
    card:{
        height: '100%',
        display: 'Flex',
        flexDirection : 'column'
    },
    cardCont:{
        height: "40px",
        overflow: "hidden",
    }
}))


const Package = (props) => {
    const classes = useStyles();
    return (
        <Grid item key={props.data.id} xs={12} md={4} sm={6}>
            <Card className={classes.card}>
                <CardMedia 
                className={classes.cardImage}
                image ={props.data.image}
                title={props.data.title} 
                style={{height: "3rem", paddingTop: '56.25%'}}
                />
                <CardContent classname={classes.cardCont}>
                    <Typography gutterBottom variant="h5" align="justify">
                        {props.data.title}
                    </Typography>
                    <Typography align="justify">
                        {props.data.description}
                    </Typography>
                </CardContent> 
            </Card>
        </Grid>
    )
}


export default Package
