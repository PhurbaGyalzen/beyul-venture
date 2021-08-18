//All dependencies import
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import photo from 'img/privacyPolicy1.jpg';


//PrivacyPolicy component information

const datas=[
    {
        id:0,
        title:'What are the information’s required by us?',
        content:'As per the company policy, you can book your trip paying as little as 20% non-refundable deposits upfront to secure your trip. And you can pay rest of the amount when you arrive to our office in Kathmandu before the trip departure.'
    },

    {
        id:1,
        title:'Security of the information',
        content:'Your information will be stored in our company’s server. However, no any assess is available to such information until and unless the members of Beyul Venture need it for some valid reasons. We would like to assure that the details of your credit card will not be stored in our server while making payment. The payment system is highly secured.'
    },

    {
        id:2,
        title:'We collect some unspecified information ',
        content:"To promote our business, we need to improve our official site. Therefore, some of your information is assessed by the google analytics to obtain the detail of our web traffic. The information like page viewed, location, date and time can be assessed easily."
    },

    {
        id:3,
        title:'We use cookies',
        content:"We use cookies which helps us to know that you are our visitor who had visited us previously. When you browse us the second time, the technology popularly known as cookies recognizes your browser and helps us know that your browser had visited our site. The links on our website"
    },

    {
        id:4,
        title:'Renewal of policy',
        content:" We reserve our right to amend or update our privacy policy if necessary. The privacy policy is subject to change as per the circumstances. If you have any queries regarding our privacy policy, you can mail us your queries at our company’s office mailing address or privacy@beyulventure.com"
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
    },

    content:{
        textAlign:"justify",
        fontSize:"1rem",
        lineHeight:"1.685rem",
    }
    
}))


//Defining Overview component
export default function PrivacyPolicy() {
    const classes = useStyles()
    const[privacyPolicy, setPrivacyPolicy]=useState(datas);
    return (
        <>
            <div className={classes.root}>
                <Box pb={5}>
                    <Grid container>
                        <Grid item  xs={12}>
                            <div className={classes.photoDiv}>
                                <img src={photo} alt="privacy policy images" className={classes.photo}/>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                
                <Box p={3} style={{width:"80%", margin:"auto"}}>
                    <Grid container>
                        <Grid item>
                            <Typography>Beyul Venture collects information about their customers as per our Know Your Customer Policy. We need your information to arrange a smooth and effective trip for you in Nepal, Tibet or Bhutan. However, we value the privacy of our esteemed customers. Any kind of misuse of information or handing over your information to others is highly discouraged. We appreciate the fact that you hand over your confidential information to us with trust and ensure you to reciprocate the same in future.</Typography>
                        </Grid>
                    </Grid>
                </Box>

                

                {privacyPolicy.map((data)=>(
                    <Grid container>
                        <Grid item xs={12}>
                            <Box p={3} style={{width:"80%", margin:"auto"}}>
                                <Typography className={classes.title} variant="h4">
                                    {data.title}
                                </Typography>

                                <Typography className={classes.content} variant="body2">
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
