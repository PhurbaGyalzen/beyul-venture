//All dependencies import
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Accommodation from './Accommodation'
import Itinerary from './Itinerary'
import Overview from './Overview'
import Photos from './Photos'

//All images import

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    }
    
}))


//Defining PackageTabs component
export default function PackageTabs({imageList}) {
    const[selectedTab,setSelectedTab]=useState(0);
    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
      };
    return (
        <div className={classes.root}>
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="#694311"
                textColor="primary"
                aria-label="Package details"
                wrapped
            >
                <Tab label="Overview" />
                <Tab label="Itineary" />
                <Tab label="Accomodation" />
                <Tab label="Photos" />
            </Tabs>
            {selectedTab === 0 && <Overview/>}
            {selectedTab === 1 && <Itinerary/>}
            {selectedTab === 2 && <Accommodation/>}
            {selectedTab === 3 && <Photos imageList={imageList} />}
        </div>
    );
};
