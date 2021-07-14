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
    margin: 1rem 0;
    font-family: 'PublicoHead';
    font-size: 2rem;
`

const Banner = styled.div`
    display: inline;
    background-color: black;
    color: white;

    &::before {
        content: '\\2003'; /* Em-space which is a square */
        display: inline-block;
        clip-path: polygon(-1px -1px, 102% -1px, 0 50%, 102% 102%, -1px 102%);
        background-color: white;
    }
    &::after {
        content: '\\2003';
        display: inline-block;
        clip-path: polygon(102% -1px, 0 -1px, 102% 50%, 0 102%, 102% 102%);
        background-color: white;
    }
`

const UnorderList = styled.ul`
    margin: 0.7rem 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 0.5rem;
`

export const BlogCard = ({
    slug,
    thumbnail,
    title,
    authorId,
    authorName,
    likes,
    tags,
    description,
}) => {
    return (
        <article>
            <img src={thumbnail} />
            <div>
                <UnorderList>
                    {tags.map((tag) => {
                        const splitted = tag.split('/')
                        return (
                            <li key={tag}>
                                <Link to={tag}>
                                    <Banner>
                                        {splitted[splitted.length - 2]}
                                    </Banner>
                                </Link>
                            </li>
                        )
                    })}
                </UnorderList>
                <Link to={'/blog/' + slug}>
                    <Title>{title}</Title>
                </Link>
                <div>
                    {/*<FancyLink href='#'>{author}</FancyLink>*/}
                    <FancyLink to={'/author/' + authorId}>
                        <Typography color='textPrimary'>
                            {authorName}
                        </Typography>
                    </FancyLink>
                </div>
                <summary>{description}</summary>
            </div>
        </article>
    )
}
