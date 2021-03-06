import React, { useState, useEffect } from 'react'
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

const insertIndents = (flattened, key, parentKey) => {
    let MAX_DEPTH = 100
    const context = {}
    flattened.forEach((item) => (context[item[key]] = item[parentKey]))

    const flattenedWithContext = []
    flattened.forEach((item) => {
        let id = item[key]
        let indent = 0
        while (true) {
            // even if parent key is not present, below will break the loop.
            if (!context[id]) break
            indent++
            id = context[id]
            if (indent > 100) break
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

export const createComment = async (
    content,
    userUrl,
    blogUrl,
    parentCommentUrl = null,
) => {
    const data = await ajax('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({
            body: content,
            user: userUrl,
            blog: blogUrl,
            parent: parentCommentUrl,
        }),
    })
    return data
}

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
    console.log(userUrl, reactionId, { updateEndpoint }, { createEndpoint })
    payload[EMOJI_FIELD[reactionId]] = reactionRemoved ? 0 : 1
    let data
    if (updateEndpoint) {
        data = await updateReactions(updateEndpoint, payload)
    } else {
        data = await createReactions(createEndpoint, payload)
    }
    console.log('data.url', data.url)
    return [data, data.url]
}

const AllComments = ({ blogUrl, comments }) => {
    // const [nestedComments, setNestedComments] = useState([...comments]) // cannot use props directly in state
    const [nestedComments, setNestedComments] = useState(comments)
    useEffect(() => setNestedComments(comments), [comments])
    
    const flatComments = insertIndents(nestedComments, 'url', 'parent')
    const [replyId, setReplyId] = useState(null)
    return (
        <>
            {flatComments.map((comment, index) => {
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
                    <React.Fragment key={comment.id}>
                        <Comment
                            // TODO remove unrequired kwargs
                            id={comment.id}
                            reactionUpdateEndpoint={thisUserReaction?.url}
                            by={comment.author.name}
                            profileImg={comment.author.profile_pic}
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
                            ) => {
                                const data = await onReact(
                                    comment.url,
                                    CURR_USER,
                                    thisUserReaction?.url,
                                    '/api/comment_like/',
                                    reactionId,
                                    reactionRemoved,
                                )
                                setNestedComments((cs) =>
                                    cs.map((c, i) => {
                                        if (i === index)
                                            c.user_reaction = { url: data[1] }
                                        // no need to add reaction count cuz
                                        // the count is internally managed in Comment
                                        return c
                                    }),
                                )
                                return data
                            }}
                        />
                        {comment.id === replyId ? (
                            <CommentForm
                                onComment={async (content) => {
                                    const data = await createComment(
                                        content,
                                        CURR_USER,
                                        comment.blog,
                                        comment.url,
                                    )
                                    // nested reply is at top. should be at bottom
                                    // because comment follows cronological order.
                                    // but its-not-a-bug-its-a-feature
                                    setNestedComments((comms) => {
                                        const updatedComms = [...comms]
                                        updatedComms.splice(index + 1, 0, data)
                                        return updatedComms
                                    })
                                }}
                            />
                        ) : null}
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default AllComments
