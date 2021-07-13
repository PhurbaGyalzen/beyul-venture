import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Container,
    Paper,
    Typography,
    makeStyles,
    Divider,
    Breadcrumbs,
} from '@material-ui/core'

import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ImageDiv from './ImageDiv'
import { CommentSec } from './CommentSec'
import AllComments from 'components/CommentViewer'

const blogStyles = makeStyles((theme) => ({
    blogContainer: {
        maxWidth: '750px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    blogImageContainer: {
        width: '100%',
        height: 'auto',
    },
    imageCustomize: {
        maxWidth: '750px',
        width: 'inherit',
        height: 'inherit',
        maxHeight: '360px',
    },
    authorStyle: {
        textDecoration: 'None',
        color: '#fff',
        marginRight: '0.7rem',
        '&:hover': {
            textDecoration: 'Underline',
        },
    },
    dateStyle: {
        color: 'rgba(117,117,117,1)',
    },
    articleTitle: {
        fontWeight: '600',
        color: '#fff',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '400',
        },
    },
    articleInfo: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#fff',
        textTransform: 'uppercase',
        '& span': {
            marginRight: '1rem',
        },
    },

    articleDetail: {
        marginRight: '6vh',
        paddingTop: '75vh',
        padding: '0 4rem',
        [theme.breakpoints.down('sm')]: {
            marginRight: '2rem',
            paddingTop: '50vh',
            padding: '0 1rem',
        },
        // [theme.breakpoints.up('md')]:{
        //     padding: "0 2rem"
        // }
    },
    commentSection: {
        maxWidth: '750px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3rem',
        marginBottom: '3rem',
    },
}))

const BlogDetail = (props) => {
    const { blog_id } = useParams()
    const classes = blogStyles()
    const [blog, setBlog] = useState([])
    // const resp = await fetch('http://127.0.0.1:8000/api/blog/' + blog_id + '/')
    useEffect(async () => {
        const resp = await fetch(
            'http://127.0.0.1:8000/api/blog/mardi-himal-trek-travel-blog-in-the-shadow-of-the/',
        )
        const apiData = await resp.json();
        setBlog(apiData)
        console.log(apiData);
    }, [])
    console.log(blog.content)
    if (blog) {
        return (
            <>
                <Container
                    maxWidth='xl'
                    style={{
                        background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("/static/images/annapurna.jpg")`,
                        height: '100vh',
                        padding: '0',

                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    <Container maxWidth='lg' mt={10}>
                        <div className={classes.articleDetail}>
                            <div>
                                <Typography
                                    variant='h4'
                                    align='left'
                                    className={classes.articleTitle}
                                >
                                    {blog.description}
                                </Typography>
                            </div>
                            <div className={classes.articleInfo}>
                                <span>
                                    By:{' '}
                                    <Link className={classes.authorStyle}>
                                        Jaikant Shikre
                                    </Link>
                                </span>
                                <span>|</span>
                                <span>{blog.created_on}</span>
                            </div>
                        </div>
                    </Container>
                </Container>
                <Box mt={7} maxWidth='lg'>
                    <Container
                        className={classes.blogContainer}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></Container>
                </Box>

                <Divider
                    style={{
                        maxWidth: '700px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '3rem',
                    }}
                />

                <Container mt={6} mb={6} className={classes.commentSection}>
                    <CommentSec />
                </Container>
                <Container>
                    <AllComments />
                </Container>

                <Container>
                    <Typography variant='h5' gutterBottom>
                        Related Articles
                    </Typography>
                </Container>
            </>
        )
    } else {
        return null
    }
}

BlogDetail.propTypes = {}

export default BlogDetail
