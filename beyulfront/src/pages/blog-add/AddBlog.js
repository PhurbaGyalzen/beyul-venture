import React from 'react'
import {
    Box,
    Container,
    Paper,
    Typography,
    makeStyles,
} from '@material-ui/core'
import { BlogForm } from './BlogForm'
export const AddBlog = () => {
    return (
        <>
            <Box mt={5}>
                <Container>
                    <Typography variant='h4'>Write a Blog</Typography>

                    <BlogForm />
                </Container>
            </Box>
        </>
    )
}
