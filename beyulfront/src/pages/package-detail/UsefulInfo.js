import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      color:"#13181e"
    },
   
    usefulInfoAccordion:{
        color:"#13181e",
        '&:hover':{
            backgroundColor:"#694311",
            color:"#ffffff"
         
        }
    }
  }));

export default function UsefulInfo ({title,description}){
    const classes = useStyles();
    return(
        <>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary className={classes.usefulInfoAccordion}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant="body1">{title}</Typography>
                    </AccordionSummary>
                    <Divider/>

                    <AccordionDetails>
                    <Typography align="justify" variant="body2">
                       {description}
                    </Typography>
                    </AccordionDetails>

                </Accordion>
                
            </div>          
        </>
    )
}