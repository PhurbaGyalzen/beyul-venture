import React from 'react'
import {
    Grid,
    Card,
    CardMedia,
    Box,
    Container,
    Typography,
    Link,
    CardActionArea,
    CardContent,
} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    button:{
        fontSize:'1.3rem',
        color:"#000000",
        '&:hover': {
            cursor: 'pointer',
            color:"#694311",
        },
    }

    
}))


export const DeveloperCard = (props) => {
    const classes = useStyles()
    return (
        <>
            <Grid item md={2} sm={5} xs={12} style={{ paddingBottom: '5%' }}>
                <Card>
                    <CardMedia
                        image={props.data.image}
                        style={{ height: '10rem', width: '100%' }}
                    />

                    <CardContent>
                        <Box align='Center'>
                            <Typography variant='body1' color='primary' style={{color:"#ffffff",fontSize:"1rem", lineHeight:"2rem", fontWeight:"bold"}}>
                                {props.data.post}
                            </Typography>
                        </Box>
                        <Box align='Center' fontWeight='500'>
                            <Typography variant='body1'>
                                {props.data.name}
                            </Typography>
                        </Box>
                        <Box align='Center' fontWeight='Light'>
                            <Typography variant='body1' style={{fontSize:"1rem", lineHeight:"1.658rem", color:"#13181e" }}>
                                {props.data.bio}
                            </Typography>
                        </Box>
                    </CardContent>

                    <Box align='Center' pb={1}>
                        <Link
                            href={props.data.fb}
                            style={{ paddingRight: '4%' }}
                        >
                            <FacebookIcon
                                className={classes.button}
                            />
                        </Link>
                        <Link
                            href={props.data.instagram}
                            style={{ paddingRight: '4%' }}
                        >
                            <TwitterIcon
                                className={classes.button}
                            />
                        </Link>
                        <Link
                            href={props.data.twitter}
                            style={{ paddingRight: '4%' }}
                        >
                            <InstagramIcon
                                className={classes.button}
                            />
                        </Link>
                    </Box>
                </Card>
            </Grid>
        </>
    )
}
