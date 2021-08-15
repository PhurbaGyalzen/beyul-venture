import Rating from '@material-ui/lab/Rating'
import { Container,Grid,Box,makeStyles,Typography,TextField, Button,Link} from '@material-ui/core'



const reviewStyles = makeStyles((theme) => ({
    commentContainer:{
        display:'flex',
        flexDirection:'row',
        postion:'relative'
    },
    authorImg:{
        width:'3rem',
        height:'3rem',
        borderRadius:'50%'
    },
    userSection:{
        marginBottom:'.5rem',
        paddingLeft: '1rem'
    },
    userDesc:{
        color:'#545454',
        verticalAlign: 'middle',
        display: 'inline-flex',
        fontWeight:'700'    
    },
    reviewData:{
        borderTop: '1px dashed #bfbebe',
        paddingTop:'.8rem'
    }
    
}))



export const Review = ({reviewList}) => {
    const classes = reviewStyles()
    return (
        <div style={{backgroundColor:'#f8f7f8'}}>
            <Container style={{paddingTop:'2rem'}}>
                <Typography variant='h5' gutterBottom mt={4}>Reviews</Typography>
                <Grid container spacing={2}>
                    {reviewList.map((review)=>{
                        return (
                            <Grid item xs={12} md={12} sm={12}>
                                <div className={classes.commentContainer}>
                                    <div className={classes.imgSection}>
                                        <img src={review.userImage} className={classes.authorImg} />
                                    </div>
                                    <div className={classes.userSection}> 
                                        <Typography variant="p" className={classes.userDesc}>
                                            <Link href="#" color="inherit">
                                                {review.user}
                                            </Link>
                                        </Typography>
                                        <div>
                                            <Rating name='read-only' value={review.rating} readOnly height={10}></Rating>
                                        </div>    
                                    </div>
                                </div>
                                <div className={classes.reviewData}>
                                    <Typography>
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
