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
`

const HorizontalBar = styled.div`
    z-index: -1;
    border-top: 1.5px solid black;
    position: absolute;
    bottom: 1px;
    left: 0px;
    width: 100%;
    height: 1px;
    transition: bottom 0.6s;
`

const Anchor = styled(Link)`
    &:hover + ${HorizontalBar} {
        transition: bottom 0.3s;
        bottom: 100%;
    }
`

const FancyLink = (props) => {
    /*Extended from react-router-dom/Link. Hence takes all params Link takes*/
    const { children, ...rest } = props
    return (
        <AnchorBar>
            <Anchor {...rest}>{children}</Anchor>
            <HorizontalBar />
        </AnchorBar>
    )
}

export default FancyLink
