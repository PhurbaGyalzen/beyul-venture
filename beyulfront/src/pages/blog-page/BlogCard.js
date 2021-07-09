import {
    Grid,
    Card,
    CardMedia,
    Typography,
    CardContent,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core'

const cardStyle = makeStyles((theme) => ({
    cardStyle: {
        borderRadius: 0,
    },
    cardImage: {
        height: '12rem',
    },
}))

/*export const BlogCard = (props) => {
    const classes = cardStyle();
    return (
        <>
        <Grid item xs={12} md={3} sm={6}>
            <Card className={classes.cardStyle}>
                <CardMedia component='img'
                className={classes.cardImage}
                image={props.data.thumbnail}
                title={props.data.title}
                />
                <CardContent>
                    <Typography variant="h6">
                        {props.data.title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </>
    )
}*/

export const BlogCard = ({ slug, thumbnail, title, author, description }) => {
    const classes = cardStyle()
    return (
        <article>
            <a href={'/blog/' + slug}>
                <Card className={classes.cardStyle}>
                    <CardMedia
                        component='img'
                        className='wide-img'
                        image={thumbnail}
                        title={title}
                    />
                    <CardContent>
                        <Typography variant='h5'>{title}</Typography>
                        <p class='author'>{author}</p>
                        <summary>{description}</summary>
                    </CardContent>
                </Card>
            </a>
        </article>
    )
}
