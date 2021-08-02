import { Formik, Field, Form, useField } from 'formik'
import * as yup from 'yup';
import { makeStyles, TextField, Button, Typography,Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
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
    firstName: yup.string().max(50).required(),
    lastName: yup.string().max(50).required(),
    email: yup.string().email().required(),
    password: yup.string()
    .min(8,'Password is too short - should be 8 chars minimum.')
    .max(12,'Password should be in between 8-12 characters')
    .required('Password is required to register')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    });


export const SignUpForm = (props) => {
    const classes = useStyles();
    return (
        <>
        <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{ 
                    firstName: '',
                    lastName:'',
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
                <Form className={classes.form} >
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <ValidatingTextField
                        autoComplete='fname'
                        name='firstName'
                        variant='outlined'
                        required
                        fullWidth
                        id='firstName'
                        label='First Name'
                        autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatingTextField
                        variant='outlined'
                        required
                        fullWidth
                        id='lastName'
                        label='Last Name'
                        name='lastName'
                        autoComplete='lname'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatingTextField
                        variant='outlined'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ValidatingTextField
                        variant='outlined'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        />
                    </Grid>
                    
                    </Grid>
                    <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    disabled={isSubmitting}
                    >
                    Sign Up
                    </Button>
                    <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Link href='/sign-in' variant='body2'>
                        Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Form>  
            )}
            </Formik>
        
        </>
    )
}
