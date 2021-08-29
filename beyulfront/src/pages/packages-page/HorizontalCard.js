import { withStyles } from '@material-ui/core/styles'
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    makeStyles,
    Container,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        '&:hover': {
            '& $cardImage': {
                filter: 'none',
                cursor: 'pointer',
                transform: 'scale(1.1)',
                transition: 'transform 0.9s ease-in-out, filter 2s',
            },
        },
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
          },
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
          },
    },
    cardImage: {
        height: '15rem',
        width:'15rem',
        filter: 'brightness(0.6)',
        transform: 'scale(1)',
        transition: 'transform 2.5s ease-in-out, filter 2s',
    },
    imageContainer: {
        overflow: 'hidden',
    },
    descriptionSec:{
        maxHeight:'5rem',
        maxWidth:'500px',
        textOverflow:'ellipsis',
        fontSize:'.8rem',
        lineHeight:'1.5rem',
        color:'#545454'

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

export const HorizontalCard = ({ tagPackages, tagName }) => {
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} md={12} sm={6}>
                <CustomLink to='package/1'>
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
                            <Typography
                                variant='h4'
                                align='justify'
                                style={{
                                    fontWeight: 'bold',
                                    margin: '0.2rem auto',
                                }}
                            >
                                {tagPackages.title}
                            </Typography>
                            <Box
                                display='flex'
                                alignItems='center'
                                style={{
                                    fontSize: '0.9rem',
                                    color: 'grey',
                                }}
                            >
                                <StyledRating
                                    name='Average Rating'
                                    value={tagPackages.rating}
                                    precision={0.5}
                                    readOnly
                                    size='medium'
                                />
                                <Typography style={{fontSize:'.9rem',color:'#545454',marginLeft:'.7rem'}}>
                                    {tagPackages.ratedBy} <span style={{fontSize:'.7rem'}}>reviews</span>
                                </Typography>
                            </Box>
                            <Typography className={classes.descriptionSec}>{tagPackages.description}</Typography>
                            
                        </CardContent>
                        <CardContent>
                        <Typography
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        color: '#505050',
                                    }}
                                >
                                    Price: Rs. {tagPackages.currentPrice}
                                </Typography>
                        </CardContent>
                        
                    </Card>
                </CustomLink>
            </Grid>
        </>
    )
}
