import { useState, useEffect } from 'react'
import { Typography, Grid, Conatainer, Box, Container, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router'
import { TagCard } from './TagCard';



const blogStyles = makeStyles((theme) => ({
    blogContainer: {
        maxWidth: '750px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    blogImageContainer: {
        width: '100%',
        height: 'auto',
    },
    imageCustomize: {
        maxWidth: '750px',
        width: 'inherit',
        height: 'inherit',
        maxHeight: '360px',
    },
    authorStyle: {
        textDecoration: 'None',
        color: '#fff',
        marginRight: '0.7rem',
        '&:hover': {
            textDecoration: 'Underline',
        },
    },
    dateStyle: {
        color: 'rgba(117,117,117,1)',
    },
    articleTitle: {
        fontWeight: '600',
        color: '#fff',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: {
            fontWeight: '400',
        },
    },
    articleInfo: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#fff',
        textTransform: 'uppercase',
        '& span': {
            marginRight: '1rem',
        },
    },

    articleDetail: {
        marginRight: '6vh',
        paddingTop: '75vh',
        padding: '0 4rem',
        [theme.breakpoints.down('sm')]: {
            marginRight: '2rem',
            paddingTop: '50vh',
            padding: '0 1rem',
        },
        // [theme.breakpoints.up('md')]:{
        //     padding: "0 2rem"
        // }
    },
    commentSection: {
        maxWidth: '750px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3rem',
        marginBottom: '3rem',
    },
}))


