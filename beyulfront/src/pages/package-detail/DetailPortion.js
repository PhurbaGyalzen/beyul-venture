import React from 'react'
import { Container,Grid,Box,makeStyles,Typography} from '@material-ui/core'
import { StorySection } from './StorySection'

const packageStyles = makeStyles((theme) => ({
    reviewContainer:{
        margin: '2rem',
        padding:'2rem',
        maxWidth:'800px'
    }
}))


export const DetailPortion = () => {
    const classes = packageStyles();
    return (
        <>
            <Box>
                <Container className={classes.reviewContainer}>
                    <StorySection />
                </Container>
            </Box>
        </>
    )
}
