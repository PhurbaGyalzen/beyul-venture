import React from 'react'
import { Formik, Field, Form, useField } from 'formik'
import * as yup from 'yup';
import { makeStyles, TextField, Button, Typography,Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import toast from 'react-hot-toast';
import Paper from '@material-ui/core/Paper'

import { useHistory } from 'react-router';



const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      padding:"1rem",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor:"#DF9534",
      border: '2px solid #DF9534',
      '&:hover': {
        cursor: 'pointer',
        color: "#fff",
        backgroundColor:"#DF9534",


        },
    },
    textfield:{
        // backgroundColor:'white',
        height:'4rem',
        color:"#13181e"
        
    }
  }))



const ValidatingTextField = ({...props}) => {
    const[field,meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error: '';
    return(
        <TextField {...field} {...props} helperText={errorText} error={!!errorText}  />
    ) 
}


const validationSchema = yup.object({
    email: yup.string().email().required('Email is necessary to sign you in'),
    password: yup.string().required(),
    });

const successToast = (msg) => toast.success(msg)

const errort = (msg) => toast.error(msg)

export const SignInForm = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <Paper>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{ 
                    email:'',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting, resetForm}) => {
                    // validate(data);
                    setSubmitting(true)
                    //make async call
                    console.log('Submit:', data)
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ 
                            email: data.email,
                            password: data.password
                         })
                    }
                    
                    fetch('http://localhost:8000/api/login/',requestOptions)
                    .then( response => response.json().then(res => ({
                            data: res, 
                            status : response.status
                        })
                    ))
                    .then(
                        (jsonData) => {
                            console.log('main ch jsonData:',jsonData.data);
                            console.log(jsonData.status)
                            if (jsonData.data.hasOwnProperty("access")){
                                successToast("Sucessfully logged in")
                                history.push("/")
                            }else{
                                (jsonData.status > 400) ? errort(jsonData.data.detail) : successToast(jsonData.data.detail);
                            }
                            // successToast(jsonData.data.detail);
                        }

                    )
                    .catch(error => {
                        console.error(error);
                        errort(error);
                    });
                    setSubmitting(false)
                    resetForm()
                
                }}
            >
                {({
                values,
                errors,
                touched,
                isSubmitting,
                // handleChange,
                // handleBlur,
                handleSubmit,
            }) => (
                <Form className={classes.form}>
                <ValidatingTextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    className={classes.textfield}
                />
                <ValidatingTextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    className={classes.textfield}
                />
                <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    className={classes.submit}
                    disabled={isSubmitting}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href='#' variant='body2'>
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item >
                    <Link href='/sign-up' variant='body2'>
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
            </Form>
             
            )}
            </Formik>
            </Paper>
        
        </>
    )
}
