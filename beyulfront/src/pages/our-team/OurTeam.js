// All dependences import
import { Container,Card,CardContent,CardMedia, CardActions } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { blue, grey } from '@material-ui/core/colors'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { Divider } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import './index.css'


// All images import
import curve1 from 'img/wave1.svg'
// import curve2 from 'img/curve4.svg'
// import curve3 from 'img/curve3.svg'


// ContactUs component
export default function OurTeam() {
    return (
        <>  
            <div className="topdiv"></div>
            <img src={curve1} alt="curve svg image" className='curve1'/>
            {/* <img src={curve2} alt="curve svg image" className='curve2'/>
            <img src={curve3} alt="curve svg image" className='curve3'/> */}
           
        </>
    )
}


