import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CustomizedDialogs from './SignUpDialog'
import {
  CssBaseline,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, NavLink } from 'react-router-dom'
import { OpenDialog } from './SignUp'
const useStyles = makeStyles((theme) => {
  // console.log({theme});
  return {
    appBar: {
      // borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      height: '4rem',
      boxShadow: 'none',
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
            <Button
              variant='outlined'
              component={NavLink}
              style={{ fontWeight: 'bold', color: '#fff' }}
              activeStyle={{ fontWeight: 'bold', color: '#3C416F' }}
              exact
              to='/'
            >
              Home
            </Button>

            <Button
              component={NavLink}
              style={{ fontWeight: 'bold', color: '#fff' }}
              activeStyle={{ fontWeight: 'bold', color: '#3C416F' }}
              exact
              to='/about'
            >
              About
            </Button>

            <Button
              component={NavLink}
              style={{ fontWeight: 'bold', color: '#fff' }}
              activeStyle={{ fontWeight: 'bold', color: '#3C416F' }}
              exact
              to='/services'
            >
              Services
            </Button>
            <Button
              size='medium'
            >
              <CustomizedDialogs/>
            </Button>
          </div>
          {/* <IconButton>
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default Header
