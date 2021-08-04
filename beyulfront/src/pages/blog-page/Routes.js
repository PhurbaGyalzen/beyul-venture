import { useState, useEffect } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import Blog from 'pages/blog-page/Blog'
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
            <Route path={relPath + ''} component={Blog} />
        </Switch>
    )
}

export default BlogRoutes
