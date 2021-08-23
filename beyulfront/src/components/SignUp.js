import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from 'components/Copyright'
import { SignUpForm } from './SignUpForm'

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(3),
    paddingBottom: '1.3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft:'1rem',
    paddingTop:'1.5rem',
    [theme.breakpoints.down('lg')]: {
      // maxWidth: '400px'
    },

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0.5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  imgContainer:{
    backgroundImage:'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("/static/images/swayambhu.jpg")',
    padding: '0',
    width:'100%',
    height:'100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    [theme.breakpoints.down('md')]: {
      height: '100%'
    },
  }
}))

export default function SignUp() {
  const classes = useStyles()

  return (
    <div style={{backgroundColor:"#EDEEF0"}} style={{paddingBottom:"0rem"}}>
      <Container component='main' maxWidth='md' style={{paddingTop:'15vh'}} pb={5}>
        <CssBaseline />
        <Grid container pt={5}>
          <Grid item xs={12} md={6}>
            <div className={classes.imgContainer}>
              <div style={{paddingTop:'70%',width:'100%',height:'100%'}}>
                
                <div style={{marginLeft:'1.5rem'}}>
                  <Typography align="left" style={{color:'#CEF0FF',fontSize:'2rem',fontWeight:'600'}}>
                    <span style={{fontSize:"4rem", color:'#fff',fontWeight:'700'}}>Join Us</span> <br/>
                    To an unforgettable Journey
                  </Typography>
                </div>
              </div>
              
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{display: 'flex',justifyContent:'center'}}>
                <div className={classes.paper}>
                  {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar> */}
                  <Typography component='h1' variant='h4' >
                    REGISTER NOW
                  </Typography>
                  
                  <SignUpForm />
                
              </div>
            </div>
          
          </Grid>
        </Grid>
        
        {/* <Box mt={5}>
          <Copyright />
        </Box> */}
      </Container>
    </div>
    
  )
}
