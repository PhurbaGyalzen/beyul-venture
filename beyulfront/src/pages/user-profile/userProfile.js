import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import contactUsImg from 'img/contactUs2.jpg'
import Profile from './Profile'
import Paper from '@material-ui/core/Paper'
import { BookedPackage } from './BookedPackage'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const userProfile = () => {
    const classes = useStyles
    return (
        <>
            <container className={classes.root}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                       <Profile />
                    </Grid>

                    <Grid item xs >
                        <Paper style={{marginRight:'2%', marginTop:'8%', marginLeft:'2%', padding:'5%'}}>
                            <div className='main_container'>
                                <BookedPackage/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </container>
        </>
    )
}

export default userProfile
