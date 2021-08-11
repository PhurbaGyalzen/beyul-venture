import React from 'react'
import { Container,Grid,Box,makeStyles,Typography,TextField, Button} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { Formik, Field, Form, useField } from 'formik'
import * as yup from 'yup';

const validationSchema = yup.object({
    review: yup.string().max(800).required("Comment should not be Empty if you are submitting"),
    rating: yup.number().max(5)
});
const ValidatingComment = ({...props}) => {
    const[field,meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error: '';
    return(
        <TextField {...field} {...props} helperText={errorText} error={!!errorText}  />
    ) 
}

const packageStyles = makeStyles((theme) => ({
    storyHead:{
        borderBottom:"2px solid rgb(239, 238, 241)",
        paddingBottom:'1rem'
    },
    formStyle:{
        padding:'1rem',
        backgroundColor:'#f8f7f8',
        border:'1px solid #efeeef',
    },
    ratingSec:{
        color:'#545454',
        verticalAlign: 'middle',
        display: 'inline-flex'
    }
}))
export const StorySection = () => {
    const classes = packageStyles();
    const [value, setValue] = React.useState(0);
    return (
        <>
            <Typography variant="h5" className={classes.storyHead} gutterBottom>Write a Story</Typography>
            
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{ review: '', rating: 0 }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    // validate(data)
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
                    // handleSubmit,
                }) => (
                    <Form className={classes.formStyle}>
                        
                        <Typography gutterBottom className={classes.ratingSec}>Your Rating: 
                            <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            /> </Typography>

                        <ValidatingComment
                            variant='outlined'
                            name='review'
                            placeholder='Write a review about your experience'
                            multiline={true}
                            rows={7}
                            rowsmax={10}
                            fullWidth={true}
                            value={values.review}
                        />
                        <div style={{ marginTop: '0.8rem' }}>
                            <Button
                                variant='outlined'
                                disabled={isSubmitting}
                                type='submit'
                                style={{backgroundColor:'#6bb53f'}}
                            >
                                Post Review
                            </Button>
                        </div>
                        
                        
                    </Form>
                )}
            </Formik>
        </>
    )
}
