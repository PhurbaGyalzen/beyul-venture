import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core'
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

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
    <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Scroll To Top">
      <Button style={{position:"fixed",
      right:"0",
      bottom:"0.8rem",
      fontSize:"3rem",
      cursor:"pointer",
      zIndex: 1,
      padding: '0',
      color:"#DF9534"}}>
      <DoubleArrowOutlinedIcon fontSize="large" onClick={scrollToTop} 
      style={{display: visible ? 'inline' : 'none', transform:"rotate(-90deg)", color:"#DF9534"}} />
      </Button>
    </Tooltip>
  );
}
  
export default ScrollButton;