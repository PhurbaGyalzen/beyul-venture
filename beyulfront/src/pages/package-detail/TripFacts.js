//All dependencies import
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandOutlinedIcon from '@material-ui/icons/FlightLandOutlined';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import CommuteOutlinedIcon from '@material-ui/icons/CommuteOutlined';
import Battery60OutlinedIcon from '@material-ui/icons/Battery60Outlined';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

//All images import

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
    },

    
    box:{
        marginBottom:"2rem",
        marginTop:"1rem",
        marginLeft:"1rem"
    },

    button:{
        '&:hover':{
            color:"#694311"
        }
    }
    
}))


//Defining TripFacts component
export default function TripFacts() {
    const classes = useStyles()
    return (
        <>  
            <div className={classes.root}>
                <Paper>
                    <Typography variant="h5" style={{fontSize:"2rem", textAlign:"center", paddingTop:"1rem", paddingBottom:"2rem"}}>Trip Facts</Typography>
                    <Box className={classes.box}>
                        <Grid container direction="row" justifyContent="space-around" >
                            <Grid Item xs={11} md={3}>
                                <AccessTimeIcon className={classes.button}/>
                                <Typography variant="body1">Duration</Typography>
                                <Typography variant="body2">15 Days</Typography>
                            </Grid>

                            <Grid Item xs={11} md={3}>
                                <EventNoteOutlinedIcon className={classes.button}/>
                                <Typography variant="body1">Best Season</Typography>
                                <Typography variant="body2">Jan - Dec</Typography>
                            </Grid>

                            <Grid Item xs={11} md={3}>
                                <Battery60OutlinedIcon className={classes.button}/>
                                <Typography variant="body1">Level</Typography>
                                <Typography variant="body2">Difficult</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                        
                    <Box className={classes.box}>
                        <Grid container direction="row" justifyContent="space-around" >
                            <Grid Item xs={11} md={3}>
                                <CommuteOutlinedIcon className={classes.button}/>
                                <Typography variant="body1">Transportation</Typography>
                                <Typography variant="body2">Private Vehicel/Public Bus/Taxi</Typography>
                            </Grid>

                            <Grid Item xs={11} md={3}>
                                <FlightTakeoffIcon className={classes.button}/>
                                <Typography variant="body1">Starts at</Typography>
                                <Typography variant="body2">Kathmandu</Typography>
                            </Grid>

                            <Grid Item xs={11} md={3}>
                                <FlightLandOutlinedIcon className={classes.button}/>
                                <Typography variant="body1">Ends at</Typography>
                                <Typography variant="body2">Kathmandu</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                        
                    <Box className={classes.box} pb={5}>
                        <Grid container direction="row" justifyContent="space-around" >
                            <Grid Item xs={11} md={3}>
                                <PersonIcon className={classes.button}/>
                                <Typography variant="body1" >Min Age</Typography>
                                <Typography variant="body2">15+</Typography>
                            </Grid>

                            <Grid Item xs={11} md={3}>
                                <SupervisorAccountOutlinedIcon className={classes.button}/>
                                <Typography variant="body1">Max People</Typography>
                                <Typography variant="body2">Group or Private Trek Options</Typography>
                            </Grid>

                            <Grid Item xs={11} md={3}>
                                <FastfoodOutlinedIcon className={classes.button}/>
                                <Typography variant="body1">Meals</Typography>
                                <Typography variant="body2">Full Board During The Trek</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </div>
        </>
        
    );
};
