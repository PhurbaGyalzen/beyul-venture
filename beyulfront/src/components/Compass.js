import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

const CompassContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CompassDegree = styled.p`
    font-size: 3rem;
    font-weight: 600;
    color: white;
    margin: 0;
`

const CompassNode = styled.div`
    position: relative;
    max-width: 18rem;
    max-height: 18rem;
`

const Needle = styled.img`
    width: 100%;
    transition: transform 2s ease-in-out;
`

const Rim = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

const Compass = (props) => {
    const needleRef = useRef(null)
    const [needle, setNeedle] = useState(null)
    const [angle, setAngle] = useState(1)
    const mul = 300
    const [middlePoints, setMiddlePoints] = useState([])

    useEffect(() => {
        const ref = needleRef.current
        if (!ref) return
        setNeedle(ref)
    }, [needleRef])

    useEffect(() => {
        if (!needle) return
        // show animation at the begining of component render
        needle.style.transform = 'rotate(860deg)'
        setMiddlePoints([
            needle.getBoundingClientRect().x + needle.clientWidth / 2,
            needle.getBoundingClientRect().y + needle.clientHeight / 2,
        ])
    }, [needle])

    const animate = (event) => {
        const diffX = event.movementX
        const diffY = event.movementY
        let degree
        if (Math.abs(diffY) >= Math.abs(diffX)) {
            if (
                (diffY >= 0 && event.clientX >= middlePoints[0]) ||
                (diffY <= 0 && event.clientX <= middlePoints[0])
            ) {
                degree = angle + Math.abs(diffY)
            } else {
                degree = angle - Math.abs(diffY)
            }
            degree = degree * 0.012
            needle.style.transform = `rotate(${degree * mul}deg)`
        } else {
            if (
                (diffX >= 0 && event.clientY <= middlePoints[1]) ||
                (diffX < 0 && event.clientY > middlePoints[1])
            ) {
                degree = angle + Math.abs(diffX)
            } else {
                degree = angle - Math.abs(diffX)
            }
            degree = degree * 0.012
            needle.style.transform = `rotate(${degree * mul}deg)`
        }
        setAngle(degree)
    }

    return (
        <CompassContainer>
            <CompassNode onMouseMove={animate}>
                <Needle
                    ref={needleRef}
                    src='https://maptia.imgix.net/assets/images/404/compass-arrow.png?w=300&dpr=1.5&cs=srgb'
                />
                <Rim src='https://maptia.imgix.net/assets/images/404/compass-rim.png?w=300&dpr=1.5&cs=srgb' />
            </CompassNode>
            <CompassDegree>404°N</CompassDegree>
        </CompassContainer>
    )
}

export default Compass
