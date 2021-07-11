import { Formik } from 'formik';
import { TextField,
    makeStyles } from '@material-ui/core';
// import './index.css'

const formStyle = makeStyles((theme)=>({
    commentField:{
        width: "inherit",
        height: "40vh",
    },
    
}))

export const CommentSec = () => {
    const classes = formStyle();
    return (
        <div>
            <Formik
            initialValues={{ comment:"" }}
            onSubmit={(data)=>{
                console.log(data);
            }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} >
                        <TextField 
                        variant= "outlined"
                        name="comment"
                        placeholder="Write a Comment"
                        multiline={true}
                        rows={7}
                        rowsmax={10}
                        fullWidth={true}
                        // InputProps={{className: classes.commentField}}
                        value={values.comment} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        />
                    </form>
                )}

            </Formik>
        </div>
    )
}
