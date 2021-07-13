import { Formik, Field, Form } from 'formik';
import { 
    TextField,
    makeStyles,
    Button,
    Checkbox
} from '@material-ui/core'

import React from 'react'

export const BlogForm = () => {
    return (
        <>
            <Formik
            initialValues={{ title:"", 
            coverImg:"",
            description:"",
            content: "",
            status: "",
            tags: [],
            isDraft: false   
        }}
        
            onSubmit={(data, {setSubmitting,resetForm})=>{
                setSubmitting(true);
                //make async call
                console.log("Submit:",data);
                setSubmitting(false);
                resetForm();
            }}
            >
                {({ values, isSubmitting }) => (
                    <Form>
                        <Field name="title" 
                            type="input" 
                            variant="outlined" 
                            placeholder="Title" 
                            fullWidth 
                            as={TextField} />

                        <Field name="description" 
                        type="input" 
                        variant="outlined"
                        placeholder="Description"
                        multiline 
                        fullWidth rows={2} 
                        maxrows={3} 
                        as={TextField} />

                        <Field name="content" 
                        type="input" 
                        variant="outlined" 
                        placeholder="Content"
                        multiline 
                        fullWidth rows={25} 
                        rowsmax={27} 
                        as={TextField} />

                        <Field name="coverImg" 
                        type="file" 
                        variant="outlined" 
                        placeholder="Content" 
                        fullWidth
                        as={TextField}
                         />
                        <div>
                            <Field name="isDraft" type="checkbox" color="default" as={Checkbox} />
                            <label for="isDraft">Save as Draft</label>
                        </div>
                        <div>
                            <Field name="tags" type="checkbox" value="Adventure" as={Checkbox} />
                            <label for="tags">Adventure</label>
                            <Field name="tags" type="checkbox" value="Thrilling" as={Checkbox} />
                            <label for="tags">Thrilling</label>
                            <Field name="tags" type="checkbox" value="Cultural" as={Checkbox} />
                            <label for="tags">Cultural</label>
                            <Field name="tags" type="checkbox" value="Bone wrenching" as={Checkbox} />
                            <label for="tags">Bone Wrenching</label>
                        </div>


                    <div style={{marginTop:"0.8rem"}}>
                        
                        <Button 
                        variant="outlined"
                        disabled={isSubmitting} 
                        type="submit">
                            Post
                        </Button>
                    </div>
                    <pre>
                        {JSON.stringify(values, null, 2)}
                    </pre>
                    </Form>
                )}

            </Formik>
        </>
    )
}


