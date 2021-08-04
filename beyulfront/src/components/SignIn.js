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


import { SignInForm } from './SignInForm'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    // paddingBottom:'3rem',
    padding:'3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#E0DEE6',
  },
  
  imgContainer:{
    // backgroundImage:'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("/static/images/swayambhu.jpg")',
    padding: '0',
    width:'100%',
    height:'100%',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    // [theme.breakpoints.down('md')]: {
    //   height: '100%'
    // },
  }
}))

export default function SignIn() {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className={classes.imgContainer}>
            <div style={{paddingTop:'70%',width:'100%',height:'100%'}}>
              
            
            </div>
            
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{display: 'flex',justifyContent:'center'}}>
            <div className={classes.paper}>
          
              <Typography component='h1' variant='h5'>
                Sign in
              </Typography>
              <SignInForm />
            </div>
          </div>
        
        </Grid>
      </Grid>
      
      {/* <Box mt={8}>
        <Copyright /
      </Box> */}
    </Container>
  )
}
