import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from 'components/Copyright'
import Lottie from 'react-lottie'
import animationData from 'img/lotties/42070-travel-is-fun.json'
import { SignInForm } from './SignInForm'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),

        marginLeft: theme.spacing(1),
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    imgContainer: {
        marginTop: theme.spacing(8),
        padding: '10%',
        width: '100%',
        height: '100%',
        backgroundSize: '100%',
    },
}))

export default function SignIn() {
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
    })
    const animation = useAnimation()
    const animation1 = useAnimation()
    useEffect(() => {
        if (inView) {
                animation1.start({
                    y: 0,
                    opacity:1,
                    transition: {
                        type: 'tween',
                        duration: 1,
                    },
                })
        }

        if (!inView) {
            animation1.start({
                y: '20vh',
                opacity:0,
            })
        }
    }, [inView])

    const classes = useStyles()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <Box pt={8}>
            <Container component='main' maxWidth='md'>
                <CssBaseline />
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box
                            ref={ref}
                            component={motion.div}
                            animate={animation1}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1.1 }}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <div className={classes.imgContainer}>
                                <Lottie
                                    options={defaultOptions}
                                    style={{
                                        maxHeight: '400',
                                        maxWidth: '400',
                                    }}
                                />
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            ref={ref}
                            component={motion.div}
                            animate={animation1}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1.1 }}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <div className={classes.paper}>
                                    <Typography component='h4' variant='h5'>
                                        SIGN IN
                                    </Typography>
                                    <SignInForm />
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>

                {/* <Box mt={8}>
            <Copyright /
          </Box> */}
            </Container>
        </Box>
    )
}
