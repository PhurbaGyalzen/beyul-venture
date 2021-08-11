//All dependencies import
import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

//Total no.of people
const peoples = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },

    {
        value: '5',
        label: '5',
      },
      {
        value: '6',
        label: '6',
      },
      {
        value: '7',
        label: '7',
      },
      {
        value: '8',
        label: '8',
      },
  ];

  //payment Method
  const payments =[
      {
          value:'esewa',
          label:'esewa',
      },

      {
          value:'stripe',
          label:'stripe',
           
      }
  ];

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    },

    noTextField:{
        width:"33ch"
    },

    bookingButton:{
        width:"33ch",
        backgroundColor:"#694311",
        color:"#ffffff",
        '&:hover':{
            backgroundColor:"#694311"
        }
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

    //hooks and functions for payment method
    const[payment, setPayment] = React.useState('esewa');
    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };    

    //hooks and functions for Total no. of people
    const[people, setPeople] = React.useState('1');
    const handleChange = (event) => {
        setPeople(event.target.value);
    };    

    //hooks and functions for date
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
                            <Grid item xs={12}>
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

                        <Box style={{marginTop:"2rem"}}>
                            <Grid item xs={12}>
                                <TextField
                                id="total-no-of-people"
                                select
                                label="Select"
                                value={people}
                                onChange={handleChange}
                                helperText="Total no. of People"
                                className={classes.noTextField}
                                >
                                    {peoples.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Box>

                        <Box style={{marginTop:"2rem"}}>
                            <Grid item xs={12}>
                                <TextField
                                id="payment-method"
                                select
                                label="Select"
                                value={payment}
                                onChange={handlePaymentChange}
                                helperText="Payment Method"
                                className={classes.noTextField}
                                >
                                    {payments.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Box>

                        <Box style={{marginTop:"2rem"}}>
                            <Grid item xs={12}>
                                <Button variant="contained" className={classes.bookingButton}>
                                    PROCEED BOOKING
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                    </MuiPickersUtilsProvider>
                </form>            
                
            </div>
        </>
        
    );
};
