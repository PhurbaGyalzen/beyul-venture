
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
                },
            ],
        }
    )
    const packageD = tagPackage.packages
    return (
        <>
            <Box>
                <Container>
                    {packageD.map((content)=> {
                        return <HorizontalCard key={content.id} tagPackages={content} />
                    })}
                </Container>
            </Box>
        </>
    )
}
