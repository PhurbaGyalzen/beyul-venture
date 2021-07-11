import { Formik } from 'formik'
import { TextField, makeStyles, Button } from '@material-ui/core'

const formStyle = makeStyles((theme) => ({
    commentField: {
        width: 'inherit',
        height: '40vh',
    },
}))

export const CommentSec = () => {
    const classes = formStyle()
    return (
        <div>
            <Formik
                initialValues={{ comment: '' }}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    //make async call
                    console.log('Submit:', data)
                    setSubmitting(false)
                    resetForm()
                }}
            >
                {({
                    values,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant='outlined'
                            name='comment'
                            placeholder='Write a Comment'
                            multiline={true}
                            rows={7}
                            rowsmax={10}
                            fullWidth={true}
                            // InputProps={{className: classes.commentField}}
                            value={values.comment}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                    </form>
                )}
            </Formik>
        </div>
    )
}
