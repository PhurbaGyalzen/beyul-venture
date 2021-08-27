import { Formik, Field, Form, useField } from 'formik'
import { useEffect } from 'react'
import * as yup from 'yup'
import {
    makeStyles,
    TextField,
    Button,
    Typography,
    Grid,
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#DF9534',
        border: '2px solid #DF9534',
        color: '#13181e',
        '&:hover': {
            cursor: 'pointer',
            color: '#fff',
            backgroundColor: '#DF9534',
        },
    },
    formContainer: {
        padding: '2rem',
    },
    textfield: {
        height: '4rem',
    },
}))

const ValidatingTextField = ({ ...props }) => {
    const [field, meta] = useField(props)
    const errorText = meta.error && meta.touched ? meta.error : ''
    return (
        <TextField
            {...field}
            {...props}
            helperText={errorText}
            error={!!errorText}
        />
    )
}

const validationSchema = yup.object({
    firstName: yup.string().max(50).required(),
    lastName: yup.string().max(50).required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .max(12, 'Password should be in between 8-12 characters')
        .required('Password is required to register')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
})

const successToast = (msg) => toast.success(msg)

const errort = (msg) => toast.error(msg)

export const SignUpForm = (props) => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <>
            <Paper>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(data, { setSubmitting, resetForm }) => {
                        // validate(data);
                        setSubmitting(true)
                        console.log('Submit:', data)
                        const requestOptions = {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                first_name: data.firstName,
                                last_name: data.lastName,
                                email: data.email,
                                password: data.password,
                            }),
                        }

                        fetch(
                            'http://localhost:8000/api/register/',
                            requestOptions,
                        )
                            .then((response) =>
                                response.json().then((res) => ({
                                    data: res,
                                    status: response.status,
                                })),
                            )
                            .then((jsonData) => {
                                console.log(
                                    'main sign up jsonData:',
                                    jsonData.data,
                                )
                                console.log(jsonData.status)
                                jsonData.status >= 400 ? errort(jsonData.data.Errors.email[0])
                                : (successToast(jsonData.data.Message),
                                history.push('/sign-in'))
                                console.log(jsonData.data.Message)

                                // successToast(jsonData.data.detail);
                            })
                            .catch((error) => {
                                // console.error(error);
                                errort(error)
                            })
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
                            <div className={classes.formContainer}>
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
                                            className={classes.textfield}
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
                                            className={classes.textfield}
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
                                            className={classes.textfield}
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
                                            className={classes.textfield}
                                            id='password'
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
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
                            </div>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </>
    )
}
