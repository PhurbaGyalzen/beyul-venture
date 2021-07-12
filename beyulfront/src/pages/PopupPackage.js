import React from 'react'
import { Box, Paper, Typography, Button, TextField } from '@material-ui/core'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import popupImg from 'img/travel.png'
import { makeStyles } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { Spring, useSpring, animated } from '@react-spring/web'
import { blue, purple } from '@material-ui/core/colors'

//Defining custom styles for popup package
const useStyles = makeStyles((theme) => ({
    popupDialog: {
        height: 600,
    },

    popupBox: {
        maxWidth: 650,
        padding: 10,
    },

    popupImg: {
        width: '100%',
        backgroundSize: 'cover',
        height: 300,
        marginBottom: 15,
        '&:hover': {
            cursor: 'pointer',
        },
    },

    freeGuideButton: {
        padding: 8,
        width: 200,
        marginLeft: 15,
    },

    emailField: {
        width: 250,
        '&:hover': {
            backgroundColor: blue[50],
        },
    },

    bookNowButton: {
        marginTop: 30,
        marginBottom: 10,
        marginRight: 15,
        width: 180,
    },

    cancelButton: {
        marginTop: 20,
    },

    popupText: {
        fontWeight: 'bold',
    },
}))

// our PopupPackage component goes here
const PopupPackage = () => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClickClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        const interval = setTimeout(handleClickOpen, 3000)
        return () => {
            clearTimeout(interval)
        }
    }, [])

    const props = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 },
        config: { duration: 400 },
    })
    return (
        <>
            <Dialog
                open={open}
                className={classes.popupDialog}
                onClose={handleClickClose}
            >
                <Box className={classes.popupBox}>
                    <animated.img
                        src={popupImg}
                        alt='Package Popup Image'
                        className={classes.popupImg}
                        style={{
                            opacity: props.opacity,
                            marginTop: props.marginTop,
                        }}
                    ></animated.img>

                    <Typography
                        variant='h4'
                        gutterBottom
                        className={classes.popupText}
                    >
                        Get Your Free Travel Guide
                    </Typography>
                    <TextField
                        variant='outlined'
                        placeholder='Enter Your Email'
                        className={classes.emailField}
                        autoFocus={true}
                        size='small'
                    ></TextField>

                    <Button
                        variant='contained'
                        color='secondary'
                        className={classes.freeGuideButton}
                    >
                        GET MY FREE GUIDE
                    </Button>

                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.bookNowButton}
                    >
                        Book Now
                    </Button>

                    <Button
                        variant='outline'
                        className={classes.cancelButton}
                        onClick={handleClickClose}
                    >
                        Cancel
                    </Button>
                </Box>
            </Dialog>
        </>
    )
}

export default PopupPackage
