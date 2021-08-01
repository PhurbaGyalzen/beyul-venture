import React from 'react'
import { Box, Grid, Typography, Link } from '@material-ui/core'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Copyright from 'components/Copyright'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import './index.css'

//All images import
import visa from 'img/visa.png'
import affilated from 'img/affilated.png'
import footMount from 'img/footer_mountain.jpg'

const FooterWithBg = styled.footer`
    background-image: url(${footMount});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const DarkerBox = styled(Box)`
    background-color: rgba(0, 0, 0, 0.38);
`

export const Footer = () => {
    return (
        <FooterWithBg>
            <DarkerBox color='white' mt={10}>
                <Grid
                    container
                    justifyContent='space-around'
                    className='mainContainer'
                >
                    {/* Beyul Venture office and social media */}
                    <Grid item xs={11} md={4} sm={7} lg={4}>
                        <Box className='box'>
                            <Typography
                                className='beyulLogo textHover'
                                style={{
                                    fontSize: '1rem',
                                    lineHeight: '2rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.2rem',
                                    color: '#c47d1e',
                                }}
                            >
                                BEYUL VENTURE
                            </Typography>
                        </Box>

                        <Box>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover'
                            >
                                <LocationOnIcon
                                    fontSize='small'
                                    style={{ marginRight: 10, paddingTop: 5 }}
                                />
                                Dillibazar Kathmandu Nepal
                            </Link>
                        </Box>

                        <Box>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover'
                            >
                                <CallIcon
                                    fontSize='small'
                                    style={{ marginRight: 10, paddingTop: 5 }}
                                />
                                +977 9807631204
                            </Link>
                        </Box>

                        <Box>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover'
                            >
                                <EmailIcon
                                    fontSize='small'
                                    style={{ marginRight: 10, paddingTop: 5 }}
                                />
                                beyulventure@gmail.com
                            </Link>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 5, lg: 5 }} mt={1}>
                            <Link href='#' style={{ marginRight: 10 }}>
                                <FacebookIcon
                                    fontSize='small'
                                    className='textHover'
                                />
                            </Link>
                            <Link href='#' style={{ marginRight: 10 }}>
                                <TwitterIcon
                                    fontSize='small'
                                    className='textHover'
                                />
                            </Link>
                            <Link href='#' style={{ marginRight: 10 }}>
                                <InstagramIcon
                                    fontSize='small'
                                    className='textHover'
                                />
                            </Link>
                            <Link href='#' style={{ marginRight: 10 }}>
                                <YouTubeIcon
                                    fontSize='small'
                                    className='textHover'
                                />
                            </Link>

                            <Link href='#' style={{ marginRight: 10 }}>
                                <LinkedInIcon
                                    fontSize='small'
                                    className='textHover'
                                />
                            </Link>
                        </Box>
                    </Grid>

                    {/* useful links */}
                    <Grid item md={3} xs={11} sm={5} lg={3}>
                        <Box className='box'>
                            <Typography
                                variant='h6'
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    lineHeight: '2rem',
                                }}
                            >
                                Useful Links
                            </Typography>
                        </Box>

                        <Box>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover'
                            >
                                Home
                            </Link>
                        </Box>

                        <Box>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover '
                            >
                                About
                            </Link>
                        </Box>

                        <Box>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover'
                            >
                                Blog
                            </Link>
                        </Box>

                        <Box>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover'
                            >
                                Contact Us
                            </Link>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 5, lg: 5 }}>
                            <Link
                                href='#'
                                color='inherit'
                                className='links textHover'
                            >
                                Our Team
                            </Link>
                        </Box>
                    </Grid>

                    {/* sign up for updates */}
                    <Grid item md={4} xs={11} sm={7} lg={4}>
                        <Box mb={{ xs: 5, sm: 5, md: 5 }}>
                            <Typography
                                variant='h6'
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    lineHeight: '2rem',
                                }}
                            >
                                <EmailIcon
                                    fontSize='small'
                                    style={{ marginRight: 10, paddingTop: 5 }}
                                />
                                Stay up to date on the latest from Beyul
                                Venture
                            </Typography>

                            <TextField
                                variant='outlined'
                                placeholder='Enter your e-mail address'
                                style={{
                                    width: '90%',
                                    backgroundColor: '#ffffff',
                                    color: '#7f7f7f',
                                    marginTop: '1.25rem',
                                }}
                            />
                            <br />
                            <Button
                                variant='outlined'
                                style={{
                                    marginTop: '1.25rem',
                                    width: '30%',
                                    backgroundColor: '#c47d1e',
                                    height: 'auto',
                                    padding: '0.625rem',
                                    color: '#ffffff',
                                }}
                            >
                                {' '}
                                Sign Up
                            </Button>
                        </Box>
                    </Grid>

                    {/* We accept card */}
                    <Grid item md={4} xs={11} sm={5} lg={4}>
                        <Box className='box'>
                            <Typography
                                variant='h6'
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    lineHeight: '2rem',
                                }}
                            >
                                We accept
                            </Typography>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 10, lg: 10 }}>
                            <img
                                src={visa}
                                alt='visa'
                                style={{
                                    marginRight: '0.625rem',
                                    width: '70%',
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* We affilated with company */}
                    <Grid
                        item
                        md={4}
                        xs={11}
                        sm={7}
                        lg={4}
                        mb={{ xs: 5, sm: 5, md: 10, lg: 10 }}
                    >
                        <Box className='box'>
                            <Typography
                                variant='h6'
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    lineHeight: '2rem',
                                }}
                            >
                                We are affilated with
                            </Typography>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 10, lg: 10 }}>
                            <img
                                src={affilated}
                                alt='companies we are affilated with'
                                style={{
                                    marginRight: '0.625rem',
                                    width: '50%',
                                    height: 'auto',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* One extra col */}
                    <Grid
                        item
                        md={3}
                        xs={11}
                        sm={4}
                        lg={3}
                        mb={{ xs: 5, sm: 5, md: 10, lg: 10 }}
                    ></Grid>

                    <Divider
                        style={{
                            backgroundColor: '#c47d1e',
                            width: '98%',
                            marginTop: '0.625rem',
                            height: '0.3125rem',
                        }}
                    />

                    <Grid item md={1} xs={11} sm={6} mb={{ md: 5 }}>
                        <Box
                            style={{
                                marginRight: '0.625rem',
                                marginTop: '0.625rem',
                            }}
                        >
                            <Link
                                href='#'
                                style={{ color: '#c47d1e' }}
                                className='links textHover'
                            >
                                Terms & Conditions
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item md={1} xs={11} sm={6} mb={{ md: 5 }}>
                        <Box
                            style={{
                                marginRight: '0.625rem',
                                marginTop: '0.625rem',
                            }}
                        >
                            <Link
                                href='#'
                                style={{ color: '#c47d1e' }}
                                className='links textHover'
                            >
                                Privacy Policy
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item md={1} xs={11} sm={6} mb={{ md: 5 }}>
                        <Box
                            style={{
                                marginRight: '0.625rem',
                                marginTop: '0.625rem',
                            }}
                        >
                            <Link
                                href='#'
                                style={{ color: '#c47d1e' }}
                                className='links textHover'
                            >
                                We are Hiring
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item md={1} xs={11} sm={6} mb={{ md: 5 }}>
                        <Box
                            style={{
                                marginRight: '0.625rem',
                                marginTop: '0.625rem',
                            }}
                        >
                            <Link
                                href='#'
                                style={{ color: '#c47d1e' }}
                                className='links textHover'
                            >
                                Share Your Travel Experience
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={11} xs={11} sm={6} md={5} lg={7} sm={6}>
                        <Box
                            style={{ color: '#c47d1e', marginTop: '0.625rem' }}
                            pt={{ xs: 0, sm: 6, md: 5 }}
                            pb={{ xs: 0, sm: 0 }}
                        >
                            <Copyright />
                        </Box>
                    </Grid>
                </Grid>
            </DarkerBox>
        </FooterWithBg>
    )
}
