import {
    makeStyles,
    TextField,
    Button,
    Typography,
    Grid,
    Card,
    CardMedia,
    Box,
    Container,
    Link,
} from '@material-ui/core'

import { PackageCard } from './PackageCard'

import styled from 'styled-components'
const TagTitle = styled(Typography)`
    font-weight: 700;
    color: #3b3b3b;
    font-size: 1.5rem;
`

export const TagContainer = ({ tagContent }) => {
    const packages = tagContent.packages
    return (
        <>
            <Container style={{ marginTop: '1rem', marginBotton: '1rem' }}>
                <div>
                    <div style={{ float: 'left' }}>
                        <TagTitle>{tagContent.tagName}</TagTitle>
                    </div>
                    <div style={{ float: 'right', paddingRight: '10px' }}>
                        <Link>Explore all</Link>
                    </div>
                </div>
                <Grid container spacing={2}>
                    {packages.map((pack) => {
                        return <PackageCard key={pack.id} tagPackages={pack} />
                    })}
                </Grid>
            </Container>
        </>
    )
}