export const BlogTag = () => {

    const {tagname} = useParams();
    
    const [blogData, setBlogData] = useState([
        // {
        //     id: 1,
        //     title: 'Memories on the trails of Annapurna',
        //     thumbnail: '/static/images/annapurna.jpg',
        //     created_on: '2020/10/12',
        //     author_id: 1,
        //     author: 'Jaikant Shikre',
        //     likes: 4,
        //     tags: ['Annapurna', 'Landscape', 'Best Of'],
        //     description:
        //         'Trek through the incredible Annapurna region and be awed by the Nepalese Himalayas. These snow-capped peaks, mist-shrouded valleys, isolated communities and remote monasteries will inspire those with a bold spirit and a yearning for a definitive nature experience. Reach altitudes of more than 5000 metres, discover the ancestral traditions of the local people and immerse yourself completely in the spectacular mountain wilderness of the Annapurna Circuit. This is a challenging trip, but the sense of accomplishment will leave even the most seasoned trekker with some unforgettable memories.',
        // },
        // {
        //     id: 2,
        //     title: 'Experience with the undeniable Beauty of Pokhara',
        //     thumbnail: '/static/images/peacePagoda.jpg',
        //     created_on: '2020/10/12',
        //     author_id: 1,
        //     author: 'Jaikant Shikre',
        //     likes: 4,
        //     tags: ['Annapurna', 'Landscape', 'Best Of'],
        //     description:
        //         'Pokhara Lekhnath, better known as Pokhara is tucked in the northwestern corner of the Pokhara Valley, Nepal. The city is one such place where tourists can enjoy a truly unique experience with some amazing Pokhara tour packages. Be it discovering the panoramic views over the Himalayan peaks, relaxing on the lakeside, experiencing the charm of this largest city of Nepal, or indulging in boating or paragliding - Pokhara vacation package uplifts the journey for the travelers with a perfect blend of serene atmosphere, famous tourist attractions, and amazing delicacies to enjoy their vacations.',
        // },
        // {
        //     id: 3,
        //     title: 'Snowy trek to the Gokyo lake',
        //     thumbnail: '/static/images/gokyo.jpg',
        //     created_on: '2020/10/12',
        //     author_id: 1,
        //     author: 'Jaikant Shikre',
        //     likes: 4,
        //     tags: ['Annapurna', 'Landscape', 'Best Of'],
        //     description:
        //         'The sparkling, pristine blue and green waters of the Gokyo Lakes are one of Nepal’s most memorable sights. They comprise the highest freshwater lake system in the world, at around 5,000 meters. The Gokyo Lakes trek is ideal for people who want to trek in the Everest region, but who want more variety of views and fewer nights spent at very high altitude.',
        // },
        // {
        //     id: 4,
        //     title: 'Through dry desert of Manang',
        //     thumbnail: '/static/images/langtang.jpg',
        //     created_on: '2020/10/12',
        //     author_id: 1,
        //     author: 'Jaikant Shikre',
        //     likes: 4,
        //     tags: ['Annapurna', 'Landscape', 'Best Of'],
        //     description:
        //         'The sparkling, pristine blue and green waters of the Gokyo Lakes are one of Nepal’s most memorable sights. They comprise the highest freshwater lake system in the world, at around 5,000 meters. The Gokyo Lakes trek is ideal for people who want to trek in the Everest region, but who want more variety of views and fewer nights spent at very high altitude.',
        // },
        // {
        //     id: 5,
        //     title: 'Into the wild safari in Chitwan',
        //     thumbnail: '/static/images/chitwan2.jpg',
        //     created_on: '2020/10/12',
        //     author_id: 1,
        //     author: 'Jaikant Shikre',
        //     likes: 4,
        //     tags: ['Annapurna', 'Landscape', 'Best Of'],
        //     description:
        //         'They are all around 6/7hours distance of each other (depending on traffic) via the tourist buses which run daily.Most travel offices in Kathmandu or Pokhara will have buses which run to Chitwan and it should cost no more than $8-$15 USD (800-1500 Nepalese rupees) depending on what bus company you choose and if it includes lunch.Blue Sky Travels, Mountain Overland and Greenline were the popular choices and recommended in Lonely Planet.But, there are many companies which go the same route, you’re really just paying for the bus quality. For some reason, all buses seemed to leave at the same time of 7am to the popular tourist destinations in Kathmandu, Pokhara and ChitwanIf you wanted to avoid commission fees you could just turn up at the bus stand and pay on the bus.But, you’re not guaranteed to find a bus with a seat available.Obviously, it’s good to check when and where the buses go from',
        // },
        // {
        //     id: 6,
        //     title: 'The Beauty of of Eastern Nepal',
        //     thumbnail: '/static/images/illam1.jpg',
        //     created_on: '2020/10/12',
        //     author_id: 1,
        //     author: 'Jaikant Shikre',
        //     likes: 4,
        //     tags: [
        //         'Annapurna',
        //         'Landscape',
        //         'Best Of',
        //         'Scenery',
        //         'Mountains',
        //         'Thrill',
        //         'Adventure',
        //     ],
        //     description:
        //         'he name Ilam is derived from the Limbu language in which “Ii” means twisted and “Lam” means road. Ilam was one of the ten self ruling states of Limbuwan before the unification of Nepal, its ruler King Hangshu Phuba Lingdom of Lingdom dynasty ruled Ilam as a confederate state of Limbuwan until 1813 AD. The treaty between the other Limbuwan states and the King of Gorkha (Gorkha-Limbuwan Treaty of 1774 AD) and the conflict of Gorkha and Sikkim led to the unification of Ilam with Gorkha. Ilam was the last of the ten kingdoms of Limbuwan to join the union of Nepal. The King of Gorkha gave the ruler of Ilam full autonomy to rule and the right of Kipat. Ilam was an independent Limbu kingdom until 1813 CE/1869 BS.',
        // },
    ])

    const [tagData,setTagData] = useState([]);

    useEffect(async () => {
        const tagApi = await ajax('/api/tag/'+tagname+'/')
        setTagData(tagApi);
        setBlogData(tagApi.posts);
        console.log(tagApi);
    }  
        
        ,[])


    const classes = blogStyles();

    return (
        <>
          <Container
            maxWidth='xl'
            style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("${tagData.background_img}")`,
                height: '100vh',
                padding: '0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                offset:'1',
            }}
          >
              <Container maxWidth='lg' mt={10} mb={10}>
                        <div className={classes.articleDetail}>
                            <div>
                                <Typography
                                    variant='h4'
                                    align='center'
                                    className={classes.articleTitle}
                                >
                                    {tagData.name}
                                </Typography>
                            </div>
                            
                        </div>
                    </Container>

          </Container>
          <Box mt={7}>
              <Container mt='2rem'>
                {/* <Typography variant="h6" gutterBottom>
                    Blogs:
                </Typography> */}

                <Grid container spacing={4} align='center'>
                    {blogData.map((data) => {
                        return <TagCard key={data.slug} data={data} />
                    })}
                </Grid>
              </Container>
          </Box>
        </>
    )
}
