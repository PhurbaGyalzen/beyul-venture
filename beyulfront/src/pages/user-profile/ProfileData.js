import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export const ProfileData = [
    {
        id:1,
        name:'Nischal Khatri',
        user_name:'nischalkhatri',
        email:'nischalkhatri@gmail.com',
        address:'bhaktapur',
        phone:'9848859531',
        socials:{
            facebook:{
                link:'https://www.facebook.com',
                text:'facebook',
                icon : <FacebookIcon/>
            },

            twitter:{
                link:'https://www.twitter.com',
                text:'facebook',
                icon : <TwitterIcon/>
            },

            instagram:{
                link:'https://www.instagram.com',
                text:'facebook',
                icon : <InstagramIcon/>
            },

        }
    }
]

