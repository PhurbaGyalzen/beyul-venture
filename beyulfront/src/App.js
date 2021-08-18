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

            type:'light'
          },

        typography:{
            h1:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif'},
            h2:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif'},
            h3:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif'},
            h4:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif'},
            h5:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif'},
            h6:{color:"#694311", fontWeight:"bold", fontFamily: 'sans-serif'},
            body1:{color:"#13181e", fontFamily: 'sans-serif'},
            body2:{color:"#13181e", fontFamily: 'sans-serif'},
            
        },

        bg: '#ff0000',

    })

    //dark
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#DF9534",
            },
            type:'dark'
          },

        typography:{
            h1:{color:"#DF9534", fontWeight:"bold", fontFamily: 'sans-serif'},
            h2:{color:"#DF9534", fontWeight:"bold", fontFamily: 'sans-serif'},
            h3:{color:"#DF9534", fontWeight:"bold", fontFamily: 'sans-serif'},
            h4:{color:"#DF9534", fontWeight:"bold", fontFamily: 'sans-serif'},
            h5:{color:"#DF9534", fontWeight:"bold", fontFamily: 'sans-serif'},
            h6:{color:"#DF9534", fontWeight:"bold", fontFamily: 'sans-serif'},
            body1:{color:"#fcfcfc", fontFamily: 'sans-serif'},
            body2:{color:"#fcfcfc", fontFamily: 'sans-serif'},
        },

        bg:'#ff0000',

    })
    

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme }>
            <Paper style={{height:"auto"}} elevation={0}>
                <Router>
                    <div className='App'>
                        <CssBaseline />
                        <Toaster />
                        <Navigation />
                        <Routes />
                        <Footer />
                        <ScrollButton />
                        <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Toggle dark/light" arrow>
                            <IconButton onClick={()=>setDarkMode(!darkMode)} style={{position:"fixed", top:"10%",right:"2%",fontSize:"50px"}}>{darkMode ? <Brightness7Icon/> : <Brightness4Icon/> }</IconButton>
                        </Tooltip>
                    </div>
                </Router>
            </Paper>
        </ThemeProvider>

    )
}

export default App
