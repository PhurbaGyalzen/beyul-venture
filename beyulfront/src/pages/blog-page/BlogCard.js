import {
    Grid,
    Card,
    CardMedia,
    Typography,
    CardContent,
    Chip
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FancyLink from 'components/FancyLink'
import { useHistory } from "react-router-dom";

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


const UnorderList = styled.ul`
    margin: 0.7rem 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 0.5rem;
`

const Article = styled.article`
    margin: 0.5rem auto;
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

    const history = useHistory();
    return (
        <Article>
            <img src={thumbnail} />
            <div>
                <UnorderList>
                    {tags.map((tag) => {
                        const splitted = tag.split('/')
                        return (
                            <li key={tag}>
                                
                                <Chip
                                style={{backgroundColor:"#13181e", color:"#ffffff"}}
                                label = {splitted[splitted.length - 2]}
                                variant = "outlined"
                                onClick = {()=>{history.push(`/blog/tag/${splitted[splitted.length - 2]}`)}}
                                />
                                
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
        </Article>
    )
}
