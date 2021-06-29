import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { CssBaseline, Container, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => {
  // console.log({theme});
  return ({
    appBar: {
      // borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      height: "4rem",
      boxShadow: 'none',
    },
    root:{
      width: "100%",
    },
    navTitle:{
      // color: "#60DEF7",
      color: "#fff",
      fontWeight: "bold",
      flexGrow: 1,
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]:{
        display: "flex",
        gap: '0.5rem'
      },

    signUp:{
      backgroundColor: theme.palette.primary[300],
    },
    }
  })
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.navTitle}>Beyul Venture</Typography>
            <div className={classes.sectionDesktop}>
              <Button variant="outlined" component={ Link } to="/"> Home</Button>
              <Button variant="outlined" component={ Link } to="/about">About</Button>
              <Button variant="outlined" component={ Link } to="/services">Services</Button>
              <Button component={ Link } variant="contained" color="primary" size="medium">
                Sign Up
              </Button>
            </div>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          
        </AppBar>
      </Container>
    </>
  )
};

export default Header;