import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from 'components/header/Header'
// import { Footer } from 'components/Footer'
import ScrollButton from 'components/ScrollButton1'
import { Footer } from 'pages/footer/Footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import { green, orange } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';




// import { default as SignUp } from 'components/SignUpDialog'
import { Routes } from './Routes'
import ajax from './api'
window.ajax = ajax

import { createTheme, ThemeProvider } from '@material-ui/core/styles';


const App = () => {
    const [darkMode, setDarkMode]=useState(false);

    //light
    const lightTheme = createTheme({
        palette: {
            primary:{
                main:"#DF9534",
                light:"#ffffff"
            },

            type:'light',

            background:{
                default:"#ebebeb",
                paper:"#fcfcfc"
            }

            
          },



        typography:{
            h1:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px'},
            h2:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px'},
            h3:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px'},
            h4:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px'},
            h5:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif',fontSize:'18px', lineHeight:'32px'},
            h6:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif',fontSize:'16px', lineHeight:'24x'},
            body1:{color:"#13181e", fontFamily: 'arial', fontSize:'14px', lineHeight:'24px',fontWeight:'bold'},
            body2:{color:"#13181e", fontFamily: 'arial', fontSize:'14px', lineHeight:'24px'},
            
        },

        

    })

    //dark
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#DF9534",
            },
            type:'dark',

            background:{
                default:"#13181E",
                paper:"#202A33",
            },

            action:{
                hover:"#323232"
            }
          },

        typography:{
            h1:{color:"#BFBFB2", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px',fontWeight:'bold'},
            h2:{color:"#BFBFB2", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px',fontWeight:'bold'},
            h3:{color:"#BFBFB2", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px',fontWeight:'bold'},
            h4:{color:"#BFBFB2", fontFamily: 'sans-serif',fontSize:'24px', lineHeight:'32px',fontWeight:'bold'},
            h5:{color:"#BFBFB2", fontFamily: 'sans-serif',fontSize:'18px', lineHeight:'32px',fontWeight:'bold'},
            h6:{color:"#BFBFB2", fontFamily: 'sans-serif',fontSize:'16px', lineHeight:'16px',fontWeight:'bold'},
            body1:{color:"#A6A69B", fontFamily: 'arial', fontSize:'14px', lineHeight:'24px',fontWeight:'bold'},
            body2:{color:"#A6A69B", fontFamily: 'arial', fontSize:'14px', lineHeight:'24px'},
        },


    })
    

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme }>
            {/* <Paper style={{height:"auto"}} elevation={0}> */}
                <Router>
                    <div className='App'>
                        <CssBaseline />
                        <Toaster />
                        <Navigation />
                        <Routes />
                        <Footer />
                        <ScrollButton />
                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title={darkMode ? "Toggle light mode" :"Toggle dark mode" } arrow>
                            <IconButton onClick={()=>setDarkMode(!darkMode)} style={{position:"fixed", top:"10%",right:"2%",fontSize:"50px"}}>{darkMode ? <Brightness7Icon/> : <Brightness4Icon/> }</IconButton>
                        </Tooltip>
                    </div>
                </Router>
            {/* </Paper> */}
        </ThemeProvider>

    )
}

export default App
