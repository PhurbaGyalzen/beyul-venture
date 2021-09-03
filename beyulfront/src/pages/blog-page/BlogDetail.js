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
import { CommentForm } from 'components/comment/CommentForm'
import AllComments from 'components/comment/CommentViewer'
import FourZeroFour from 'pages/404'
import Avatar from '@material-ui/core/Avatar'

const blogStyles = makeStyles((theme) => ({
    blogContainer: {
        maxWidth: '750px',
        fontSize: '14px',
        lineHeight: '24px',
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

const formatDate = (datetime) => {
    let toConvert = new Date(datetime)
    return `${toConvert.toLocaleString('default', {
        month: 'long',
    })} ${toConvert.getDate()}, ${toConvert.getFullYear()}`
}

const BlogDetail = ({ details }) => {
    const { blogid } = useParams()
    const classes = blogStyles()
    const [blog, setBlog] = useState([])
    const [refreshComments, setRefreshComments] = useState(false)

    useEffect(async () => {
        const apiData = await ajax('/api/blog/' + blogid + '/')
        setBlog(apiData)
        if (apiData.error) return
    }, [])
    if (blog.error) {
        return <FourZeroFour />
    } else if (blog.status) {
        return (
            <>
                <Container
                    maxWidth='xl'
                    style={{
                        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("${blog.thumbnail}")`,
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
                                    {blog.title}
                                </Typography>
                            </div>
                            <div className={classes.articleInfo}>
                                <span style={{ display: 'inline-flex' }}>
                                    By:{' '}
                                    <Link
                                        to='/jaikant'
                                        className={classes.authorStyle}
                                    >
                                        {blog.author_name}
                                    </Link>
                                </span>
                                <span>|</span>
                                <span>
                                    Uploaded On: {formatDate(blog.created_on)}
                                </span>
                            </div>
                        </div>
                    </Container>
                </Container>
                <Box mt={7} maxWidth='lg'>
                    <Container
                        className={classes.blogContainer}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
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
                    <CommentForm />
                </Container>
                <Container>
                    <AllComments
                        blogUrl={blog.url}
                        comments={blog.comments}
                        refresh={refreshComments}
                        refreshSetter={setRefreshComments}
                    />
                </Container>

                <Container>
                    <Typography variant='h6' gutterBottom>
                        Related Articles
                    </Typography>
                </Container>
            </>
        )
    }
    return null
}

export default BlogDetail
