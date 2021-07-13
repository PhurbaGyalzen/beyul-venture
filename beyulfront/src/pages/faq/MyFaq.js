import { useState } from "react";
import {questions} from './FaqData';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },

    faqAccordion:{
        '&:hover':{
            backgroundColor:"#EA6547"
         
        }
    }
  }));

export default function MyFaq ({question,answer}){
    const classes = useStyles();
    const [data, setData] = useState(questions);
    return(
        <>
            <div className={classes.root}>
                <Accordion style={{backgroundColor:"#ffccbc"}}>
                    <AccordionSummary className={classes.faqAccordion}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>{question}</Typography>
                    </AccordionSummary>
                    <Divider/>

                    <AccordionDetails style={{backgroundColor:"#EA6547"}}>
                    <Typography align="justify">
                       {answer}
                    </Typography>
                    </AccordionDetails>

                </Accordion>
                
            </div>          
        </>
    )
}