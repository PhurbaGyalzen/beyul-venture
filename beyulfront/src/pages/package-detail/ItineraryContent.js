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
        backgroundColor:"#edeef0",
        padding:"1rem"
    },

    description:{
        color:"#13181e"
    }

    
}))


//Defining Itineary component
export default function ItineraryContent({title,description}) {
    const classes = useStyles()
    const[show,setShow]=useState(false);
    return (
        <>                     
            <div className={classes.title}>
                <h3 style={{display:"inline", color:"#13181e"}}>{title}</h3>
                <p style={{display:"inline", paddingLeft:"1rem"}} onClick={()=>setShow(!show)}> {show? <RemoveIcon fontSize="large" style={{color:"#694311", paddingTop:"0.5rem"}} />:<AddIcon fontSize="large" style={{color:"694311", paddingTop:"0.5rem"}}/>} </p>
            </div>
            <Divider/>

            {
                show && <p className={classes.description}>{description}</p>

            }

        </>
        
    );
};
