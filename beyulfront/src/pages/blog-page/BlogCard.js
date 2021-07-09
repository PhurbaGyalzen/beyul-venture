import {
    Grid,
    Card,
    CardMedia,
    Typography,
    CardContent,
} from '@material-ui/core'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'

const cardStyle = makeStyles((theme) => ({
    cardStyle: {
        height: '100%',
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

const Title = styled.h2`
    margin: 0.5rem auto;
    font-family: 'PublicoHead';
    font-size: 2rem;
`

const FancyLink = styled.a`
    color: black;
    padding: 1px 3px;
    background: linear-gradient(#0470ffab, #0954fcc7) bottom no-repeat;
    background-size: 100% 2px;
    transition: background-size 0.2s ease-in, color 0.2s ease-in;
    &:hover {
        color: white;
        transition: background-size 0.1s ease-in, color 0.1s ease-in;
        background-size: 100% 100%;
    }
`

export const BlogCard = ({ slug, thumbnail, title, author, description }) => {
    return (
        <article>
            <a href={'/blog/' + slug}>
                <img src={thumbnail} />
                <div style={{ color: 'black' }}>
                    <Title>{title}</Title>
                    <p>
                        <FancyLink href='#'>{author}</FancyLink>
                    </p>
                    <summary>{description}</summary>
                </div>
            </a>
        </article>
    )
}
