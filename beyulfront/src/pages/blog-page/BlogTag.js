import React from 'react'
import { useParams } from 'react-router'

export const BlogTag = () => {

    const {tagname} = useParams();
    return (
        <div>
            <h1>Blogs Realted to {tagname}</h1>
        </div>
    )
}
