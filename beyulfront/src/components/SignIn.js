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
import Lottie from 'react-lottie';
import animationData from 'img/lotties/42070-travel-is-fun.json'

import { SignInForm } from './SignInForm'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    
    marginLeft: theme.spacing(1),
    padding:'2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  imgContainer:{
    
    marginTop: theme.spacing(8),
    padding: '10%',
    width:'100%',
    height:'100%',
    backgroundSize: '100%',
  }
}))

export default function SignIn() {
  const classes = useStyles()
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Box pt={8}>
        <Container component='main' maxWidth='md'>
          <CssBaseline />
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className={classes.imgContainer}>
                  <Lottie options={defaultOptions}
                  height={400}
                  width={400}
                  />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{display: 'flex',justifyContent:'center'}}>
                <div className={classes.paper}>
              
                  <Typography component='h1' variant='h5' style={{color:"#694311", fontSize:"2rem", fontWeight:"bold", lineHeight:"2rem"}}>
                    SIGN IN
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
    </Box>
    
  )
}
