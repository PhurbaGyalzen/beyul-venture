import { withStyles } from '@material-ui/core/styles'
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    makeStyles,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            '& $cardImage': {
                filter: 'none',
                cursor: 'pointer',
                transform: 'scale(1.1)',
                transition: 'transform 0.9s ease-in-out, filter 2s',
            },
        },
    },
    cardImage: {
        height: '15rem',
        filter: 'brightness(0.6)',
        transform: 'scale(1)',
        transition: 'transform 2.5s ease-in-out, filter 2s',
    },
    imageContainer: {
        overflow: 'hidden',
    },
}))

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff3d47',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating)

const CustomLink = styled(Link)`
    text-decoration: none;
`

const Package = (props) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} md={4} sm={6}>
            <CustomLink to='package/1'>
                <Card className={classes.card}>
                    <div className={classes.imageContainer}>
                        <CardMedia
                            component='img'
                            className={classes.cardImage}
                            image={props.data.image}
                            title={props.data.title}
                        />
                    </div>

                    <CardContent>
                        <Typography
                            align='left'
                            style={{
                                fontSize: '0.8rem',
                            }}
                        >
                            Duration: {props.data.duration}
                        </Typography>
                        <Typography
                            variant='h5'
                            align='justify'
                            style={{ margin: '0.2rem auto' }}
                        >
                            {props.data.title}
                        </Typography>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            style={{
                                fontSize: '0.9rem',
                                color: 'grey',
                                gap: '1rem',
                            }}
                        >
                            <StyledRating
                                name='Average Rating'
                                value={props.data.rating}
                                precision={0.5}
                                readOnly
                                size='medium'
                            />
                            <Typography
                                variant='body2'
                                style={{
                                    fontSize: '1rem',
                                }}
                            >
                                Price: Rs. {props.data.price}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </CustomLink>
        </Grid>
    )
}

export default Package
