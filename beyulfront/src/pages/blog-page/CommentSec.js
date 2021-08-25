import { Formik, useField, Form } from 'formik'
import { TextField, makeStyles, Button } from '@material-ui/core'
import * as yup from 'yup'
const formStyle = makeStyles((theme) => ({
    commentField: {
        width: 'inherit',
        height: '40vh',
    },
}))

const validationSchema = yup.object({
    comment: yup
        .string()
        .max(800)
        .required('Comment should not be Empty if you are submitting'),
})
const ValidatingComment = ({ ...props }) => {
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
                        <ValidatingComment
                            variant='outlined'
                            name='comment'
                            placeholder='Write a Comment'
                            multiline={true}
                            rows={7}
                            rowsmax={10}
                            fullWidth={true}
                            value={values.comment}
                        />
                        <div style={{ marginTop: '0.8rem' }}>
                            <Button
                                variant='outlined'
                                disabled={isSubmitting}
                                type='submit'
                                style={{ backgroundColor: '#C47D1E' }}
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
