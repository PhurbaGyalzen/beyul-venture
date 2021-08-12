// All dependencies import
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import UsefulInfo from './UsefulInfo';
import { Typography } from '@material-ui/core';

//Useful info contents
const datas=[
    {
        id:0,
        title:"What is the weather like and best time to visit?",
        description:"Nepal has four season such as autumn (Sep. Nov. and Oct.), winter (Dec. Jan. and Feb.), spring (March, April and May) and monsoon (June, July, and Aug.). During the autumn season the nights are cold in mountains but the bright sun makes for pleasant daytime temperatures. At higher altitudes temperature range from about 20°C down to perhaps -10°C at night. Morning is usually clear, and then clouds build up during the afternoon, disappearing at night to reveal spectacular starry skies.During the winter season high passes, especially the Thorong-la pass, Dhaulagiri circuit, Tilicho (musukanta Pass) in Annapurna trekking, Chola Pass, Renjola Pass, Khongmola pass, Amalaptse pass, Roywalling pass, Serpeni col in Everest reason, Lauribina pass, Ganjala pass, Gosaikunda pass in Langtang, Larky Pass in Manaslu, are usually closed. Short and easy trek in middle hills is the best on this time. Heavy snowfalls do especially during the January, February and March in mountain areas.Spring season bring warmer weather but more frequent storms and considerable snowfall at higher altitude. Birds and flowers, especially rhododendrons, are seen at the lower altitudes. Toward the end of March, haze-caused by dust from the plains of India and smoke from local fires often obscure distant views. In addition it becomes much warmer in the region below 3000 ft. Trekking in Monsoon (June to Aug.) can be undertaken by the keen or experienced. Rain, mist and fog can be expected almost daily, but clouds part occasionally to give spectacular views of the mountains. The floras are usually at their most colorful. Leeches abound in middle elevation forests. Mountain weather is highly unpredictable. Classic signs of a storm approaching such as cirrus clouded sky or a fall in barometric pressure, can be misleading.Best time for trekking in Nepal is autumn (September, October-November) and spring (March, April and May). Short treks and some Guest Houses treks can be done during winter or summer season as well. You need to be prepared for sudden weather changes while trekking. That's why trekking equipment should be chosen carefully before the trip. Sudden rain storms or snow are always a possibility which needs to be considered. The weather during the trekking season is somewhat more stable. 'Beyul Venture' pays big attention to weather forecast."
    },

    {
        id:1,
        title:"How difficult are the trekking?",
        description:"Difficulty of the trekking depends on the region of the trek and duration of it. Shorter treks to be easier while longer / high passes ones require some mentally and physical fitness."
    },

    {
        id:2,
        title:"What kind of Accommodation during the trekking?",
        description:"Nepal has a huge range of accommodation facilities that range from international standard star hotels to budget hotels and lodges. Accommodation facilities are available in the major trekking region in mountain areas. During the trekking it is possible Guest house/Lodge facilities. In the guest house / Lodge have running hot and cold water facilities. Private rooms are available in most guest house/ Lodge. Most bathrooms are shared. Many years experience of Trekking field of organizing various treks in Nepal assures you that we have chosen for our treks the cleanest and most hygienically kept Guest Houses /Lodge with friendly atmosphere and best views. In the high passes modern trekking we use basic tea house. If the clients require tented camping trekking it is operated. Camping trek is fully organized and supported, with a team of guides, cooks, Sherpas and porters to accompany you. Our porters carry all the trekking gear, food, fuel and personal belongings. Our cooks prepare hot meals. Trekkers need only carry a small bag as required for the day. At night, tents for dining, sleeping and ablutions tents are provided and set up, mattresses and down-filled sleeping bags, tables and seating. In a typical camping trek, we start the day around 6/7 AM with a cup of hot tea. You are then provided with a bowl of warm water for washing. Then trekkers enjoy breakfast before leaving camp. The trek begins around 7.30 - 8 a.m. Trekkers can set their pace for pausing and sightseeing and the walk to the lunch spot will normally take 3 hours. On arrival, you are served hot lunch. In the afternoon, after walking for another 3 to 4 hours, you arrive at the next camp around 4/5PM. Tea & snacks are served while our staff readies the camp. Dinner time is around 6/7 PM in the dining tent, lit with lanterns and comfortably furnished.  "
    },

    {
        id:3,
        title:"Where do we eat our meals and what kind of food is available?",
        description:"During a tea house trekking you will have breakfast and dinner in the guest house/ Lodge, lunch will be eaten at one of the trail side restaurants. Every Guest house House serves the traditional Nepali meal Dal Bhat Tarkari (rice, curry and lentil soup). All Guest Houses of our routs have variety of different food items, such as rice, vegetables, noodles, potatoes and soup. Many of them have western food on menu. Soft drinks, snacks, wine and beer are available in most of the guest houses and trail side restaurants. Food safety is always a big concern and we take it very seriously. That is why we have chosen the cleanest and most hygienically kept Hotel for our routes."
    },

    {
        id:4,
        title:"What are the sources of drinking water supply during trekking?",
        description:"All guest houses have boiled water for trekkers. And on the main trekking routes it is possible bolter mineral water to drink. We recommend to your clients not use bolter water, it is not environment friendly. You can use Iodine table or others purify drops. It is noticeable that during the camping or home stay trekking we provide the boiled water to our clients. The guide will make sure that water is safe for drinking."
    },

    {
        id:5,
        title:"What kind of Transport use?",
        description:"Our transportation department provides A/c and non-A/c large, mini coaches, Jeeps, Cars for groups and individual requirements. The chauffeurs and accompanying guides are polite, well behaved, highly experienced and trained. Everyone is well versed with the local areas and communicate in English and other foreign languages."
    },

    {
        id:6,
        title:"What happens in case of emergency?",
        description:"'Beyul Venture' company is prepared for any emergency situation and knows how to handle it. Our guides are trained in first aid and can deal with most of the basic ailments that occur during a trek and directly connection in main office Kathmandu each day if possible. Every client should have his own insurance before coming to Nepal for case of emergency. Our all staff has insurance in case of emergency. We also strongly recommend that you take out trip cancellation, air ambulance /helicopter rescue insurance. You should be aware that some policies do not include, or restrict, cover for this type of travel. You must ensure that the policy you do take provides an adequate level of protection and covers you for the activities involved. You must carry proof of insurance (e.g. your insurance certificate) with you on the holiday; if you cannot provide this at the start of the holiday, you will be required to take out a suitable policy at that time. If this is not done or impossible for practical reasons, then you will not be allowed to continue with our trekking/climbing trips and will not be entitled to any refund for services not provided. Your insurance must include emergency air ambulance/helicopter rescue services."
    },

    {
        id:7,
        title:"How we communication in case of emergency?",
        description:"Land-line and mobile phone services are available in Nepal. Network covers Kathmandu, major cities and towns and most of Nepal, except some rural Himalayan places. Nepal Telecommunications Corporation is the national service supplier. There are also private service suppliers such as Hotels and private communication centers also provide long distance telephone, internet and fax facilities.For calling from outside, country code for Nepal is “977” and the area code for Kathmandu is “1”. To call Nepal from other countries: 00 + country code (977) + city code + telephone number. Example to call us: 00-977-9848859531. Call from Nepal city code and telephone number, example to call us; 01-4320868."
    },

    {
        id:8,
        title:"How many persons in a group size?",
        description:"Group size in website and brochure are our target size but this might change. Maximum a group size is 15 to 25 persons."
    },

    {
        id:9,
        title:"Do I need Trekking Permit?",
        description:"Yes, for trekking all regions is require Trekkers' Information Management System (TIMS) as new policy. You will need a National park / Conservation entrance permit. In Nepal ten national park and three wildlife reserve such as Bardiya National Park, Khaptad National Park, Langtang National Park, Makalu-Barun National Park, Shivapuri-Nagarjun National Park, Banke National Park, Sagarmatha National Park, Chitwan national park, Shey-Phoksundo National Park,Rara National Park and Koshi Tappu Wildlife Reserve, Parsa Wildlife Reserve, Shuklaphanta Wildlife Reserve, One hunting reserve like Dorpatan hunting reserve. We have 5 conservation like Api Nampa Conservation Area, Annapurna Conservation Area, Gaurishanker Conservation Area, Kanchenjunga Conservation Area, Manaslu Conservation Area . Some of control area such as Manaslu trekking, upper and lower Dolpa trekking, Kanchenjunga area trekking, Mustang trekking, Mugu trekking, Darjula, Nar and phu village trekking, Tsum valley trekking does require a special trekking permit issue by Immigration through trekking agency."
    },

    {
        id:10,
        title:"What type of service you can provide?",
        description:"Our services are intended to offer quality and value for money, together with a rich, varied and a rewarding experience. We have built our reputation as the best travel agent in the country for the best service provider. Our prices of all the tours are highly competitive and unmatched with any other local tour operators. We operate trekking with three different kinds; Full organizes service - you want to be free from all concerns to enjoy this experience to the fullest. Guide and documentation only - you prefer to carry your own pack but want to benefit from the guide's experience & knowledge and documentation. Porter(s) service only - you know where you are going & no additional information is desired but you need to helping for carry and documentation."
    },

    {
        id:11,
        title:"How can I book trip?",
        description:"All bookings are made with  Beyul Venture Pvt. Ltd. based at Boudha, Kathmandu, Nepal. Trip is reference to as Company in booking conditions. To book your holiday you need to send us completed booking (inquiry) form or directly email us with details."
    }
];

//Defining CustomStyles for Faq Page
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop:"2rem"
  },
  
}));

// Faq component
export default function UsefulInfoContent (){
    const classes = useStyles()
    const [data, setData] = useState(datas);
    return(
        <>
            <div className={classes.root}>
                <Typography variant="h5" component="h1">Useful information related to the trip.</Typography>
                <Typography variant="body2" color="textSecondary">Please click on  the title to view detail.</Typography>
                
                {data.map((currElement) =>{
                    return(
                            <UsefulInfo key={currElement.id} {...currElement}/>
                    )

                })}
            </div>
        </>
    )
}