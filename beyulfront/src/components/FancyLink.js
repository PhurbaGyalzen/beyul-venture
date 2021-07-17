import styled from 'styled-components'
import { Link } from 'react-router-dom'

/*const FancyLink = styled.a`
    color: black;
    padding: 1px 3px;
    background: linear-gradient(#0470ffab, #0954fcc7) bottom no-repeat;
    background-size: 100% 2px;
    transition: background-size 0.2s ease-in, color 0.2s ease-in;
    &:hover {
        color: white;
        transition: background-size 0.1s ease-in, color 0.1s ease-in;
        background-size: 100% 100%;
    }
`*/

const AnchorBar = styled.span`
    display: inline-block;
    position: relative;
    z-index: 1;
`

const HorizontalBar = styled.div`
    border-top: 1.5px solid ${(props) => props.color || 'black'};
    position: absolute;
    bottom: 1px;
    left: 0px;
    width: 100%;
    height: 1px;
    transition: bottom 0.6s ease-out 0.2s;
`

const Anchor = styled(Link)`
    position: relative; /*for z-index*/
    z-index: 1;
    &:hover + ${HorizontalBar} {
        transition: bottom 0.3s;
        bottom: 100%;
    }
`

const FancyLink = ({ barColor, ...rest }) => {
    /*Extended from react-router-dom/Link. Hence takes all params Link takes*/
    const { children, ...rester } = rest

    return (
        <AnchorBar>
            <Anchor {...rester}>{children}</Anchor>
            <HorizontalBar color={barColor} />
        </AnchorBar>
    )
}

export default FancyLink
