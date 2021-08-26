import {
    Grid,
    Card,
    CardMedia,
    Typography,
    CardContent,
    Chip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FancyLink from 'components/FancyLink'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'


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
    authorImage,
    likes,
    tags,
    description,
}) => {
    const history = useHistory()
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
                                    style={{
                                        backgroundColor: '#13181e',
                                        color: '#ffffff',
                                    }}
                                    label={splitted[splitted.length - 2]}
                                    variant='outlined'
                                    onClick={() => {
                                        history.push(
                                            `/blog/tag/${
                                                splitted[splitted.length - 2]
                                            }`,
                                        )
                                    }}
                                />
                            </li>
                        )
                    })}
                </UnorderList>
                <Link to={'/blog/' + slug}>
                    <Title>
                        {' '}
                        <Typography variant='h4'>{title}</Typography>
                    </Title>
                </Link>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {/*<FancyLink href='#'>{author}</FancyLink>*/}
                    {(() => {
                        if (authorImage == '') {
                            let name = review.user
                            let matches = name.match(/\b(\w)/g)
                            console.log(matches)
                            let firstLast =
                                matches[0] + matches[matches.length - 1]
                            console.log(firstLast)
                            const colors = ["#e91e63", "#4caf50", "#ff5722", "#673ab7", "#757575"];
                            const random = Math.floor(Math.random() * colors.length);
                            return <Avatar style={{backgroundColor:colors[random],color:'white'}}>{firstLast}</Avatar>
                        } else {
                            return (
                                <Avatar alt={authorName} src={authorImage} />
                            )
                        }
                    })()}
                    <FancyLink to={'/author/' + authorId}>
                        <Typography
                            variant='body1'
                            style={{ paddingLeft: '1rem' }}
                        >
                            {authorName}
                        </Typography>
                    </FancyLink>
                </div>
                <summary>
                    {' '}
                    <Typography variant='body2'>{description}</Typography>
                </summary>
            </div>
        </Article>
    )
}
