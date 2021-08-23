import { useState } from "react";
import {questions} from './FaqData';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      color:"#13181e"
    },


    faqAccordion:{
        '&:hover':{
            backgroundColor:"#DF9534"
         
        }
    }
  }));

export default function MyFaq ({question,answer}){
    const classes = useStyles();
    const [data, setData] = useState(questions);
    return(
        <>
            <div className={classes.root}>
                <Paper>
                    <Accordion style={{backgroundColor:"lightTheme.primary.light"}}>
                        <AccordionSummary className={classes.faqAccordion}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography variant="body1">{question}</Typography>
                        </AccordionSummary>
                        <Divider/>

                        <AccordionDetails>
                        <Typography align="justify" variant="body2">
                        {answer}
                        </Typography>
                        </AccordionDetails>

                    </Accordion>
                </Paper>
                
            </div>          
        </>
    )
}