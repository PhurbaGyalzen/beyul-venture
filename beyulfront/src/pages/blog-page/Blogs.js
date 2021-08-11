import { useState, useEffect } from 'react'
import { Box, Container, Card, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { BlogCard } from './BlogCard'
import './index.css'

const Section = (props) => {
    return <section>{props.children}</section>
}

const Blogs = (props) => {
    /*
    const [blogData, setBlogData] = useState([
        {
            id: 1,
            title: 'Memories on the trails of Annapurna',
            thumbnail: '/static/images/annapurna.jpg',
            created_on: '2020/10/12',
            author_id: 1,
            author: 'Jaikant Shikre',
            likes: 4,
            tags: ['Annapurna', 'Landscape', 'Best Of'],
            description:
                'Trek through the incredible Annapurna region and be awed by the Nepalese Himalayas. These snow-capped peaks, mist-shrouded valleys, isolated communities and remote monasteries will inspire those with a bold spirit and a yearning for a definitive nature experience. Reach altitudes of more than 5000 metres, discover the ancestral traditions of the local people and immerse yourself completely in the spectacular mountain wilderness of the Annapurna Circuit. This is a challenging trip, but the sense of accomplishment will leave even the most seasoned trekker with some unforgettable memories.',
        },
        {
            id: 2,
            title: 'Experience with the undeniable Beauty of Pokhara',
            thumbnail: '/static/images/peacePagoda.jpg',
            created_on: '2020/10/12',
            author_id: 1,
            author: 'Jaikant Shikre',
            likes: 4,
            tags: ['Annapurna', 'Landscape', 'Best Of'],
            description:
                'Pokhara Lekhnath, better known as Pokhara is tucked in the northwestern corner of the Pokhara Valley, Nepal. The city is one such place where tourists can enjoy a truly unique experience with some amazing Pokhara tour packages. Be it discovering the panoramic views over the Himalayan peaks, relaxing on the lakeside, experiencing the charm of this largest city of Nepal, or indulging in boating or paragliding - Pokhara vacation package uplifts the journey for the travelers with a perfect blend of serene atmosphere, famous tourist attractions, and amazing delicacies to enjoy their vacations.',
        },
        {
            id: 3,
            title: 'Snowy trek to the Gokyo lake',
            thumbnail: '/static/images/gokyo.jpg',
            created_on: '2020/10/12',
            author_id: 1,
            author: 'Jaikant Shikre',
            likes: 4,
            tags: ['Annapurna', 'Landscape', 'Best Of'],
            description:
                'The sparkling, pristine blue and green waters of the Gokyo Lakes are one of Nepal’s most memorable sights. They comprise the highest freshwater lake system in the world, at around 5,000 meters. The Gokyo Lakes trek is ideal for people who want to trek in the Everest region, but who want more variety of views and fewer nights spent at very high altitude.',
        },
        {
            id: 4,
            title: 'Through dry desert of Manang',
            thumbnail: '/static/images/langtang.jpg',
            created_on: '2020/10/12',
            author_id: 1,
            author: 'Jaikant Shikre',
            likes: 4,
            tags: ['Annapurna', 'Landscape', 'Best Of'],
            description:
                'The sparkling, pristine blue and green waters of the Gokyo Lakes are one of Nepal’s most memorable sights. They comprise the highest freshwater lake system in the world, at around 5,000 meters. The Gokyo Lakes trek is ideal for people who want to trek in the Everest region, but who want more variety of views and fewer nights spent at very high altitude.',
        },
        {
            id: 5,
            title: 'Into the wild safari in Chitwan',
            thumbnail: '/static/images/chitwan2.jpg',
            created_on: '2020/10/12',
            author_id: 1,
            author: 'Jaikant Shikre',
            likes: 4,
            tags: ['Annapurna', 'Landscape', 'Best Of'],
            description:
                'They are all around 6/7hours distance of each other (depending on traffic) via the tourist buses which run daily.Most travel offices in Kathmandu or Pokhara will have buses which run to Chitwan and it should cost no more than $8-$15 USD (800-1500 Nepalese rupees) depending on what bus company you choose and if it includes lunch.Blue Sky Travels, Mountain Overland and Greenline were the popular choices and recommended in Lonely Planet.But, there are many companies which go the same route, you’re really just paying for the bus quality. For some reason, all buses seemed to leave at the same time of 7am to the popular tourist destinations in Kathmandu, Pokhara and ChitwanIf you wanted to avoid commission fees you could just turn up at the bus stand and pay on the bus.But, you’re not guaranteed to find a bus with a seat available.Obviously, it’s good to check when and where the buses go from',
        },
        {
            id: 6,
            title: 'The Beauty of of Eastern Nepal',
            thumbnail: '/static/images/illam1.jpg',
            created_on: '2020/10/12',
            author_id: 1,
            author: 'Jaikant Shikre',
            likes: 4,
            tags: [
                'Annapurna',
                'Landscape',
                'Best Of',
                'Scenery',
                'Mountains',
                'Thrill',
                'Adventure',
            ],
            description:
                'he name Ilam is derived from the Limbu language in which “Ii” means twisted and “Lam” means road. Ilam was one of the ten self ruling states of Limbuwan before the unification of Nepal, its ruler King Hangshu Phuba Lingdom of Lingdom dynasty ruled Ilam as a confederate state of Limbuwan until 1813 AD. The treaty between the other Limbuwan states and the King of Gorkha (Gorkha-Limbuwan Treaty of 1774 AD) and the conflict of Gorkha and Sikkim led to the unification of Ilam with Gorkha. Ilam was the last of the ten kingdoms of Limbuwan to join the union of Nepal. The King of Gorkha gave the ruler of Ilam full autonomy to rule and the right of Kipat. Ilam was an independent Limbu kingdom until 1813 CE/1869 BS.',
        },
    ])
    */
    const [blogData, setBlogData] = useState([])
    useEffect(async () => {
        const blogs = []
        let url = '/api/blog/'
        for (let _ = 0; _ < 10; _++) {
            const data = await ajax(url)
            if (!data) break
            blogs.push(...data.results)
            const nextPageURL = data.next_page_link
            if (!nextPageURL) break
            url = data.next_page_link
        }
        setBlogData(blogs)
    }, [])
    // one problem is every other article will move to bottom in mobile.
    // soln is prob useEffect hook on viewport size
    const oddIndexBlog = []
    const evenIndexBlog = []
    for (let i = 0; i < blogData.length; i++) {
        const blog = blogData[i]
        blog.id = blog.slug
        blog.author = 'Jaikant Shikre'
        if (i % 2 === 0) evenIndexBlog.push(blog)
        else oddIndexBlog.push(blog)
    }

    return (
        <>
            <Box pt={7} style={{backgroundColor:"#EDEEF0", color:"#13181e"}}>
                <Container style={{paddingTop:"4rem"}}>
                    <Typography align='center' gutterBottom variant='h4' style={{color:"#694311", fontSize:"2rem", fontWeight:"bold", paddingBottom:"2rem"}}>
                        All Articles
                    </Typography>

                    <div id='col-container'>
                        <section id='col1'>
                            {evenIndexBlog.map((blog) => {
                                return (
                                    <BlogCard
                                        key={blog.id}
                                        slug={blog.id}
                                        thumbnail={blog.thumbnail}
                                        title={blog.title}
                                        authorId={blog.author_id}
                                        authorName={blog.author}
                                        likes={blog.likes}
                                        tags={blog.tags}
                                        description={blog.description}
                                    />
                                )
                            })}
                        </section>
                        <section id='col2'>
                            {oddIndexBlog.map((blog) => {
                                return (
                                    <BlogCard
                                        key={blog.id}
                                        slug={blog.id}
                                        thumbnail={blog.thumbnail}
                                        title={blog.title}
                                        authorId={blog.author_id}
                                        authorName={blog.author}
                                        likes={blog.likes}
                                        tags={blog.tags}
                                        description={blog.description}
                                    />
                                )
                            })}
                        </section>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default Blogs
