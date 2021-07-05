import { withStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'
import './Package.css'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    height: '15rem',
    overflow: 'hidden',
  },
  cardCont: {
    height: '80px',
    overflow: 'hidden',
  },
}))

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff3d47',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating)

const Package = (props) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Link to='package/1'>
        <Card className={classes.card}>
          <div className={classes.cardImage}>
            <CardMedia
              component='img'
              className={classes.cardImage}
              image={props.data.image}
              title={props.data.title}
              // style={{height: "3rem", paddingTop: '56.25%'}}
            />
          </div>

          <CardContent className={classes.cardCont}>
            <Typography
              align='left'
              style={{
                color: '#9d9fa5',
                fontSize: '0.8rem',
                fontWeight: 'bold',
              }}
            >
              Duration: {props.data.duration}
            </Typography>
            <Typography
              variant='h5'
              align='justify'
              style={{ fontWeight: 'bold', margin: '0.2rem auto' }}
            >
              {props.data.title}
            </Typography>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              style={{
                fontSize: '0.9rem',
                color: 'grey',
                gap: '1rem',
              }}
            >
              <StyledRating
                name='Average Rating'
                value={props.data.rating}
                precision={0.5}
                readOnly
                icon={<FavoriteIcon />}
                size='medium'
                // style={{paddingLeft:"0.5rem"}}
              />
              <Typography
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#505050',
                }}
              >
                Price: Rs. {props.data.price}
              </Typography>
            </Box>
            {/*<Typography gutterBottom align="left">
                    </Typography>
                    */}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default Package
