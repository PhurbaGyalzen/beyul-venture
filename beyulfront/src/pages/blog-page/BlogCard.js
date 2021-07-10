import {
    Grid,
    Card,
    CardMedia,
    Typography,
    CardContent,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FancyLink from 'components/FancyLink'

/*
const cardStyle = makeStyles((theme) => ({
    cardStyle: {
        height: '100%',
    },
    cardImage: {
        height: '12rem',
    },
}))

export const BlogCard = (props) => {
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

const Title = styled.h2`
    margin: 0.5rem auto;
    font-family: 'PublicoHead';
    font-size: 2rem;
`

export const BlogCard = ({
    slug,
    thumbnail,
    title,
    authorId,
    authorName,
    description,
}) => {
    return (
        <article>
            <Link to={'/blog/' + slug}>
                <img src={thumbnail} />
                <div>
                    <Title>{title}</Title>
                    <p>
                        {/*<FancyLink href='#'>{author}</FancyLink>*/}
                        <FancyLink to={'/author/' + authorId}>
                            <Typography color='textPrimary'>
                                {authorName}
                            </Typography>
                        </FancyLink>
                    </p>
                    <summary>{description}</summary>
                </div>
            </Link>
        </article>
    )
}
