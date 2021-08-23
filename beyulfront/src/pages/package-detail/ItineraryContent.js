//All dependencies import
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

    

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    title:{
        padding:"1rem"
    },
    
}))


//Defining Itineary component
export default function ItineraryContent({title,description}) {
    const classes = useStyles()
    const[show,setShow]=useState(false);
    return (
        <>                     
            <div className={classes.title}>
                <Typography style={{display:"inline"}} variant="body1">{title}</Typography>
                <Typography style={{display:"inline", paddingLeft:"1rem"}} variant="body2" onClick={()=>setShow(!show)}> {show? <RemoveIcon fontSize="large" style={{paddingTop:"0.5rem"}} />:<AddIcon fontSize="large" style={{color:"694311", paddingTop:"0.5rem"}}/>} </Typography>
            </div>
            <Divider/>

            {
                show && <Typography variant="body2">{description}</Typography>

            }

        </>
        
    );
};
