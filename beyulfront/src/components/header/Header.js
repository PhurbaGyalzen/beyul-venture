import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useEffect } from 'react'
import SortIcon from '@material-ui/icons/Sort'
import {motion} from 'framer-motion'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { List as ListIcon, Label as LabelIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
        color: '#DF9534',
        // fontSize:"1.rem",
        fontWeight: 'bold',
        marginLeft: '1.25rem',
    },

    links: {
        color:'#13181e',
        marginRight: '2.3rem',
        fontSize: '0.8rem',
        letterSpacing: '0.1rem',
        paddingTop: '0.625rem',
        '&:hover': {
            color: '#DF9534',
            cursor: 'pointer',
        },
    },

    textDark: {
        color: '#ffffff',
        marginRight: '2.3rem',
        fontSize: '0.8rem',
        letterSpacing: '0.1rem',
        paddingTop: '0.625rem',
        '&:hover': {
            color: '#DF9534',
            cursor: 'pointer',
        },
    },

    signUp: {
        backgroundColor: '#DF9534',
        color: '#13181e',
        marginTop: '0.1rem',
        marginRight: '1.25rem',
        borderRadius: '2rem',
        fontSize: '1rem',
        width: '5.8rem',
        '&:hover': {
            color: '#ffffff',
            cursor: 'pointer',
            backgroundColor: '#DF9534',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
        },

    },

    menuIcon: {
        marginRight: theme.spacing(2),
        display: 'none',
        color: '#c47d1e',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
        },
    },

    list: {
        width: '200px',
    },

    link: {
        textDecoration: 'none',
        color: '#ffffff',
    },

    appBarTransparent: {
        backgroundColor: 'rgba(10, 10, 10,0)',
        transition: 'backgroundColor 1s easeInOut',
        boxShadow: 'none',
    },

    appBarSolid: {
        backgroundColor: '#13181e',
    },
}))

const NavBtn = (props) => {
    return (
        <Link
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
    const classes = useStyles()
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [textColor, setTextColor] = useState('links')
    const navRef = React.useRef()
    const navRef1 = React.useRef()
    navRef.current = navBackground
    navRef1.current = textColor

    useEffect(() => {
        const textColor = () => {
            const show = window.scrollY > 310
            if (show) {
                setTextColor('textDark')
            } else {
                setTextColor('links')
            }
        }
        document.addEventListener('scroll', textColor)
        return () => {
            document.removeEventListener('scroll', textColor)
        }
    }, [])

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
    const [drawerOpen, setDrawerOpen] = useState(false)

    //functions
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
    const navItems = [
        {
            text: 'Home',
            icon: <ListIcon />,
            link: '/',
        },
        {
            text: 'About',
            icon: <LabelIcon />,
            link: '/about',
        },
        {
            text: 'Blog',
            icon: <LabelIcon />,
            link: '/blog',
        },
        {
            text: 'Contact',
            icon: <LabelIcon />,
            link: '/contact-us',
        },
        {
            text: 'Team',
            icon: <LabelIcon />,
            link: '/our-team',
        },
        {
            text: 'Log In',
            icon: <LabelIcon />,
            link: '/sign-in',
        },

        {
            text: 'Terms & Conditions',
            icon: <LabelIcon />,
            link: '/terms-and-conditions',
        },

        {
            text: 'Privacy Policy',
            icon: <LabelIcon />,
            link: '/privacy-policy',
        },


    ]
    const drawerItems = navItems.concat({
          text: 'Sign Up',
          icon: <LabelIcon />,
          link: '/sign-up',
      })

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes[navRef.current]}>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        className={classes.title}
                        component='h1'
                    >
                        <Link
                            component={NavLink}
                            to='/'
                            style={{ color: '#c47d1e' }}
                        >
                            BEYUL VENTURE
                        </Link>
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        {navItems.map((item) => <NavBtn
                            key={item.link}
                            to={item.link}
                            className={classes[navRef1.current]}
                            component={NavLink}
                            // style={{mixBlendMode: 'difference'}}
                        >
                            {item.text}
                        </NavBtn>)}
                        <Button
                            component={NavLink}
                            to='/sign-up'
                            variant='contained'
                            color='primary'
                            size='medium'
                            className={classes.signUp}
                            style={{ fontSize: '0.7rem' }}
                        >
                            Sign Up
                        </Button>
                    </div>

                    <IconButton
                        onClick={toggleDrawer}
                        className={classes.menuIcon}
                        edge='start'
                        aria-label='menu'
                    >
                        <SortIcon fontSize='large' />
                    </IconButton>

                    <Drawer
                        anchor='left'
                        variant='temporary'
                        onClose={toggleDrawer}
                        open={drawerOpen}
                    >
                        <List className={classes.list}>
                            {drawerItems.map((prop) => (
                                <Link
                                    className={classes.link}
                                    to={prop.link}
                                    key={prop.text}
                                    component={RouterLink}
                                >
                                    <ListItem onClick={toggleDrawer} button>
                                        <ListItemIcon
                                            style={{ color: '#c47d1e' }}
                                        >
                                            {prop.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            style={{ color: '#000000' }}
                                        >
                                            {prop.text}
                                        </ListItemText>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}
