import { Container, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Compass from 'components/Compass'
import FancyLink from 'components/FancyLink'
import bg404 from 'img/404 (4).jpg'

const Wrapper = styled(Container)`
    background-image: url('${bg404}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    padding-top: 20vh;
`

const Helptext = styled(Typography)`
    color: white;
    padding-top: 1rem;
    text-shadow: 0px 0px 1px black;
`

const FourZeroFour = (props) => {
    return (
        <Wrapper>
            <Compass />
            <Helptext align='center' variant='h5'>
                It looks like you miscalculated. Click{' '}
                <FancyLink to='/' barColor='#e0781f'>
                    here
                </FancyLink>{' '}
                to return home.
            </Helptext>
        </Wrapper>
    )
}

export default FourZeroFour
