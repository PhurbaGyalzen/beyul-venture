//All dependencies import
import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import BookingForm from './BookingForm'
import EnquiryForm from './EnquiryForm'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

//All images import

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '350px',
        height: '650px',
    },

    priceBox: {
        backgroundColor: '#694311',
        color: '#ffffff',
        width: '100%',
        textAlign: 'center',
        paddingTop: '1rem',
        paddingBottom: '0.5rem',
    },

    priceValue: {
        backgroundColor: '#13181e',
        width: '100%',
        height: '100px',
        textAlign: 'center',
        paddingTop: '2rem',
    },
}))

//Defining PackageTabs component
export default function PackageForm() {
    const [selectedTab, setSelectedTab] = useState(0)
    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return (
        <div className={classes.root}>
            <Paper>
                <Grid container>
                    <Box className={classes.priceBox}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography
                                style={{
                                    fontSize: '18px',
                                    lineHeight: '32px',
                                    color: '#fcfcfc',
                                }}
                            >
                                Price
                            </Typography>
                        </Grid>
                    </Box>

                    <Box className={classes.priceValue}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography
                                component='body2'
                                style={{ color: '#fcfcfc' }}
                            >
                                <LocalOfferIcon
                                    style={{
                                        transform: 'rotate(-270deg)',
                                        color: '#DF9534',
                                        marginTop: '0.54rem',
                                    }}
                                />
                                {'  '}From $500
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    variant='fullWidth'
                    indicatorColor='primary'
                    textColor='#13181e'
                    aria-label='Package form details'
                >
                    <Tab
                        style={{ fontSize: '14px', lineHeight: '24px' }}
                        label='Booking Form'
                    />
                    <Tab
                        style={{ fontSize: '14px', lineHeight: '24px' }}
                        label='Enquiry Form'
                    />
                </Tabs>
                {selectedTab === 0 && <BookingForm />}
                {selectedTab === 1 && <EnquiryForm />}
            </Paper>
        </div>
    )
}
