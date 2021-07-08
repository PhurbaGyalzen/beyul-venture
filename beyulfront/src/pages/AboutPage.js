import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
} from '@material-ui/core'

import aboutUs from 'img/aboutUs_2.png'
import globe_1 from 'img/globe.jpg'
import price_1 from 'img/last1.png'
import review_1 from 'img/review3.png'
import save_1 from 'img/savePayment.png'

const About = () => {
    return (
        <>
            <main>
               
               
                <div style={{display:'flex', direction:'row', margin:'5rem 5rem 0rem 5rem'}}>
                        <Typography paragraph align='justify'
                        style={{marginRight:'2rem' }}>
                             <Typography
                                variant='h4'
                                align='start'
                                color='primary'
                                style={{marginTop:'1rem',marginBottom: '1rem' }}
                            >
                                About us
                            </Typography>
                            Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum. It was popularised
                            in the 1960s with the release
                        
                        </Typography>
                        <img
                            src={aboutUs}
                            style={{ width: '40rem', height: '25rem' }}
                        />
                        
                </div>
                <div style={{display:'flex', direction:'row', margin:'2rem 5rem 2rem'}}>
                        
                        <img
                            src={aboutUs}
                            style={{ width: '40rem', height: '25rem' ,marginRight:'2rem'}}
                        />
                        <Typography paragraph align='justify'
                        >
                             <Typography
                                variant='h4'
                                align='start'
                                color='primary'
                                style={{marginTop:'1rem',marginBottom: '1rem' }}
                            >
                                Our History
                            </Typography>
                            Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum. It was popularised
                            in the 1960s with the release
                        
                        </Typography>
                        
                </div>
                <div style={{ backgroundColor: '#d1e2f0' }}>
                    <Typography
                        variant='h5'
                        color='primary'
                        align='center'
                        style={{ padding: '2.5rem 0 0rem' }}
                    >
                        Why book with us?
                    </Typography>
                    <Grid
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            margin: '0 3rem 0rem 3rem ',
                            padding:' 1.3rem 3rem 3rem 3rem'
                        }}
                    >
                        <Grid item>
                            <Card
                                style={{ width: '15rem', height: '18.9rem' }}
                                align='center'
                                sm={12}
                            >
                                <CardMedia
                                    image={globe_1}
                                    style={{ height: '6rem', width: '6rem' }}
                                />

                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography variant='h6' color='primary'>
                                        Global Reach
                                    </Typography>
                                    <Typography style={{ fontSize: '14px' }}>
                                        No matter where in the world you want
                                        to go, Beyul.com has everything you
                                        need. From flights and hotels to car
                                        rental and tickets to local
                                        attractions, our extensive network
                                        connects all corners of the globe
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card
                                style={{ width: '15rem', height: '18.9rem' }}
                                align='center'
                            >
                                <CardMedia
                                    image={price_1}
                                    style={{
                                        margin: '1.1rem 0 1.3rem',
                                        height: '3.5rem',
                                        width: '4.3rem',
                                    }}
                                />
                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography variant='h6' color='primary'>
                                        Compitative prices
                                    </Typography>
                                    <Typography style={{ fontSize: '14px' }}>
                                        Beyul.com has over 400 hundreds
                                        members, which allows it to offer
                                        competitive prices - so you can save
                                        more on your travels every day. Sign up
                                        for even bigger discounts!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* third */}
                        <Grid item>
                            <Card
                                style={{ width: '15rem', height: '18.9rem' }}
                                align='center'
                            >
                                <CardMedia
                                    image={review_1}
                                    style={{
                                        margin: '0.6rem 0 0.7rem',
                                        height: '4.5rem',
                                        width: '6rem',
                                    }}
                                />

                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography variant='h6' color='primary'>
                                        Excellent service
                                    </Typography>
                                    <Typography style={{ fontSize: '14px' }}>
                                        With Beyul.com, you always travel
                                        worry-free, knowing you can count on us
                                        when needed. Our customer service team
                                        speaks multiple languages. Customer
                                        service in English is available 24/7 by
                                        phone, e-mail and directly via our
                                        mobile app.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item>
                            <Card
                                style={{ width: '15rem', height: '18.9rem' }}
                                align='center'
                            >
                                <CardMedia
                                    image={save_1}
                                    style={{
                                        margin: '0.8rem 0 0.9rem',
                                        height: '4rem',
                                        width: '4rem',
                                    }}
                                />

                                <CardContent style={{ paddingTop: '0' }}>
                                    <Typography variant='h6' color='primary'>
                                        Save Payment
                                    </Typography>
                                    <Typography style={{ fontSize: '14px' }}>
                                        No matter where in the world you want
                                        to go, Beyul.com has everything you
                                        need. From flights and hotels to car
                                        rental and tickets to local
                                        attractions, our extensive network
                                        connects all corners of the globe
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </main>
        </>
    )
}

export default About
