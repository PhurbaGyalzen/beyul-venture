import { useState, useEffect } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import Blogs from 'pages/blog-page/Blogs'
import { AddBlog } from 'pages/blog-add/AddBlog'
import BlogDetail from 'pages/blog-page/BlogDetail'
import { BlogTag } from 'pages/blog-page/BlogTag'

const BlogRoutes = () => {
    const relPath = useRouteMatch().path

    return (
        <Switch>
            <Route path={relPath + '/add'} component={AddBlog} />
            <Route path={relPath + '/tag/:tagname'} component={BlogTag} />
            <Route path={relPath + '/:blogid'}>
                <BlogDetail />
            </Route>
            <Route path={relPath + ''} component={Blogs} />
        </Switch>
    )
}

export default BlogRoutes
