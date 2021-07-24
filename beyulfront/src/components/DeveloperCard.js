import React from 'react'
import { Grid,Card, CardMedia,Box,Container,Typography,Link,CardActionArea,CardContent } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'


export const DeveloperCard = (props) => {
    return (
        <>
            <Grid item md={2}  sm={5} xs={12} style={{paddingBottom:'2%'}}>

                                
            <Card>
                <CardMedia
                image={props.data.image}
                style={{ height: '10rem', width: '100%' }}
                />

                
                <CardContent>
                    <Box align='Center'>
                        <Typography  variant='h9' color='Primary'>
                            {props.data.post}
                        </Typography>
                    </Box>
                    <Box align='Center' fontWeight='500'>
                        <Typography variant='h8'  >
                            {props.data.name}
                        </Typography>
                    </Box>
                    <Box align='Center' fontWeight='Light'>
                        <Typography  variant='h9'>
                        {props.data.bio}
                        </Typography>
                    </Box>

                </CardContent>
                
                    <Box align='Center' pb={1}>
                        <Link href={props.data.fb} style={{paddingRight:'4%'}}>
                            <FacebookIcon
                                fontSize='small'
                                style={{ color: '#4267B2' }}
                            />
                        </Link>
                        <Link href={props.data.instagram} style={{paddingRight:'4%'}}>
                            <TwitterIcon
                                fontSize='small'
                                style={{ color: '#1DA1F2' }}
                            />
                        </Link>
                        <Link href={props.data.twitter} style={{paddingRight:'4%'}}>
                            <InstagramIcon
                                fontSize='small'
                                style={{ color: '#DD2A7B' }}
                            />
                        </Link>
                    </Box>

                
                
                </Card>


            </Grid>
        </>
    )
}
