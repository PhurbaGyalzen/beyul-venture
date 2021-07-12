import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import styled, { css } from 'styled-components'

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
    margin: 0.3rem 0;
    margin-left: ${(props) => props.indent + 'rem' || '0rem'};
`

const CommentHead = styled(FlexWrapAlign)`
    justify-content: space-between;
`

const Author = styled(FlexWrapAlign)`
    gap: 0.4rem;
    flex: 1 1 0;
`

const Options = styled.div``

const AuthorImage = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;

    & ~ .date::before {
        content: '· ';
    }
`

const CommentText = styled.div`
    margin: 0.4rem 0.2rem 0.6rem 0.2rem;
`

const CommentBottomAction = styled(FlexWrapAlign)`
    justify-content: space-between;
    margin: 0.3rem;
`

const CommentAction = styled(FlexWrapAlign)`
    gap: 1rem;
`

const Reaction = styled(FlexWrapAlign)`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const reacted = (fn, emoji) => {
    return
}

const ReactionList = styled(FlexWrapAlign)`
    gap: 0.2rem;
    cursor: pointer;
    padding: 0.1rem 0.4rem;
    border: 1px solid black;
    border-radius: 1rem;
    &::selection,
    & *::selection {
        background: #ffffff00;
    }
    &::-moz-selection,
    & *::-moz-selection {
        background: #ffffff00;
    }
    &:hover {
        background-color: #6c9ae227;
    }
    ${(props) =>
        props.reacted &&
        css`
            background-color: #6c9ae247;
            color: blue;
        `}
`

const ReactionItem = ({ emoji, count, reacted, onClick }) => {
    return (
        <ReactionList
            as='li'
            reacted={reacted}
            onClick={onClick}
            data-id={emoji}
        >
            <div>{emoji}</div>
            <div>{count}</div>
        </ReactionList>
    )
}

const insertCommentBox = (that) => {
    console.log(that)
}

const flatten = (arr) => {
    let indent = -1
    const inner = (innerArr) => {
        indent += 1
        const r = []
        for (const parent of innerArr) {
            if (parent.kids && parent.kids.length > 0) {
                const { kids, ...rest } = parent
                r.push({ ...{ indent: indent }, ...rest })
                r.push(...inner(parent['kids']))
            } else {
                r.push({ ...{ indent: indent }, ...parent })
            }
        }
        indent -= 1
        return r
    }

    return inner(arr)
}

const Comment = (props) => {
    const comment = props.comment
    const [reactions, setReactions] = useState(comment.reactions)

    return (
        <CommentContainer indent={props.indent} data-id={comment.id}>
            <CommentHead>
                <Author>
                    <AuthorImage src='https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/637629/95087942-1f8d-4160-a644-9a3ff89cf3d8.png' />
                    <span>{comment.by}</span>
                    <span className='date'>
                        {new Date(comment.time).toLocaleString()}
                    </span>
                </Author>
                <Options>
                    <button>...</button>
                </Options>
            </CommentHead>
            <CommentText>{comment.text}</CommentText>
            <CommentBottomAction>
                <CommentAction>
                    <Reaction as='ul'>
                        {reactions.map((reaction) => {
                            return (
                                <ReactionItem
                                    key={reaction.id}
                                    emoji={reaction.id}
                                    count={reaction.count}
                                    reacted={reaction.reacted}
                                    onClick={() => {
                                        const recs = []
                                        for (const r of reactions) {
                                            if (r.id === reaction.id) {
                                                if (r.reacted) {
                                                    r.count = r.count - 1
                                                    r.reacted = false
                                                } else {
                                                    r.count = r.count + 1
                                                    r.reacted = true
                                                }
                                            }
                                            recs.push(r)
                                        }
                                        setReactions(recs)
                                    }}
                                />
                                /*<ReactionItem emoji={reaction.id} count={reaction.count} onClick={setReactions} />*/
                            )
                        })}
                        <li></li>
                    </Reaction>
                    <div className='reply'>
                        <Button
                            variant='outlined'
                            onClick={function () {
                                console.log(this)
                            }}
                        >
                            Reply
                        </Button>
                    </div>
                </CommentAction>
                <div className='expand-collapse'>Collapse</div>
            </CommentBottomAction>
        </CommentContainer>
    )
}

const AllComments = (props) => {
    const [comments, setComments] = useState([
        {
            id: 103,
            by: 'Nishan Thapa',
            time: 1626009900,
            reactions: [
                { id: '😍', count: 3 },
                { id: '😇', count: 1 },
                { id: '😎', count: 2 },
            ],
            text: 'I am the guardian in the dark. I vow to defend this planet with my life. I shall father no children and love no one. I am the carrier of my sword and my sword shall carry me. I am the saviour of this world and the pace of humanity. I pledge my sword and my soul to the old Gods and the old Gods will protect me from evil. I shall not be tempted by the demon and the Gods will welcome me in heavens gate and feast me in the great Heaven halls of paradise.',
            parent: null,
            kids: [
                {
                    id: 109,
                    by: 'Nischal Parsad Khatri',
                    time: 1626203900,
                    reactions: [{ id: '😍', count: 4 }],
                    text: 'I am 14 and this is deep.',
                    parent: 103,
                    kids: [
                        {
                            id: 129,
                            by: 'Another Nischal Parsad Khatri',
                            time: 1626204900,
                            reactions: [{ id: '😍', count: 5 }],
                            text: 'Nice.',
                            parent: 103,
                        },
                    ],
                },
            ],
        },
        {
            id: 106,
            by: 'Limbu nimbu',
            time: 1626009400,
            reactions: [{ id: '😍', count: 300 }],
            text: 'Writing could be improved.',
            parent: null,
            kids: [
                {
                    id: 127,
                    by: 'Sunil',
                    time: 1626204900,
                    reactions: [{ id: '😍', count: 5 }],
                    text: 'Nice.',
                    parent: 106,
                },
            ],
        },
        {
            id: 107,
            by: 'galzin',
            time: 1626009400,
            reactions: [{ id: '😍', count: 3 }],
            text: 'Beautiful.',
            parent: null,
            kids: [],
        },
    ])
    const flatComments = flatten(comments)

    return (
        <>
            {flatComments.map((comment) => {
                return (
                    <Comment indent={2 * comment.indent} comment={comment} />
                )
            })}
        </>
    )
}

export default AllComments
