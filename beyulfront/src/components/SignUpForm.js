import { useState, useEffect, useRef } from 'react'
import { Formik, Field, Form, useField } from 'formik'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import {
    makeStyles,
    TextField,
    Button,
    Typography,
    Grid,
    InputAdornment,
    IconButton,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Link from '@material-ui/core/Link'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'
import Paper from '@material-ui/core/Paper'
import {randRange, shuffle} from 'utils/general'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        marginTop: '2rem',
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
        // .max(12, 'Password should be in between 8-12 characters')
        .required('Password is required to register')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
})

const successToast = (msg) => toast.success(msg)

const errort = (msg) => toast.error(msg)

const generateRandomPassword = () => {
    const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase()
    const numbers = '0123456789'
    const symbols = '!@#$%^&*'
    const lA = shuffle(lowerCaseAlphabets.split(''))
    const sA = shuffle(upperCaseAlphabets.split(''))
    const n = shuffle(numbers.split(''))
    const s = shuffle(symbols.split(''))
    const combinations = [
        ...lA.slice(0, randRange(3, 6)),
        ...sA.slice(0, randRange(3, 6)),
        ...n.slice(0, randRange(3, 6)),
        ...s.slice(0, randRange(3, 6)),
    ]

    const shuffledCombinations = shuffle(combinations)
    return shuffledCombinations.join('')
}

export const SignUpForm = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(true)
    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)

    const updatePasswordValue = (setter, field) => {
        const password = generateRandomPassword()
        setter(field, password)
    }

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
                                jsonData.status >= 400
                                    ? errort(jsonData.data.Errors.email[0])
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
                        setFieldValue,
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
                                            component={motion.div}
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{
                                                scale: 1.03,
                                                opacity: 1,
                                            }}
                                            whileTap={{
                                                scale: 1.1,
                                            }}
                                            transition={{ duration: 0.1 }}
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
                                            component={motion.div}
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{
                                                scale: 1.03,
                                                opacity: 1,
                                            }}
                                            whileTap={{
                                                scale: 1.1,
                                            }}
                                            transition={{ duration: 0.1 }}
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
                                            component={motion.div}
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{
                                                scale: 1.03,
                                                opacity: 1,
                                            }}
                                            whileTap={{
                                                scale: 1.1,
                                            }}
                                            transition={{ duration: 0.1 }}
                                                    />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ValidatingTextField
                                            variant='outlined'
                                            required
                                            fullWidth
                                            name='password'
                                            label='Password'
                                            className={classes.textfield}
                                            id='password'
                                            component={motion.div}
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{
                                                scale: 1.03,
                                                opacity: 1,
                                            }}
                                            whileTap={{
                                                scale: 1.1,
                                            }}
                                            transition={{ duration: 0.1 }}
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            } // <-- This is where the magic happens
                                            InputProps={{
                                                // <-- This is where the toggle button is added.
                                                endAdornment: (
                                                    <>
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                aria-label='toggle password visibility'
                                                                onClick={
                                                                    handleClickShowPassword
                                                                }
                                                                onMouseDown={
                                                                    handleMouseDownPassword
                                                                }
                                                            >
                                                                {showPassword ? (
                                                                    <Visibility />
                                                                ) : (
                                                                    <VisibilityOff />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                        <InputAdornment position='end'>
                                                            <Tooltip title="Generate Random" style={{cursor:'pointer'}}>
                                                                <AutorenewIcon
                                                                    onClick={() =>
                                                                        updatePasswordValue(
                                                                            setFieldValue,
                                                                            'password',
                                                                        )
                                                                    }
                                                                />
                                                            </Tooltip>
                                                                
                                                        </InputAdornment>
                                                    </>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    className={classes.submit}
                                    disabled={isSubmitting}
                                    size='large'
                                    
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
