//All dependencies import
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import photo from 'img/termsAndConditions.png';


//TermsAndConditions component information

const datas=[
    {
        id:0,
        title:'Down Payment',
        content:'As per the company policy, you can book your trip paying as little as 20% non-refundable deposits upfront to secure your trip. And you can pay rest of the amount when you arrive to our office in Kathmandu before the trip departure.'
    },

    {
        id:1,
        title:'Payment of the Balance',
        content:'Your outstanding payment for a trip should be made upon your arrival in Kathmandu. If you would like to pay by credit card, a handling charge of 4% on the outstanding balance is made, while there is no such charge for cash payment. You can also pay by cash such as USD, EURO, SWISS FRANC, and NEPALESE RUPEES. You’re also able to get money from ATM. There is so many ATM machine all around. You just have to mention to your bank, I am going to Nepal before you’re leaving home. So they will make access to your ATM card is working in Nepal. Get money from ATM also very easy.'
    },

    {
        id:2,
        title:'Last Minute Booking',
        content:" The last-minute bookings are also accepted."
    },

    {
        id:3,
        title:'Flight Delay/Cancellation',
        content:"There might be the possibility of flight delay or cancellation, particularly in Himalayan regions like the Everest region, the Annapurna region, the Kanchenjunga region, and Jumla region that sees bad weather pretty often. Thus, it’s recommended to carry extra cash for food and accommodation in case of delays. Also, if you are traveling to remote areas, it is advised to fit extra days in your itinerary to prepare with some delays and unforeseen conditions. In case of flight delay or cancellation, we will not be responsible for food and accommodation except those in the itinerary."
    },

    {
        id:4,
        title:'Refund',
        content:" The down payment of 20% will not be refunded in case of cancellation of trip for any other else reason. If you have made the full payment, then you are entitled to refund of all amount minus 20% of the total amount. Still, there are certain charges you might have to incur. To cancel any trip, written notification of your cancellation should be made."
    },

    {
        id:5,
        title:'Injuries and Evacuation',
        content:" Beyul Venture would not be liable for any health/injury/emotional conditions suffered during the trip. Our packages don’t include any personal insurance, so if you want travel insurance, you will have to get one yourself. We will provide you a personal first-aid kit and larger medicine kit to the group leader, but other than that, we will not be liable for any injury. Thus, it is recommended to get adequate insurance packages, including medical insurance and Helicopter evacuation."
    },

    {
        id:6,
        title:'Unforeseen Circumstances',
        content:"Our normal refund policy does not apply in the event of natural disasters, War, conflict, unfavorable climate, unforeseen beyond our control etc. In this case deposits are not refundable. It’s best to check your travel insurance and make sure that is cover trip interruption and cancellations. However, we will not be responsible for other expenses you have incurred as a result of this booking. In the event that we will cancel the trip we will work with you to reschedule the trek date at no extra cost. If you decide cancel the trek that we are still running due to one of the above events we will work with you to reschedule the dates at no extra cost as long as you notify us at least 20 days in advance."
    },

    {
        id:7,
        title:'Clients Responsibility',
        content:" Happyland Treks guide has full authority during your tours. If you commit any illegal act, you will be forced to leave the tour, and no refund will be made. Impact on Your Journey we will make every possible effort to ensure you have a comfortable journey with us. But, you have to understand that the Himalayan countries do not have facilities like the western countries, so you should lower your expectations a lot regarding facilities. The weather might also be a factor that will impact your journey. Especially in Himalayan regions, the weather is a huge problem, so we hope you will deal with patience and proper preparation."
    },

    {
        id:8,
        title:'Papers and Documents',
        content:"You should present all the necessary documents like Passport, visas, permits, etc. You will be held accountable in case you cannot make trips due to the absence of essential papers and documents."
    },

    {
        id:9,
        title:'Risk and Responsibility',
        content:"Your safety and entertainment is our top priority. We do not leave any effort to have you enjoy your holiday without any worry. However, there is possibility of natural disasters like floods, landslides, and many other unforeseen problems like flight delay, sickness, or accidents, so we advise you also to be careful. Any extra cost incurring there is your responsibility and should be borne on the spot."
    },

    {
        id:10,
        title:'Travel Insurance',
        content:"Proof of travel insurance is compulsory before the trek. Standard policies often only cover medical evacuation to 4000m, so make sure the policy you get covers trekking as an activity up to 4000m. Some of the policies in Nepal require you to pay for evacuation upfront and reimburse after the trip ends. Evacuation can cost up to $5000, so make sure to get an insurance policy that covers all this type of payment while traveling. You will mostly require these policies while trekking in the remote regions so that the days will be limited. Happyland Treks strongly recommends you to check specifics with your insurance company before the trip. If you are planning to climb a trekking peak, you will have to get an insurance policy that also covers climbing as an activity. If you are evacuated and want to make an insurance claim, it is mandatory to get a hospital report in Nepal as soon as you get off the mountain. Our itineraries have enough time for you to get acclimatized in higher altitudes; however, it’s important to get the proper medical documentation for claims. You can get a medical report for a fee of about 150 to 200 USD from any hospital. Happyland Treks is not responsible for any evacuation or medical bills during the trip, so make sure you have enough insurance covering these bills. Whatever documentation you need to claim from the insurance company, our team will help you with that."
    },
];

//Defining custom styles
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        width:"100%",
        overflow:"hidden"
    },
    
    photoDiv:{
        width:"100vw",
        height:"100vh",
        boxSizing:"borderBox",
        overflow:"hidden"
    },

    photo:{
        width:"100%",
        height:"100%",
        backgroundRepeat:"noRepeat",
        backgroundSize:"cover",
        backgroundPosition:"center",

    },

    photoText:{
        fontSize:"2rem",
        fontWeight:"bold",
        color:"#ffffff",
        letterSpacing:"0.1rem",
    },

    title:{
        fontWeight:"bold",
        fontSize:"1rem",
        lineHeight:"rem",
        color:"#694311",
    },

    content:{
        textAlign:"justify",
        fontSize:"1rem",
        lineHeight:"1.685rem",
        color:"#13181e",
    }
    
}))


//Defining Overview component
export default function TermsAndConditions() {
    const classes = useStyles()
    const[termsAndConditions, setTermsAndConditions]=useState(datas);
    return (
        <>
            <div className={classes.root}>
                <Grid container>
                    <Grid item  xs={12}>
                        <div className={classes.photoDiv}>
                            <img src={photo} alt="terms and conditions images" className={classes.photo}/>
                        </div>
                    </Grid>
                </Grid>

                {termsAndConditions.map((data)=>(
                    <Grid container>
                        <Grid item xs={12}>
                            <Box p={3} style={{width:"80%", margin:"auto"}}>
                                <Typography className={classes.title}>
                                    {data.title}
                                </Typography>

                                <Typography className={classes.content}>
                                    {data.content}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </div>
        </>
        
    );
};
