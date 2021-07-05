import { withStyles } from '@material-ui/core/styles'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    makeStyles,
} from '@material-ui/core'
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
    cardImage: {
        // height: "15rem",
    },
    onTopCard: {
        position: 'absolute',
        width: '100%',
        padding: '0.8rem',
        backgroundColor: '#000000bb',
    },
}))

const SimpleCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`

const ResponsiveCardMedia = styled(CardMedia)`
    width: clamp(10vw, 15rem, 40vw);
`

const Place = ({ place }) => {
    const classes = useStyles()
    return (
        <SimpleCard>
            <ResponsiveCardMedia
                component='img'
                className={classes.cardImage}
                image={place.thumb_src}
                title={place.title}
            />
            <CardContent className={classes.onTopCard}>
                <Typography
                    align='center'
                    style={{
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                    }}
                >
                    {place.title}
                </Typography>
            </CardContent>
        </SimpleCard>
    )
}

export default Place
