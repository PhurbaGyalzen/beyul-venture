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
    linkTitle:{
        '&:hover':{
            textDecoration:'underline'
        }
    }
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

export const PackageCard = ({ tagPackages }) => {
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} md={3} sm={6}>
                
                    <Card className={classes.card}>
                        <div className={classes.imageContainer}>
                            <CardMedia
                                component='img'
                                className={classes.cardImage}
                                image={tagPackages.packageImage}
                                title={tagPackages.title}
                            />
                        </div>

                        <CardContent>
                            <Typography
                                align='left'
                                style={{
                                    color: '#9d9fa5',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                Duration: {tagPackages.duration} days
                            </Typography>
                            <Link to={`/package/${tagPackages.title}`}>
                                <Typography
                                    variant='h5'
                                    align='justify'
                                    style={{
                                        fontWeight: 'bold',
                                        margin: '0.2rem auto',
                                    }}
                                    className={classes.linkTitle}
                                >
                                    {tagPackages.title}
                                </Typography>
                            </Link>

                            
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
                                    value={tagPackages.rating}
                                    precision={0.5}
                                    readOnly
                                    size='medium'
                                />
                                <Typography
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        color: '#505050',
                                    }}
                                >
                                    Price: Rs. {tagPackages.currentPrice}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                
            </Grid>
        </>
    )
}
