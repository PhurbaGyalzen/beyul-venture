//All dependencies import
import React, { useState } from 'react'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Lightbox from 'react-awesome-lightbox'
// You need to import the CSS only once
import 'react-awesome-lightbox/build/style.css'

//All images import

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    imgContainer: {
        width: '15rem',
        height: '11rem',
        [theme.breakpoints.down('sm')]: {
            width: '12rem',
            height: '8rem',
        },
    },
}))

//Defining Photos component
export default function Photos({ imageList }) {
    const classes = useStyles()
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)
    return (
        <>
            <div className={classes.root}>
                {isImageViewerOpen && (
                    <Lightbox
                        images={imageList}
                        startIndex={imageIndex}
                        allowRotate={false}
                        onClose={() => setIsImageViewerOpen(false)}
                    />
                )}
            </div>

            <Container>
                <Typography gutterBottom> Our Photos</Typography>
                <Grid container spacing={1} alignItems='center'>
                    {imageList.map((data, index) => {
                        return (
                            <Grid item xs={6} md={4} sm={4} key={data.id}>
                                <div
                                    className={classes.imgContainer}
                                    onClick={() => {
                                        setImageIndex(index)
                                        setIsImageViewerOpen(true)
                                    }}
                                >
                                    <img
                                        src={data.url}
                                        width={'100%'}
                                        height={'100%'}
                                    />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}
