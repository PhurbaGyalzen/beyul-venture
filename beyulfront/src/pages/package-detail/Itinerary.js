//All dependencies import
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


//our Itinerary Information
const itineraries = [
    {
        id:1,
        title:'Day 01: Arrive at Tribhuwan International Airport Kathmandu',
        description:'No activities are planned for today. You can take a rest and restore your energy for your upcoming adventure. Overnight at Hotel.'
    },

    {
        id:2,
        title:'Day 02: Kathmandu Valley Sightseeing Tour and Preparation for the trek',
        description:'We will explore around different world heritage sites of ktm valley.'
    },

    {
        id:3,
        title:'Day 03: Fly to Lukla and Trek to Phakding (2652m/8699ft) Walking Distance - 8 km, Duration: 3 hours',
        description:'No activities are planned for today. You can take a rest and restore your energy for your upcoming adventure. Overnight at Hotel.'
    },

    {
        id:4,
        title:'Day 04: Phakding to Namche Bazaar (3440m/11283) Walking Distance - 10 to 12 km, Duration: 6 hours',
        description:'No activities are planned for today. You can take a rest and restore your energy for your upcoming adventure. Overnight at Hotel.'
    },

    {
        id:5,
        title:'Day 05: Acclimatization Day – Hike to Everest View Hotel (3,962m/12995ft) Walking Distance - 3 to 4 km, Duration: 3 to 4 hours',
        description:'No activities are planned for today. You can take a rest and restore your energy for your upcoming adventure. Overnight at Hotel.'
    },
];
    
    

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    }
    
}))


//Defining Itineary component
export default function Itinerary() {
    const classes = useStyles()

    const[data,setData]=useState(itineraries);
    return (
        <>
            <div className={classes.root}>
                <h1>Itineary section</h1>
            </div>
        </>
        
    );
};
