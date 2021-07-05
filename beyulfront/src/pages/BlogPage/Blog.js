import React from 'react'
import PropTypes from 'prop-types'
import {Box, Container,Paper, Typography, makeStyles} from '@material-ui/core';
import ImageDiv from './ImageDiv';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const blogStyles = makeStyles((theme)=>({
    blogContainer:{
        maxWidth: '750px',
        marginLeft: 'auto',
        marginRight: 'auto'

    },
    blogImageContainer:{
        width:'100%',
        height: 'auto'
    },
    imageCustomize:{
        maxWidth: '750px',
        width:"inherit",
        height:"inherit",
        maxHeight:'360px',
    }

}))


const Blog = props => {
    const { blog_id } = useParams();
    console.log(blog_id)
    const classes = blogStyles()
    return (
        <>
        <Box mt={5}> 
            <Container className={classes.blogContainer}>
                <div className={classes.blogImageContainer}>
                    <img src={"/static/images/annapurna.jpg"} className={classes.imageCustomize} />
                </div>
                <Typography>{blog_id}</Typography>
                <Typography variant="h4" gutterBottom>Through the trails of Annapurna</Typography>
                <Typography variant="subtitle2" gutterBottom>
                    <Link>Jaikant Shikre</Link>
                    <span>July 4,2021</span>
                </Typography>
                <Typography align="justify" paragraph>
                The legendary Annapurna region is the most diverse and popular trekking area in Nepal. From the full three-week Annapurna Circuit, which stretches into the historic Mustang region to short three-day treks, there's a trek suitable for everyone here. 
Mountains & Rivers in the Annapurna Region As the name suggests, the centre piece of this part of Nepal is the range of mountains that includes 
</Typography>
<div className={classes.blogImageContainer}>
    <img src={"/static/images/annapurna5.jpg"} className={classes.imageCustomize} />
    </div>

<Typography align="justify" paragraph>
Annapurna I, the first of the 8,000 m peaks to be climbed. Also included in this region is yet another 8,000 m giant, Dhaulagiri, which is located west of Annapurna I.
Between these two mountains lies the valley of the Kali-Gandaki River, the deepest gorge in the world. Trekkers encounter the interesting Thakali people in this region. They are known for being good in business ventures and their home cooking is relished by both tourists and the Nepali people in general
Views of lush, fertile farmland and undisturbed natural forests, snow-capped mountains, and encounters with a mixture of many ethnic communities, all add up to a diverse range of experiences that make the Annapurna trek one of the most satisfying treks among all destinations in Nepal. 
</Typography>
<div className={classes.blogImageContainer}>
                    <img src={"/static/images/annapurna6.jpg"} className={classes.imageCustomize} />
                </div>
<Typography align="justify" paragraph>
The Annapurna chain of mountains lies inland, causing a large area including Manang and Mustang to fall in the rain shadow, where the ideal time for trekking is during the monsoon as there is no rainfall and temperatures are moderate in these areas.
These parts are considerably drier than the southern slopes of the mountains. This leads to an arid landscape that is desert-like and very different from regions lower down where there are green pastures and fertile farmland.  
                </Typography>
                <div className={classes.blogImageContainer}>
                    <img src={"/static/images/annapurna7.jpg"} className={classes.imageCustomize} />
                </div>
            </Container>
        </Box>
        </>
    )
}

Blog.propTypes = {

}

export default Blog
