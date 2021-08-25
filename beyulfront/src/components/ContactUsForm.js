import { Formik, Field, Form, useField } from 'formik'
import * as yup from 'yup'
import { makeStyles, TextField, Button, Typography } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: 25,
    },

    textField: {
        width: '100%',
        marginBottom: 20,
    },
    askButton: {
        width: '100%',
        border: '2px solid #DF9534',
        marginTop: 20,
        color: '#13181e',
        fontWeight: 'bold',
        '&:hover': {
            color: '#ffffff',
        },
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
    phone: yup.number().required(),
    messages: yup.string().required(),
})
export const ContactUsForm = () => {
    const classes = useStyles()
    return (
        <>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    messages: '',
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
                    <Form className={classes.form}>
                        <ValidatingTextField
                            className={classes.textField}
                            style={{ width: '49%', marginRight: '2%' }}
                            name='firstName'
                            label='First Name'
                            variant='outlined'
                            size='small'
                        />

                        <ValidatingTextField
                            className={classes.textField}
                            style={{ width: '49%' }}
                            name='lastName'
                            label='Last Name'
                            variant='outlined'
                            size='small'
                        />

                        <ValidatingTextField
                            className={classes.textField}
                            name='email'
                            label='Email'
                            variant='outlined'
                            size='small'
                        />

                        <ValidatingTextField
                            className={classes.textField}
                            name='phone'
                            label='Phone'
                            variant='outlined'
                            size='small'
                        />

                        <ValidatingTextField
                            className={classes.textField}
                            name='messages'
                            id='outlined-basic'
                            label='Messages'
                            multiline
                            rows={5}
                            variant='outlined'
                            size='small'
                        />
                        <Button
                            variant='contained'
                            component={motion.div}
                            whileHover={{
                                scale: 1.03,
                                textShadow: '0px 0px 8px rgb(205, 205, 205)',
                            }}
                            transition={{
                                duration: 0.4,
                                type: 'spring',
                                stiffness: 120,
                            }}
                            size='large'
                            className={classes.askButton}
                            disabled={isSubmitting}
                            type='submit'
                            style={{ backgroundColor: '#DF9534' }}
                        >
                            {' '}
                            CATAPULT YOUR MESSAGE TO BEYUL VENTURE{' '}
                        </Button>
                        <Typography variant='body2' color='textSecondary'>
                            <LockIcon
                                fontSize='small'
                                style={{ marginRight: 5, marginTop: 20 }}
                            />{' '}
                            We never share your private data.{' '}
                            <span style={{ color: '#DF9534' }}>
                                Privacy Policy
                            </span>
                        </Typography>
                    </Form>
                )}
            </Formik>
        </>
    )
}
