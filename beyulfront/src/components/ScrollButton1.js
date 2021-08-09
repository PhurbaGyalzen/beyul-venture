import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core'
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';

//Defining CustomStyles for AboutUs Page
const useStyles = makeStyles((theme) => ({
}))
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000){
      setVisible(true)
    } 
    else if (scrolled <= 1000){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button style={{position:"fixed",
    width:"100%",
    left:"47%",
    bottom:"2.5rem",
    height:"1.25rem",
    fontSize:"3rem",
    zIndex:1,
    cursor:"pointer",
    color:"#DF9534"}}>
     <DoubleArrowOutlinedIcon fontSize="large" onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none', transform:"rotate(-90deg)", color:"#DF9534"}} />
    </Button>
  );
}
  
export default ScrollButton;