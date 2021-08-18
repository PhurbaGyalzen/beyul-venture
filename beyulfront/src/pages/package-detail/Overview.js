//All dependencies import
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


//Overview component information

const datas=[
    {
        id:0,
        title:'Ghandruk Ghorepani trekking',
        content:'Ghandruk Ghorepani trekking is in Annapurna region, which is north-central part of Nepal. Ghorepani and Ghandruk are the two separate villages. Ghorepani is famous for rhododendron forest as well as the fantastic panoramic sunrise, sunset view from Pun Hill 3210 meters which is one hour climbing from Ghorepani.'
    },

    {
        id:1,
        title:'Ghandruk is a popular tourist',
        content:'Ghandruk is a popular tourist place for trekkers in Annapurna area of Nepal, with easy trails and various accommodation possibilities, Gurung culture, Monastery, best views of the Annapurna Mountains including a beautiful massif view of Machhapuchhare, call "Fishtail" from Ghandruk.'
    },

    {
        id:2,
        title:'Ghandruk Ghorepani trek offer',
        content:"Ghandruk Ghorepani trek offer the spectacular mountain scenery along with charming villages inhabited particularly by the Gurungs, Poon & Magars, dense rhododendron forest full of birds and deep sub-tropical valleys, all set below the Annapurna's with the picturesque peak of Machhapuchhare (Fishtail) dominating the skyline. One of the important highlights of this trip is to make a claim on Pun Hill, possibly the Most Spectacular Mountain scrapes on Earth. When the sun rises, it touches the snow-capped summits the Himalayan giants, Dhaulagiri (8,167m) and Annapurna (8,091m) along with a maze of other peaks, there gradually appear, just like magic that your eye could not believe. Beautiful and ornate village of Ghandruk, home of the Annapurna Conservation Area Project, Gurung Museum, culture and custom, Monastery are interesting to visit. Every day at 3PM you have a chance to visit the ACAP project to discover at first hand the conservation work being carried out in Ghandruk village."
    }
];

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    },

    title:{
        fontWeight:"bold",
        fontSize:"1rem",
        lineHeight:"rem",
    },

    description:{
        textAlign:"justify",
        fontSize:"1rem",
        lineHeight:"1.685rem",
    }
    
}))


//Defining Overview component
export default function Overview() {
    const classes = useStyles()
    const[overview, setOverview]=useState(datas);
    return (
        <>
            <div className={classes.root}>
                {overview.map((data)=>(
                    <Grid container>
                        <Box pt={3}>
                            <Typography className={classes.title} variant="h6">
                                {data.title}
                            </Typography>

                            <Typography className={classes.description} variant="body2">
                                {data.content}
                            </Typography>


                        </Box>
                    </Grid>
                ))}
            </div>
        </>
        
    );
};
