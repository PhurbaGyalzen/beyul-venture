import React from 'react'
import PropTypes from 'prop-types'
import {Box, Container,Paper, Typography} from '@material-ui/core';
import ImageDiv from './ImageDiv';

const Blog = props => {
    const blog_id = props.match.params;
    console.log(blog_id)
    return (
        <>
        <Box>
            <Container>
                <ImageDiv />
                <Typography>{blog_id}</Typography>
                <Typography variant="h4">Through the trails of Annapurna</Typography>

            </Container>
        </Box>
        </>
    )
}

Blog.propTypes = {

}

export default Blog
