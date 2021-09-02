import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import contactUsImg from 'img/contactUs2.jpg'

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
                    <Grid item xs={12} sm={12} md={4}>
                        <div className='sidebar'>
                            <h1>Hello</h1>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={8}>
                        <Typography>Middlebar</Typography>
                    </Grid>
                </Grid>
            </container>
        </>
    )
}

export default userProfile
