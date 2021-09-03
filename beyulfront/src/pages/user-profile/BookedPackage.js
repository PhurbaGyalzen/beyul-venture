import { useState } from 'react'
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
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { datas } from './BookedPackageData'
import Popper from '@material-ui/core/Popper'

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

export const BookedPackage = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popper' : undefined

    const [packages, setPackages] = useState(datas)
    return (
        <>
            <Grid container className=''>
                <Grid item className='section_title' xs={12}>
                    <Typography variant='h4'>My Packages</Typography>
                    {packages.map((data) => (
                        <div style={{ margin: '5%' }}>
                            {/* <CustomLink to='package/1'> */}
                            <Card
                                className={classes.card}
                                onClick={handleClick}
                            >
                                <div className={classes.imageContainer}>
                                    <CardMedia
                                        component='img'
                                        className={classes.cardImage}
                                        image={data.packageImage}
                                        title={data.title}
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
                                        Duration: {data.duration} days
                                    </Typography>
                                    <Typography
                                        variant='h5'
                                        align='justify'
                                        style={{
                                            fontWeight: 'bold',
                                            margin: '0.2rem auto',
                                        }}
                                    >
                                        {data.title}
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
                                            value={data.rating}
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
                                            Price: Rs. {data.currentPrice}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* <Popper id={id} open={open} anchorEl={anchorEl}>
                                <div className={classes.paper}>
                                    The content of the Popper.
                                </div>
                            </Popper> */}
                            {/* </CustomLink> */}
                        </div>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}
