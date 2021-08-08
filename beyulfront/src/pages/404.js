import { Container, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Compass from 'components/Compass'
import FancyLink from 'components/FancyLink'
import bg404 from 'img/404(1).jpg'

const Wrapper = styled.div`
    background-image: url('${bg404}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding-top: 20vh;
    padding-bottom: 5rem;
    margin-bottom: -80px;
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
            <Helptext align='center' variant='h5' style={{paddingTop:"2rem"}}>
                It looks like you miscalculated. Click{' '}
                <FancyLink to='/' barColor='#e0781f' >
                    here
                </FancyLink>{' '}
                to return home.
            </Helptext>
        </Wrapper>
    )
}

export default FourZeroFour
