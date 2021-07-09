import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {
  CssBaseline,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { OpenDialog } from './SignUp'
const useStyles = makeStyles((theme) => {
  // console.log({theme});
  return {
    appBar: {
      // borderBottom: `1px solid ${theme.palette.divider}`,
      height: '4rem',
      boxShadow: 'none',
      backgroundColor: 'rgba(10, 10, 10, 0)',
    },
    root: {
      width: '100%',
    },
    navTitle: {
      // color: "#60DEF7",
      color: '#fff',
      fontFamily: 'sans-serif',
      fontWeight: '900',
      fontSize: '1.5rem',
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        gap: '0.5rem',
      },

      signUp: {
        backgroundColor: theme.palette.primary[300],
      },
      navBtn: {
        color: '#fffff',
        fontWeight: 'bold',
      },
    },
  }
})

const NavBtn = (props) => {
  return (
    <Button
      variant='outlined'
      component={NavLink}
      style={{ fontWeight: 'bold', color: '#000' }}
      activeStyle={{ border: '2px solid white' }}
      exact
      {...props}
    >
      {props.children}
    </Button>
  )
}

const Header = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' className={classes.navTitle}>
            Beyul Venture
          </Typography>
          <div className={classes.sectionDesktop}>
            <NavBtn to='/'>Home</NavBtn>
            <NavBtn to='/about'>About</NavBtn>
            <NavBtn to='/blog'>Blog</NavBtn>
            <Button
              component={NavLink}
              to='/sign-up'
              variant='contained'
              color='primary'
              size='medium'
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
