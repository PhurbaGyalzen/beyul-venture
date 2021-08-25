import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { Button } from './Styles'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button: {
        position: 'fixed',
        width: '100%',
        left: '50%',
        bottom: '2.5rem',
        height: '1.25rem',
        fontSize: '3rem',
        zIndex: 1,
        cursor: pointer,
        color: 'green',
    },
}))

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        const classes = useStyles()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <Button className={classes.button}>
            <FaArrowCircleUp
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
            />
        </Button>
    )
}

export default ScrollButton
