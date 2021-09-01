
import { useState, useEffect } from 'react'
import {
    Typography,
    Grid,
    Box,
    Container,
    makeStyles,
    Card,
    CardMedia
} from '@material-ui/core'
import { useParams } from 'react-router'
import {HorizontalCard} from './HorizontalCard'
import Paper from '@material-ui/core/Paper'
import SearchBar from 'material-ui-search-bar'

export const TagPackage = () => {
    const [tagPackage, setTagPackage] = useState(
        {
            id: 1,
            tagName: 'Adventure',
            packages: [
                {
                    id: 1,
                    title: 'Everest Base Camp Trek',
                    location: 'Solukhumbu',
                    rating: 4,
                    ratedBy: 1000,
                    currentPrice: 38000,
                    duration: 14,
                    packageImage: '/static/images/adventure.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',
                },
                {
                    id: 2,
                    title: 'Chitwan Safari',
                    location: 'Chitwan',
                    rating: 5,
                    ratedBy: 1000,
                    currentPrice: 20000,
                    duration: 3,
                    packageImage: '/static/images/chitwan.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',

                },
                {
                    id: 3,
                    title: 'Langtang Trek',
                    location: 'Langtang',
                    rating: 3,
                    ratedBy: 100,
                    currentPrice: 18000,
                    duration: 10,
                    packageImage: '/static/images/langtang.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',

                },
                {
                    id: 4,
                    title: 'Annapurna Trek',
                    location: 'Pokhara',
                    rating: 4,
                    ratedBy: 200,
                    currentPrice: 10000,
                    duration: 13,
                    packageImage: '/static/images/langtang.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',
                },
                {
                    id: 1,
                    title: 'Everest Base Camp Trek',
                    location: 'Solukhumbu',
                    rating: 4,
                    ratedBy: 1000,
                    currentPrice: 38000,
                    duration: 14,
                    packageImage: '/static/images/adventure.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',
                },
                {
                    id: 2,
                    title: 'Chitwan Safari',
                    location: 'Chitwan',
                    rating: 5,
                    ratedBy: 1000,
                    currentPrice: 20000,
                    duration: 3,
                    packageImage: '/static/images/chitwan.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',

                },
                {
                    id: 3,
                    title: 'Langtang Trek',
                    location: 'Langtang',
                    rating: 3,
                    ratedBy: 100,
                    currentPrice: 18000,
                    duration: 10,
                    packageImage: '/static/images/langtang.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',
                },
                {
                    id: 4,
                    title: 'Annapurna Trek',
                    location: 'Pokhara',
                    rating: 4,
                    ratedBy: 200,
                    currentPrice: 10000,
                    duration: 13,
                    packageImage: '/static/images/langtang.jpg',
                    description:' A scenic country loaded with the best of beauty, Vietnam exhibits the marvels of nature through its splendid beaches and green-carpeted slopes. Inviting adventurous souls for years, this place has been a hot go-to destination for many tourists. Taking a Vietnam package from Delhi will guide you towards the amount of fun, thrill and adventure required on any memorable trip.',
                },
            ],
        }
    )
    const packageD = tagPackage.packages
    return (
        <>
            <Box mt={'4rem'}>
                <Container style={{padding:'2rem 0'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <SearchBar style={{width:'400px'}} />
                    </div>
                </Container>
                <Container>
                    <Grid container justifyContent="center" spacing={4}>
                        {packageD.map((content)=> {
                            return <HorizontalCard key={content.id} tagPackages={content} tagName={tagPackage.tagName}/>
                        })}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
