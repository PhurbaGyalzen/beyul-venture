import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const cardstyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
            '& $cardImage': {
                filter: 'none',
                cursor: 'pointer',
                transform: 'scale(1.1)',
                transition: 'transform 0.9s ease-in-out, filter 2s',
            },
        },
    },
    blogTitle: {
        fontSize: '14px',
        fontWeight: '700',
        textTransform: 'uppercase',
        '&:hover': {
            color: '#006cff',
        },
    },
    dateStyle: {
        fontSize: '12px',
        color: theme.palette.grey[500],
    },
    descriptionContainer: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        height: '4.5rem',
    },
    descriptionStyle: {
        fontSize: '12px',
        color: theme.palette.grey[600],
        fontWeight: '500',
        lineHeight: '1.3',
        // wordWrap:'break-word'
    },
}))

const formatDate = (datetime) => {
    let toConvert = new Date(datetime)
    return `${toConvert.toLocaleString('default', {
        month: 'long',
    })} ${toConvert.getDate()}, ${toConvert.getFullYear()}`
}

export const TagCard = (props) => {
    const classes = cardstyles()
    return (
        <>
            <Grid item xs={12} md={3} sm={6}>
                <Card className={classes.card}>
                    <CardMedia
                        component='img'
                        image={props.data.thumbnail}
                        title={props.data.title}
                        style={{ height: '15rem' }}
                    />
                    <CardContent style={{ padding: '8px' }}>
                        <Typography
                            align='left'
                            className={classes.dateStyle}
                            gutterBottom
                        >
                            {formatDate(props.data.created_on)}
                        </Typography>
                        <Typography
                            align='left'
                            className={classes.blogTitle}
                            gutterBottom
                        >
                            <Link to={'/blog/' + props.data.slug}>
                                {props.data.title}
                            </Link>
                        </Typography>
                        <div className={classes.descriptionContainer}>
                            <Typography
                                align='left'
                                className={classes.descriptionStyle}
                            >
                                {props.data.description}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
