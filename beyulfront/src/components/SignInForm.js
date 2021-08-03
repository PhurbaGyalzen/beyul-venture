import React from 'react'
import { Formik, Field, Form, useField } from 'formik'
import * as yup from 'yup';
import { makeStyles, TextField, Button, Typography,Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))



const ValidatingTextField = ({...props}) => {
    const[field,meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error: '';
    return(
        <TextField {...field} {...props} helperText={errorText} error={!!errorText}  />
    ) 
}


const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    });



export const SignInForm = () => {
    const classes = useStyles();
    return (
        <>
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
                />
                <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
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
        
        </>
    )
}