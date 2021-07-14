import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
`

const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0rem;
`

const SmallImage = styled.img`
    width: 15vw;
    height: 15vw;
    min-width: 200px;
    min-height: 200px;
    object-fit: cover;

    &:hover + figcaption::after {
        content: attr(data-caption);
    }
    &:hover {
        filter: brightness(0.65);
    }
`

const Figure = styled.figure`
    margin: 0;
`

const FigCaption = styled.figcaption`
    color: white;
    font-size: 0.75rem;
    padding: 0rem 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    text-align: justify;

    overflow: hidden;
    -webkit-line-clamp: 6;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    pointer-events: none;
`
// pointer-events to prevent flicker

const InstagramWidget = ({ posts }) => {
    return (
        <FlexBox>
            {/*use grid instead of slicing*/}
            {posts.slice(0, 20).map((post) => {
                return (
                    <a
                        key={post.id}
                        href={`https://www.instagram.com/p/${post.id}/`}
                        target='_blank'
                        rel='noreferer noopener nofollow external'
                    >
                        <Figure style={{ position: 'relative' }}>
                            <SmallImage
                                // keep crossOrigin before src
                                crossOrigin='anonymous'
                                src={post.thumb_src}
                                alt={post.caption}
                            />
                            <FigCaption
                                data-caption={post.caption}
                            ></FigCaption>
                        </Figure>
                    </a>
                )
            })}
        </FlexBox>
    )
}

export default InstagramWidget
