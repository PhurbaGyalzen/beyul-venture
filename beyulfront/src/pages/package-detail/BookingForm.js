//All dependencies import
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    }
    
}))

//BookingForm Initial values
const initialValues={
    id:0,
    bookingDate:new Date(),
    availableSeat:'',
    totalPeople:'',
    trekPrice:'',

}

//Defining BookingForm component
export default function BookingForm() {
    const classes = useStyles()
    const[values, setValues] = useState(initialValues);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <>
            <div className={classes.root}>
                <form>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <Box style={{paddingTop:"1rem"}}>
                            <Grid item>
                                <KeyboardDatePicker
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="trip-date"
                                label="Select Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}/>
                            </Grid>
                        </Box>
                        
                    </Grid>
                </MuiPickersUtilsProvider>
                    {/* <Grid container>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            
                        </Grid>
                    </Grid> */}
                </form>            
                

                
            </div>
        </>
        
    );
};
