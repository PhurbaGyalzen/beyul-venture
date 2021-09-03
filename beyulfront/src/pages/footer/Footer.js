import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
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
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

//All images import
import visa from 'img/visa.png'
import affilated from 'img/affilated.png'
import footMount from 'img/footer_mountain.jpg'

const useStyles = makeStyles((theme) => ({
    subscribeBtn: {
        width: '30%',
        '&:hover': {
            width: '35%',
        },
        transitionDuration: '700ms',
    },
}))

const linkVariants = {
    hover: {
        scale: 1.1,
        color: '#c47d1e',
        cursor: 'pointer',
        originX: 0,
    },

    transition: {
        type: 'spring',
        stiffness: 120,
    },
}

const FooterWithBg = styled.footer`
    background-image: url(${footMount});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const DarkerBox = styled(Box)`
    background-color: rgba(19, 24, 30, 0.85);
`

export const Footer = () => {
    const classes = useStyles()
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
                                variant='h6'
                                className='beyulLogo textHover'
                                style={{
                                    letterSpacing: '0.2rem',
                                    color: '#c47d1e',
                                }}
                            >
                                BEYUL VENTURE
                            </Typography>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link
                                    href='#'
                                    color='inherit'
                                    variants={linkVariants}
                                    whileHover='hover'
                                >
                                    <LocationOnIcon
                                        fontSize='small'
                                        style={{
                                            marginRight: 10,
                                            paddingTop: 5,
                                        }}
                                    />
                                    Dillibazar Kathmandu Nepal
                                </Link>
                            </motion.div>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link
                                    href='#'
                                    color='inherit'
                                    className='textHover'
                                >
                                    <CallIcon
                                        fontSize='small'
                                        style={{
                                            marginRight: 10,
                                            paddingTop: 5,
                                        }}
                                    />
                                    +977 9807631204
                                </Link>
                            </motion.div>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link
                                    href='#'
                                    color='inherit'
                                    className='textHover'
                                >
                                    <EmailIcon
                                        fontSize='small'
                                        style={{
                                            marginRight: 10,
                                            paddingTop: 5,
                                        }}
                                    />
                                    beyulventure@gmail.com
                                </Link>
                            </motion.div>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 5, lg: 5 }} mt={1}>
                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title='Facebook'
                                arrow
                            >
                                <Link href='#' style={{ marginRight: 10 }}>
                                    <FacebookIcon
                                        fontSize='small'
                                        className='textHover'
                                    />
                                </Link>
                            </Tooltip>

                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title='Twitter'
                                arrow
                            >
                                <Link href='#' style={{ marginRight: 10 }}>
                                    <TwitterIcon
                                        fontSize='small'
                                        className='textHover'
                                    />
                                </Link>
                            </Tooltip>

                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title='Instagram'
                                arrow
                            >
                                <Link href='#' style={{ marginRight: 10 }}>
                                    <InstagramIcon
                                        fontSize='small'
                                        className='textHover'
                                    />
                                </Link>
                            </Tooltip>

                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title='Youtube'
                                arrow
                            >
                                <Link href='#' style={{ marginRight: 10 }}>
                                    <YouTubeIcon
                                        fontSize='small'
                                        className='textHover'
                                    />
                                </Link>
                            </Tooltip>

                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title='Linkedln'
                                arrow
                            >
                                <Link href='#' style={{ marginRight: 10 }}>
                                    <LinkedInIcon
                                        fontSize='small'
                                        className='textHover'
                                    />
                                </Link>
                            </Tooltip>
                        </Box>
                    </Grid>

                    {/* useful links */}
                    <Grid item md={3} xs={11} sm={5} lg={3}>
                        <Box className='box'>
                            <Typography
                                variant='h6'
                                style={{
                                    wordSpacing: '0.1rem',
                                    letterSpacing: '0.1rem',
                                    color: '#c47d1e',
                                }}
                            >
                                USEFUL LINKS
                            </Typography>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link to='/' color='inherit'>
                                    Home
                                </Link>
                            </motion.div>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link to='/about' color='inherit'>
                                    About
                                </Link>
                            </motion.div>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link to='/blog' color='inherit'>
                                    Blog
                                </Link>
                            </motion.div>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link to='contact-us' color='inherit'>
                                    Contact Us
                                </Link>
                            </motion.div>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link to='/our-team' color='inherit'>
                                    Our Team
                                </Link>
                            </motion.div>
                        </Box>

                        <Box>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link
                                    to='/terms-and-conditions'
                                    color='inherit'
                                >
                                    Terms & Conditions
                                </Link>
                            </motion.div>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 5, lg: 5 }}>
                            <motion.div
                                variants={linkVariants}
                                whileHover='hover'
                                transition='transition'
                            >
                                <Link to='/privacy-policy' color='inherit'>
                                    Privacy Policy
                                </Link>
                            </motion.div>
                        </Box>
                    </Grid>

                    {/* subscribe for updates */}
                    <Grid item md={4} xs={11} sm={7} lg={4}>
                        <Box mb={{ xs: 5, sm: 5, md: 5 }}>
                            <Typography
                                variant='h6'
                                style={{
                                    color: '#cdcdcd',
                                }}
                            >
                                <EmailIcon
                                    fontSize='small'
                                    style={{ marginRight: 10, paddingTop: 5 }}
                                />
                                Subscribe to get the best package updates.
                            </Typography>

                            <TextField
                                variant='outlined'
                                placeholder='Enter your e-mail address'
                                style={{
                                    width: '90%',
                                    backgroundColor: '#ffffff',
                                    color: '#7f7f7f',
                                    marginTop: '1.25rem',
                                    borderRadius: '0.5rem',
                                }}
                            />
                            <br />
                            <Button
                                variant='outlined'
                                className={classes.subscribeBtn}
                                style={{
                                    marginTop: '1.25rem',
                                    height: 'auto',
                                    padding: '0.625rem',
                                    backgroundColor: '#c47d1e',
                                    color: '#ffffff',
                                }}
                            >
                                {' '}
                                SUBSCRIBE
                            </Button>
                        </Box>
                    </Grid>

                    {/* We accept card */}
                    <Grid item md={4} xs={11} sm={5} lg={4}>
                        <Box className='box'>
                            <Typography
                                variant='h6'
                                style={{
                                    letterSpacing: '0.1rem',
                                    color: '#c47d1e',
                                }}
                            >
                                WE ACCEPT
                            </Typography>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 10, lg: 10 }}>
                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title='Payment method'
                                arrow
                            >
                                <img
                                    src={visa}
                                    alt='visa'
                                    style={{
                                        marginRight: '0.625rem',
                                        width: '70%',
                                        height: 'auto',
                                    }}
                                />
                            </Tooltip>
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
                                    letterSpacing: '0.1rem',
                                    wordSpacing: '0.1rem',
                                    color: '#c47d1e',
                                }}
                            >
                                WE ARE AFFILIATED WITH
                            </Typography>
                        </Box>

                        <Box mb={{ xs: 5, sm: 5, md: 10, lg: 10 }}>
                            <Tooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                                title='Associated Company'
                                arrow
                            >
                                <img
                                    src={affilated}
                                    alt='companies we are affilated with'
                                    style={{
                                        marginRight: '0.625rem',
                                        width: '50%',
                                        height: 'auto',
                                    }}
                                />
                            </Tooltip>
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

                    <Grid item xs={11} xs={11} sm={6} md={12} lg={12} sm={12}>
                        <Box
                            style={{
                                textAlign: 'center',
                            }}
                            pt={{ xs: 0, sm: 6, md: 3 }}
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
