import React, { useState, useEffect, useRef } from 'react'
import Comment from './Comment'
import { CURR_USER } from 'api'
import { CommentForm } from './CommentForm'

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

const onReact = async (
    commentUrl,
    userUrl,
    updateEndpoint,
    createEndpoint,
    reactionId,
    reactionRemoved,
) => {
    const payload = {
        comment: commentUrl,
        user: userUrl,
    }
    console.log(userUrl, reactionId, updateEndpoint)
    payload[EMOJI_FIELD[reactionId]] = reactionRemoved ? 0 : 1
    let data
    if (updateEndpoint) {
        data = await updateReactions(updateEndpoint, payload)
    } else {
        data = await createReactions(createEndpoint, payload)
    }
    return [data, data.url]
}

const AllComments = ({ comments }) => {
    const [flatComments, setFlatComment] = useState(insertIndents(comments))
    const [replyId, setReplyId] = useState()

    return (
        <>
            {flatComments.map((comment) => {
                const thisUserReaction = comment.user_reaction
                const reactions = Object.entries(FIELD_EMOJI).map(
                    ([k, v]) => ({
                        id: v,
                        count: comment[k] || 0,
                        reacted: thisUserReaction
                            ? thisUserReaction[k] > 0
                            : false,
                    }),
                )

                return (
                    <>
                        <Comment
                            // TODO remove unrequired kwargs
                            key={comment.id}
                            id={comment.id}
                            url={comment.url}
                            updateEndpoint={thisUserReaction?.url}
                            createEndpoint={comment.reactions_url}
                            by={'Anon'}
                            text={comment.body}
                            time={comment.updated_on}
                            edited={
                                !(comment.updated_on === comment.created_on)
                            }
                            indent={2 * comment.indent}
                            replyIdSetter={setReplyId}
                            reactionsArr={reactions}
                            onReactAsync={async (
                                reactionId,
                                reactionRemoved,
                            ) =>
                                await onReact(
                                    comment.url,
                                    CURR_USER,
                                    thisUserReaction?.url,
                                    comment.reactions_url,
                                    reactionId,
                                    reactionRemoved,
                                )
                            }
                        />
                        {comment.id === replyId ? <CommentForm /> : null}
                    </>
                )
            })}
        </>
    )
}

export default AllComments
