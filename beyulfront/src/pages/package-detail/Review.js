import Rating from '@material-ui/lab/Rating'
import {
    Container,
    Grid,
    Box,
    makeStyles,
    Typography,
    TextField,
    Button,
    Link,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const reviewStyles = makeStyles((theme) => ({
    commentContainer: {
        display: 'flex',
        flexDirection: 'row',
        postion: 'relative',
    },
    authorImg: {
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
    },
    userSection: {
        marginBottom: '.5rem',
        paddingLeft: '1rem',
    },
    userDesc: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        fontWeight: '700',
    },
    reviewData: {
        borderTop: '1px dashed #bfbebe',
        paddingTop: '.8rem',
    },
}))

export const Review = ({ reviewList }) => {
    const classes = reviewStyles()
    return (
        <div>
            <Container style={{ paddingTop: '2rem' }}>
                <Typography variant='h6' gutterBottom mt={4}>
                    Reviews
                </Typography>
                <Grid container spacing={2}>
                    {reviewList.map((review) => {
                        return (
                            <Grid item xs={12} md={12} sm={12}>
                                <div className={classes.commentContainer}>
                                    <div className={classes.imgSection}>
                                        {(() => {
                                            if (review.userImage == '') {
                                                let name = review.user
                                                let matches =
                                                    name.match(/\b(\w)/g)
                                                console.log(matches)
                                                let firstLast =
                                                    matches[0] +
                                                    matches[matches.length - 1]
                                                console.log(firstLast)
                                                return (
                                                    <Avatar>
                                                        {firstLast}
                                                    </Avatar>
                                                )
                                            } else {
                                                return (
                                                    <Avatar
                                                        alt={review.user}
                                                        src={review.userImage}
                                                    />
                                                )
                                            }
                                        })()}

                                        {/* <Avatar alt={review.user} src={review.userImage} /> */}
                                        {/* <img src={review.userImage} className={classes.authorImg} /> */}
                                    </div>
                                    <div className={classes.userSection}>
                                        <Typography
                                            variant='body1'
                                            className={classes.userDesc}
                                        >
                                            <Link href='#' color='inherit'>
                                                {review.user}
                                            </Link>
                                        </Typography>
                                        <div>
                                            <Rating
                                                name='read-only'
                                                value={review.rating}
                                                readOnly
                                                height={10}
                                            ></Rating>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.reviewData}>
                                    <Typography variant='body2'>
                                        {review.review}
                                    </Typography>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}
