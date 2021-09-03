import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import Typography from '@material-ui/core/Typography'
import { ProfileData } from './ProfileData'
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}))

import './index.css'
const CustomTimeline = () => {
    const classes = useStyles()
    return (
        <Timeline className='timeline'>
            <TimelineItem className='timeline_firstItem'>
                <TimelineSeparator>
                    <TimelineDot className='timeline_dot_header'>
                        <Tooltip title='name'>
                            <AccountCircleIcon />
                        </Tooltip>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='h1' className='timeline_text'>
                        <span>Name: </span>
                        <span className='timeline_description'>{ProfileData[0].name}</span>
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='timeline_firstItem'>
                <TimelineSeparator>
                    <TimelineDot color='primary' className='timeline_dot_header'>
                        <Tooltip title='email'>
                            <EmailIcon />
                        </Tooltip>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='h1' className='timeline_text'>
                        <span>Email: </span>
                        <span  className='timeline_description'>{ProfileData[0].email}</span>
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='timeline_firstItem'>
                <TimelineSeparator>
                    <TimelineDot color='primary' variant='outlined' className='timeline_dot_header'>
                        <Tooltip title='address'>
                            <LocationOnIcon />
                        </Tooltip>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='h1' className='timeline_text'>
                        <span>Address: </span>
                        <span  className='timeline_description'>{ProfileData[0].address}</span>
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem className='timeline_firstItem'>
                <TimelineSeparator>
                    <TimelineDot color='secondary' className='timeline_dot_header'>
                        <Tooltip title='phone'>
                            <PhoneAndroidIcon />
                        </Tooltip>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' component='h1' className='timeline_text'>
                        <span>Phone: </span>
                        <span  className='timeline_description'>{ProfileData[0].phone}</span>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default CustomTimeline
