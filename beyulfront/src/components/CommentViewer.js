import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@material-ui/core'
import styled, { css } from 'styled-components'

const FlexWrapAlign = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
`
const GeneralCommentContainer = styled.div`
    border: 1px solid #eae6e6;
    padding: 1rem 0.8rem;
    border-radius: 0.4rem;
    margin: 0.3rem 0;
`

const CommentContainer = styled(GeneralCommentContainer)`
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
    position: relative;
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

const EmojiChooser = styled.div`
    display: none;
    font-size: 1.2rem;
    position: absolute;
    top: -200%;
    left: -5px;
    gap: 0.2rem;
    outline: 2px solid #c47d1e;
    border-radius: 0.6rem;
    padding: 0.2rem;
    z-index: 1;
`

const AddEmoji = styled.span`
    position: relative;
    cursor: pointer;
    &:hover > ${EmojiChooser} {
        display: flex;
    }
`

const PopupEmoji = styled.span`
    padding: 0.2rem;
    border-radius: 1rem;
    &:hover {
        background-color: #d8dfea;
        outline: 1px solid;
        cursor: pointer;
    }
`

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

const insertIndents = (flattened) => {
    const context = {}
    flattened.forEach((item) => (context[item.id] = item.parent))

    const flattenedWithContext = []
    flattened.forEach((item) => {
        let id = item.id
        let indent = 0
        while (true) {
            if (!context[id]) break
            indent++
            id = context[id]
        }
        item.indent = indent
        flattenedWithContext.push(item)
    })
    return flattenedWithContext
}

const fieldEmoji = {
    heart_eyes_count: '😍',
    thumbsup_count: '👍',
    thumbsdown_count: '👎',
    sunglasses_count: '😎',
    rocket_count: '🚀',
}

const Comment = ({ id, url, by, text, time, indent, reactionsArr }) => {
    const [reactions, setReactions] = useState(reactionsArr)

    const reactionClicked = (reaction) => {
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
    }

    const AddReaction = ({ hiddenReactions }) => {
        console.log({ hiddenReactions })
        return (
            <>
                <AddEmoji>
                    ✨
                    <EmojiChooser>
                        {hiddenReactions.map((r) => (
                            <PopupEmoji
                                key={r.id}
                                onClick={() => reactionClicked(r)}
                            >
                                {r.id}
                            </PopupEmoji>
                        ))}
                    </EmojiChooser>
                </AddEmoji>
            </>
        )
    }
    const unusedReactions = reactions.filter((r) => r.count === 0)
    return (
        <CommentContainer indent={indent} data-id={id} id={id}>
            <CommentHead>
                <Author>
                    <AuthorImage src='https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/637629/95087942-1f8d-4160-a644-9a3ff89cf3d8.png' />
                    <span>{by}</span>
                    <span className='date'>
                        {new Date(time).toLocaleString()}
                    </span>
                </Author>
                <Options>
                    <button>...</button>
                </Options>
            </CommentHead>
            <CommentText>{text}</CommentText>
            <CommentBottomAction>
                <CommentAction>
                    <Reaction as='ul'>
                        {reactions.map((reaction) => {
                            return reaction.count ? (
                                <ReactionItem
                                    key={reaction.id}
                                    emoji={reaction.id}
                                    count={reaction.count}
                                    reacted={reaction.reacted}
                                    onClick={() => reactionClicked(reaction)}
                                />
                            ) : null
                        })}
                        <li>
                            {unusedReactions.length > 0 ? (
                                <AddReaction
                                    hiddenReactions={unusedReactions}
                                />
                            ) : null}
                        </li>
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

const AllComments = ({ comments }) => {
    
    const flatComments = insertIndents(comments)
    console.log(flatComments)

    return (
        <>
            {flatComments.map((comment) => {
                const reactions = Object.entries(fieldEmoji).map(([k, v]) => ({
                    id: v,
                    count: comment[k] || 0,
                }))
                return (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        url={comment.url}
                        by={'Anon'}
                        text={comment.body}
                        time={1630048321000}
                        indent={2 * comment.indent}
                        reactionsArr={reactions}
                    />
                )
            })}
        </>
    )
}

export default AllComments
