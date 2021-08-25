import styled from 'styled-components'

const SideCard = styled.div`
    min-height: 12rem;
    display: flex;
    flex-wrap: wrap;

    &:hover svg {
        top: -100%;
        transition: top 1s ease-in-out;
    }
    &:hover img {
        transform: scale(1.1);
    }
`

const SideImageContainer = styled.div`
    position: relative;
    flex: 2 1 200px;
    overflow: hidden;
`

const SideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease-in-out;
`

const SideInfo = styled.div`
    flex: 1 3 300px;
`

const CurveSvg = styled.svg`
    position: absolute;
    top: 0px;
    right: -1px;
    fill: white;
    transform: scaleX(-1);
    transition: top 1s ease-in-out;
`

const InfoCard = ({ thumb, info }) => {
    return (
        <SideCard>
            <SideImageContainer>
                <SideImage src={thumb} />
                <CurveSvg
                    width='15px'
                    height='200%'
                    role='img'
                    preserveAspectRatio='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 66.46 526'
                >
                    <path d='M41 526c13.61-38 47.43-153.17 4.06-263-55.93-141.6 0-263 0-263H0v526z'></path>{' '}
                </CurveSvg>
            </SideImageContainer>
            <SideInfo>{info}</SideInfo>
        </SideCard>
    )
}
