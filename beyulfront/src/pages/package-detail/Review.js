import Rating from '@material-ui/lab/Rating'
import { Container,Grid,Box,makeStyles,Typography,TextField, Button,Link} from '@material-ui/core'



const reviewStyles = makeStyles((theme) => ({
    userSection:{
        borderBottom: '1px dashed #bfbebe',
        marginBottom:'.5rem'
    },
    userDesc:{
        color:'#545454',
        verticalAlign: 'middle',
        display: 'inline-flex'    
    },
    
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
                                <div className={classes.userSection}> 
                                    <Typography variant="p" className={classes.userDesc}>
                                        <Link href="#" color="inherit">
                                            {review.user}
                                        </Link>
                                    </Typography>
                                    <div>
                                        <Rating name='read-only' value={review.rating}readOnly></Rating>
                                    </div>    
                                </div>
                                <Typography>
                                    {review.review}
                                </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

        </div>
    )
}
