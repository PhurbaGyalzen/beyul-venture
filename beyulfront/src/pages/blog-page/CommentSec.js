import { Formik, Field, Form } from 'formik'
import { TextField, makeStyles, Button } from '@material-ui/core'
import * as yup from 'yup';
const formStyle = makeStyles((theme) => ({
    commentField: {
        width: 'inherit',
        height: '40vh',
    },
}))

const validationSchema = yup.object({
    comment: yup.string().max(800).required("Comment should not be Empty if you are submitting")
});

export const CommentSec = () => {
    const classes = formStyle()
    return (
        <div>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{ comment: '' }}
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
                    <Form>
                        <Field
                            variant='outlined'
                            name='comment'
                            placeholder='Write a Comment'
                            multiline={true}
                            rows={7}
                            rowsmax={10}
                            fullWidth={true}
                            // InputProps={{className: classes.commentField}}
                            value={values.comment}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            as={TextField}
                            helperText={errors.comment && touched.comment ? errors.comment:''}
                            error={!!(errors.comment && touched.comment ? errors.comment:'')}
                        />
                        <div style={{ marginTop: '0.8rem' }}>
                            <Button
                                variant='outlined'
                                disabled={isSubmitting}
                                type='submit'
                            >
                                Post Comment
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
