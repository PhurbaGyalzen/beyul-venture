// All dependencies import
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {questions} from './FaqData';
import { useState } from 'react';
import MyFaq from './MyFaq';

//Defining CustomStyles for Faq Page
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

// Faq component
export default function Faq (){
    const [data, setData] = useState(questions);
    return(
        <>
           {data.map((currElement) =>{
               return(
                    <MyFaq key={currElement.id} {...currElement}/>
               )

           })}
        </>
    )
}