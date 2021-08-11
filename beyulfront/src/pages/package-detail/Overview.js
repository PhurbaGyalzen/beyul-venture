//All dependencies import
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


//All images import

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    }
    
}))


//Defining Overview component
export default function Overview() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <h1>Overview section</h1>
            </div>
        </>
        
    );
};