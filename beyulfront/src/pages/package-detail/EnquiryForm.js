//All dependencies import
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

import { Formik, Field, Form, useField } from 'formik'
import * as yup from 'yup'

//All images import



const validationSchema = yup.object({
    fullname: yup.string().max(50).required(),
    
    email: yup.string().email().required(),
    enquiry: yup.string(),
})



//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    enquiryTextField: {
        width: '33ch',
    },

    enquiryButton: {
        width: '33ch',
        backgroundColor: '#694311',
        marginBottom: '1rem',
        color: '#ffffff',
        fontSize: '14px',
        lineHeight: '24px',
        '&:hover': {
            backgroundColor: '#694311',
        },
    },
}))

//Defining Photos component
export default function EnquiryForm() {
    const classes = useStyles()

    //checkbox for terms and conditions
    const [checked, setChecked] = React.useState(true)
    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
    return (
        <>
            <div className={classes.root}>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                    fullName: '',
                    email: '',
                    enquiry: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting, resetForm }) => {
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
                    <Form className={classes.root}>
                        <Grid container justifyContent='space-around'>
                        <Box style={{ paddingTop: '1rem' }}>
                            <Grid item xs={12}>
                                <TextField
                                    label='Full Name'
                                    required
                                    name='fullName'
                                    id='standard-size-small'
                                    size='small'
                                    className={classes.enquiryTextField}
                                />
                            </Grid>
                        </Box>

                        <Box style={{ paddingTop: '1rem' }}>
                            <Grid item xs={12}>
                                <TextField
                                    label='Email Address'
                                    required
                                    name='email'
                                    id='standard-size-small'
                                    size='small'
                                    className={classes.enquiryTextField}
                                />
                            </Grid>
                        </Box>

                        <Box style={{ paddingTop: '1rem' }}>
                            <Grid item xs={12}>
                                <TextField
                                    id='standard-multiline-static'
                                    label='Your Enquiry'
                                    name='enquiry'
                                    multiline
                                    rows={3}
                                    required
                                    className={classes.enquiryTextField}
                                />
                            </Grid>
                        </Box>

                        <Box style={{ paddingTop: '1rem' }}>
                            <Grid item container xs={12}>
                                <Box style={{ paddingLeft: '1rem' }}>
                                    <Grid item xs={2} md={3}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            required
                                            color='#000000'
                                            inputProps={{
                                                'aria-label': 'checkbox',
                                            }}
                                        />
                                    </Grid>
                                </Box>

                                <Grid item xs={10} md={9}>
                                    <Typography variant='body2'>
                                        * Creating an account means you're okay
                                        with our{' '}
                                        <Link
                                            style={{
                                                color: '#DF9534',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link
                                            style={{
                                                color: '#DF9534',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Privacy Statement.
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box style={{ marginTop: '2rem' }}>
                            <Grid item xs={12}>
                                <Button
                                    variant='contained'
                                    className={classes.enquiryButton}
                                    disabled={isSubmitting}
                                    type='submit'
                                >
                                    SUBMIT ENQUIRY
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                    </Form>
                )}
            </Formik>
            </div>
        </>
    )
}
