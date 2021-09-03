// import Typography from '@material-ui/core/Typography'
// import Box from '@material-ui/core/Box'
// import Button from '@material-ui/core/Button'
// import Grid from '@material-ui/core/Grid'
// import Tooltip from '@material-ui/core/Tooltip'
// import Avatar from '@material-ui/core/Avatar'
// import { makeStyles } from '@material-ui/core/styles'
// import contactUsImg from 'img/contactUs2.jpg'
// import Profile from './Profile'
// import Paper from '@material-ui/core/Paper'
// import { BookedPackage } from './BookedPackage'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
// }))

// const BookingDetail = () => {
//     const classes = useStyles
//     return (
//         <>
//             <container className={classes.root}>
//                 <Grid container>
//                     <Grid item xs={12} sm={12} md={4} lg={3}>

//                     </Grid>

//                 </Grid>
//             </container>
//         </>
//     )
// }

// export default BookingDetail

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import Box from '@material-ui/core/Box'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 1500,
        paddingLeft: '10%',
        paddingRight: '10%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20%',
        },

        [theme.breakpoints.up('sm')]: {
            marginTop: '10%',
        },
    },

    demo: {
        backgroundColor: theme.palette.background.paper,
    },

    title: {
        margin: theme.spacing(4, 0, 2),
    },
}))

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    )
}

export default function BookingDetail() {
    const classes = useStyles()
    const [dense, setDense] = React.useState(false)
    const [bookingDetail, setBookingDetail] = useState([
        {
            id: 1,
            title: 'Name',
            description: 'Annapurna Base Camp Trek',
        },

        {
            id: 2,
            title: 'Best Season',
            description: 'Jan-Dec',
        },

        {
            id: 3,
            title: 'Level',
            description: 'Difficult',
        },

        {
            id: 4,
            title: 'Transportation',
            description: 'Bus',
        },

        {
            id: 5,
            title: 'Booking Date',
            description: '09/01/2021',
        },

        {
            id: 6,
            title: 'Check-in',
            description: '21/01/2021',
        },

        {
            id: 7,
            title: 'No. of People',
            description: '2',
        },

        {
            id: 8,
            title: 'Duration',
            description: '15 days',
        },

        {
            id: 9,
            title: 'Starts at ',
            description: 'kathmandu',
        },

        {
            id: 10,
            title: 'Ends at',
            description: 'pokhara',
        },

        {
            id: 11,
            title: 'Costs',
            description: '100000',
        },

        {
            id: 12,
            title: 'Payment Method',
            description: 'strive',
        },
    ])

    return (
        <div className={classes.root}>
            <Box pb={'5%'}>
                <Typography variant='h4' style={{ textAlign: 'center' }}>
                    {' '}
                    Booking Details
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {bookingDetail.map((data) => (
                                <ListItem button>
                                    <ListItemText
                                        style={{ textAlign: 'center' }}
                                    >
                                        <span>{data.title}</span>:{' '}
                                        <span style={{fontWeight:'lighter'}}>{data.description}</span>
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
