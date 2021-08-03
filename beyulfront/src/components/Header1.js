import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect } from 'react';
import SortIcon from '@material-ui/icons/Sort';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} 
from '@material-ui/core'
import {Link as RouterLink, NavLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { List as ListIcon, Label as LabelIcon} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    color:"#c47d1e",
    // fontSize:"1.rem",
    fontWeight:"bold",
    marginLeft:"1.25rem"
  },
  
  links:{
    color:"#ffffff",
    marginRight:"2.3rem",
    fontSize:"0.8rem",
    letterSpacing:"0.1rem",
    paddingTop:"0.625rem",
    '&:hover': {
      color: "#c47d1e",
      cursor:"pointer",
      
      }
  },

  login:{
    backgroundColor:"#13181e",
    color:"#ffffff",
    boxShadow:0,
    marginRight:"1.25rem",
    '&:hover': {
      color: "#ffffff",
      cursor:"pointer",
      backgroundColor:"#13181e"
    }

  },

  signUp:{
    backgroundColor:"#c47d1e",
    color:"#ffffff",
    marginTop:"0.1rem",
    marginRight:"1.25rem",
    borderRadius:"2rem",
    width:"5.8rem",
    '&:hover': {
      color: "#ffffff",
      cursor:"pointer",
      backgroundColor:"#c47d1e",
    }

  },

  sectionDesktop:{
    display:'none',
    [theme.breakpoints.up("lg")]:{
      display:"flex"
    }
  },

  

  menuIcon:{
    marginRight: theme.spacing(2),
    display:'none',
    color:"#c47d1e",
    [theme.breakpoints.down('md')]:{
      display:"flex"
    }},

  list:{
    width: '200px',
  },

  link:{
    textDecoration: 'none',
    color:"#ffffff",
  },

  appBarTransparent: {
    backgroundColor: 'rgba(10, 10, 10,0)',
    transition: 'backgroundColor 1s easeInOut',
    boxShadow:'none'
  },

  appBarSolid: {
    backgroundColor:'#13181e'
  }

}));

const NavBtn = (props) => {
  return (
    <Link
      variant='outlined'
      component={NavLink}
      activeStyle={{ color: '#c47d1e' }}
      exact
      {...props}
    >
      {props.children}
    </Link>
  )
}


export default function ButtonAppBar() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 310
        if (show) {
            setNavBackground('appBarSolid')
        } else {
            setNavBackground('appBarTransparent')
        }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])

  //state
  const [drawerOpen, setDrawerOpen] = useState(false);

  //functions
  const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
      {
          text: 'Home',
          icon: <ListIcon/>,
          link: '/',
      },
      {
          text: 'About',
          icon: <LabelIcon/>,
          link: '/about',
      },

      {
        text: 'Blog',
        icon: <LabelIcon/>,
        link: '/blog',
      },

      {
        text: 'Contact',
        icon: <LabelIcon/>,
        link: '/contact-us',
      },

      {
        text: 'Team',
        icon: <LabelIcon/>,
        link: '/our-team',
      },

      {
        text: 'Log In',
        icon: <LabelIcon/>,
        link: '/sign-in',
      },

      {
        text: 'Sign Up',
        icon: <LabelIcon/>,
        link: '/sign-up',
      },
  ];

  return (
    <div className={classes.root} disableGutters>
      <AppBar position="fixed" className={classes[navRef.current]}>
        <Toolbar disableGutters>
          <Typography variant="h6" className={classes.title} component="h1">
            <Link component={NavLink} to="/" style={{color:"#c47d1e"}}>
              BEYUL VENTURE
            </Link>
          </Typography>
          <div className={classes.sectionDesktop}>
            <NavBtn
              to='/' className={classes.links} component={NavLink}>HOME</NavBtn>
            <NavBtn disableElevation to='/about' className={classes.links} component={NavLink}>ABOUT</NavBtn>
            <NavBtn to='/blog' className={classes.links} component={NavLink}>BLOG</NavBtn>
            <NavBtn to='/contact-us' className={classes.links} component={NavLink}>CONTACT</NavBtn>
            <NavBtn to='/our-team' className={classes.links} component={NavLink}>TEAM</NavBtn>
            <NavBtn to='/sign-in' className={classes.links} component={NavLink}>LOGIN</NavBtn>

            {/* <NavBtn disableElevation to='/about' className={classes.button} component={NavLink}>About</NavBtn>
            <NavBtn to='/blog' className={classes.button} component={NavLink}>Blog</NavBtn>
            <NavBtn to='/contact-us' className={classes.button} component={NavLink}>Contact</NavBtn>
            <NavBtn to='/our-team' className={classes.button} component={NavLink}>Team</NavBtn> */}



            <Button
              component={NavLink}
              to='/sign-up'
              variant='contained'
              color='primary'
              size='medium'
              className={classes.signUp}
              style={{fontSize:"0.7rem"}}
            >
              Sign Up
            </Button>
          </div>

          <IconButton onClick={toggleDrawer} className={classes.menuIcon} edge="start" aria-label="menu">
            <SortIcon fontSize="large"/>
          </IconButton>

          <Drawer anchor="left" variant="temporary" onClose={toggleDrawer} open={drawerOpen}>
            <List className={classes.list}>
                {drawerItems.map(prop => (
                    <Link className={classes.link} to={prop.link} key={prop.text} component={RouterLink}>
                        <ListItem onClick={toggleDrawer} button>
                            <ListItemIcon style={{color:"#c47d1e"}}>{prop.icon}</ListItemIcon>
                            <ListItemText style={{color:"#000000"}}>{prop.text}</ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>

          
        </Toolbar>
      </AppBar>
    </div>

  );
}