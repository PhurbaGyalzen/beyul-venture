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
    CardActions,
    CardContent,
    Button
} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import { makeStyles} from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    button:{
        fontSize:'1.3rem',
        color:"#000000",
        '&:hover': {
            cursor: 'pointer',
            color:"#694311",
        },
    },

    mainCard:{
        height:"100%"
    },

    cardImg:{
        width:"100%",

    }

    
}))


export const DeveloperCard = (props) => {
    const classes = useStyles()
    return (
        <>
            <Grid item md={2} sm={5} xs={11} style={{ paddingBottom: '5%' }}>
                <Card className={classes.mainCard}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="100%"
                        image={props.data.image}
                        title="Contemplative Reptile"
                        className={classes.cardImg}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="h2" style={{color:"#694311",fontSize:"1rem", lineHeight:"1.658rem", fontWeight:"bold"}}>
                            {props.data.post}
                        </Typography>

                        <Typography gutterBottom component="h3" color="textSecondary" style={{fontSize:"0.8rem", lineHeight:"2rem"}}>
                            {props.data.name}
                        </Typography>

                        <Typography variant="body2" component="p" style={{color:"#13181e",fontSize:"1rem", lineHeight:"1.658rem"}}>
                            {props.data.bio}
                        </Typography>
                        </CardContent>
                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Facebook" arrow>
                            <Link
                                    href={props.data.fb}
                                    style={{ paddingLeft: '5%', paddingBottom:'5%'}}
                                >
                                    <FacebookIcon
                                        className={classes.button}
                                    />
                            </Link>
                        </Tooltip>

                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Instagram" arrow>

                            <Link
                                href={props.data.instagram}
                                style={{ paddingLeft: '5%',  paddingBottom:'5%' }}
                            >
                                <InstagramIcon
                                    className={classes.button}
                                />
                            </Link>

                        </Tooltip>

                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Twitter" arrow>
                            <Link
                                href={props.data.twitter}
                                style={{ paddingLeft: '5%',  paddingBottom:'5%' }}
                            >
                                <TwitterIcon
                                    className={classes.button}
                                />
                            </Link>
                        </Tooltip>
                    </CardActionArea>
                </Card>
                
            </Grid>
        </>
    )
}
