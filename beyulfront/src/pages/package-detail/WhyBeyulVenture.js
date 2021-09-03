//All dependencies import
import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check'
import Paper from '@material-ui/core/Paper'

//WhyBeyulVenture component information

const datas = [
    {
        id: 0,
        title: 'Verified Reviews',
        content: '25000+ Pictures and Reviews on the platform.',
    },

    {
        id: 1,
        title: 'No Booking Fee! Price Guarantee',
        content:
            'We have a minimum price guarantee. If you get the same product at cheaper price we will refund the difference.',
    },

    {
        id: 2,
        title: '10000+ Tours and Activities',
        content:
            'We have activities across 17 countries, across every category so that you never miss best things to do anywhere.',
    },

    {
        id: 3,
        title: 'Customer Delight',
        content:
            'We are always able to support you so that you have a hassle free experience.',
    },
]

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '350px',
        height: '450px',
        [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
    },

    title: {
        width: '100%',
        height: '10%',
        backgroundColor: '#694311',
        textAlign: 'center',
        paddingTop: '0.5rem',
        color: '#fff',
    },
}))

//Defining Overview component
export default function WhyBeyulVenture() {
    const classes = useStyles()
    const [whyBeyulVenture, setWhyBeyulVenture] = useState(datas)
    return (
        <>
            <div className={classes.root}>
                <Paper>
                    <Box className={classes.title}>
                        <Typography
                            variant='h6'
                            style={{
                                color: '#FFFFFF',
                                paddingTop: '0.2rem',
                                paddingBottom: '0.2rem',
                            }}
                        >
                            Why Beyul Venture
                        </Typography>
                    </Box>
                    {whyBeyulVenture.map((data) => (
                        <Box pt={4} pl={4} key={data.id}>
                            <Grid container>
                                <Grid item md={2}>
                                    <CheckIcon style={{ color: '#DF9534' }} />
                                </Grid>

                                <Grid item md={8}>
                                    <Typography variant='body1'>
                                        {data.title}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {data.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                </Paper>
            </div>
        </>
    )
}
