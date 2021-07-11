import styled from 'styled-components'

const FlexWrapAlign = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
`

const CommentContainer = styled.div`
    border: 1px solid black;
    padding: 1rem 0.8rem;
    border-radius: 0.4rem;
`

const CommentHead = styled(FlexWrapAlign)`
    justify-content: space-between;
`

const Author = styled(FlexWrapAlign)`
    gap: 0.2rem;
`

const AuthorImage = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;

    & + .date::before {
        content: ".";
    }
`

const CommentText = styled.div`
    margin: 0.4rem 0.2rem;
`

const CommentTop = styled.div`

`

const SingleComment = (props) => {
    return (
        <div class="comment-container">
            <div class="comment-top">
                <div class="comment-author">
                    <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/637629/95087942-1f8d-4160-a644-9a3ff89cf3d8.png" />
                    <span>Jack Sparrow</span>
                    <span class="date">10 July, 2022</span>
                </div>
                <div class="opts"><button>...</button></div>
            </div>
            <div class="comment-text">This is a comment</div>
            <div class="comment-bottom">
                <div class="actions">
                    <ul class="reactions">
                        <li>
                            <div>😍</div>
                            <div>5</div>
                        </li>
                        <li>
                            <div>😇</div>
                            <div>199</div>
                        </li>
                        <li>
                            <div>😎</div>
                            <div>1000</div>
                        </li>       
                    </ul>
                    <div class="reply">Reply</div>
                </div>
                <div class="expand-collapse">Collapse</div>
            </div>
        </div>
    )
}

const AllComments = (props) => {
    const [comments, setComments] = useState([
    {
        id: 103,
        by: 'Nishan Jung Thapa', // fullname(ok)/username/id
        time: 1626009900, // epoch
        reactions: [
            '😍': 3,
            '😇': 1,
            '😎': 2,
        ],
        text: 'I am the guardian in the dark. I vow to defend this planet with my life. I shall father no children and love no one. I am the carrier of my sword and my sword shall carry me. I am the saviour of this world and the pace of humanity. I pledge my sword and my soul to the old Gods and the old Gods will protect me from evil. I shall not be tempted by the demon and the Gods will welcome me in heavens gate and feast me in the great Heaven halls of paradise.',
        parent: null,
        kids: [
            {
                id: 109,
                by: 'Nischal Parsad Khatri',
                time: 1626203900,
                reactions: ['😍': 4],
                text: 'I will make baby.',
                parent: 103
            },
            {
                id: 129,
                by: 'Another Nischal Parsad Khatri',
                time: 1626204900,
                reactions: ['😍': 5],
                text: 'Nice.',
                parent: 103
            },
        ],
        id: 106,
        by: 'Limbu nimbu',
        time: 1626009400,
        reactions: [
            '😍': 300,
        ],
        text: 'Pee pee poo poo',
        parent: null,
        kids: [
            {
                id: 129,
                by: 'Sunil',
                time: 1626204900,
                reactions: ['😍': 5],
                text: 'Nice.',
                parent: 106
            },
        ],
        id: 107,
        by: 'galzin',
        time: 1626009400,
        reactions: [
            '😍': 300,
        ],
        text: '*ba dam tssk*',
        parent: null,
        kids: [],
    }
    ])

    return (

    )
}
