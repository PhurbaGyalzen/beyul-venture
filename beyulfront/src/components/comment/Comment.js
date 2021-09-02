import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { CommentForm } from './CommentForm'
import { CURR_USER } from 'api'

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
    & > ::before {
        content: '· ';
    }
    span:first-of-type::before {
        content: '';
    }
`

const Options = styled.div``

const AuthorImage = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
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

/*
const FIELD_EMOJI = {
    heart_eyes_count: '😍',
    thumbsup_count: '👍',
    thumbsdown_count: '👎',
    sunglasses_count: '😎',
    rocket_count: '🚀',
}

const EMOJI_FIELD = Object.fromEntries(
    Object.entries(FIELD_EMOJI).map(([k, v]) => [v, k]),
)
const createReactions = async (createEndpoint, payload) => {
    // dont optimize
    const fieldsDefault = Object.fromEntries(
        Object.entries(FIELD_EMOJI).map(([k, v]) => [k, 0]),
    )
    const data = await ajax(createEndpoint, {
        method: 'POST',
        body: JSON.stringify({
            ...fieldsDefault,
            ...payload,
        }),
    })
    return data
}

const updateReactions = async (updateEndpoint, payload) => {
    const data = await ajax(updateEndpoint, {
        method: 'PATCH',
        body: JSON.stringify(payload),
    })
    return data
}

const onReact = async (reactionId, reactionRemoved, rest) => {
    let data
    const payload = {
        user: rest.userUrl,
        comment: rest.commentUrl,
    }
    payload[EMOJI_FIELD[reactionId]] = reactionRemoved ? 0 : 1
    if (rest.updateEndpoint) {
        data = await updateReactions(rest.updateEndpoint, payload)
    } else {
        data = await createReactions(rest.createEndpoint, payload)
    }
    return [data, data.url]
}*/


const Comment = ({
    id,
    url,
    updateEndpoint,
    createEndpoint,
    by,
    text,
    time,
    edited,
    indent,
    replyIdSetter,
    reactionsArr,
    onReactAsync,
}) => {
    const [reactions, setReactions] = useState(reactionsArr)
    const reactionClicked = async (reaction) => {
        const recs = []
        for (const r of reactions) {
            if (r.id === reaction.id) {
                // setLoadingIndicator(reactionId, true)
                const reactionRemoved = !!r.reacted
                // const [data, createdUrl] = await onReact(
                //     r.id,
                //     reactionRemoved,
                //     {
                //         userUrl: CURR_USER,
                //         commentUrl: url,
                //         updateEndpoint: updateEndpoint,
                //         createEndpoint: createEndpoint,
                //     },
                // )
                const [data, createdUrl] = await onReactAsync(r.id, reactionRemoved)
                if (!updateEndpoint) {
                    // if the POST succeeded, then we now know the PATCH url.
                    // if failed, will be null which is what we want.
                    updateEndpoint = createdUrl
                }

                // setLoadingIndicator(reactionId, false)
                if (data.error) {
                    // showToast('failed')
                } else {
                    if (reactionRemoved) {
                        r.count--
                    } else {
                        r.count++
                    }
                    r.reacted = !r.reacted
                }
            }
            recs.push(r)
        }
        setReactions(recs)
    }

    const AddReaction = ({ hiddenReactions }) => {
        // console.log({ hiddenReactions })
        return (
            <>
                <AddEmoji>
                    ✨
                    <EmojiChooser>
                        {hiddenReactions.map((r) => (
                            <PopupEmoji
                                key={r.id}
                                onClick={async () => await reactionClicked(r)}
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
                    {edited ? (
                        <span>
                            <i>{'edited'}</i>
                        </span>
                    ) : null}
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
                                    onClick={async () =>
                                        await reactionClicked(reaction)
                                    }
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
                            onClick={() => replyIdSetter(id)}
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

export default Comment
