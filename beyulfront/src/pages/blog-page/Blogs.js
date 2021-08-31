import { useState, useEffect } from 'react'
import { Box, Container, Card, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import { useTimeout } from 'CustomHooks'
import { BlogCard } from './BlogCard'
import './index.css'

const MasonryFlex = styled(Masonry)`
    display: flex;
    gap: 0.5rem;
    padding: 0rem 0.5rem;
    border: 1px solid #00000054;
    
    & > :nth-child(odd) {
        flex: 1 1 480px;
        article img {
            max-height: 20rem;
            max-width: 100rem;
        }
    }

    & > :nth-child(even) {
        flex: 1 1 205px;
    }

    & article img {
        width: 100%;
        max-height: 15rem;
        object-fit: cover;
    }
`

const BigTitle = styled(Typography)`
    font-size: 2rem;
    font-weight: bold;
    margin: 0 auto;
`

const TopPart = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #694311;
    padding-bottom: 1rem;
`

const SearchBox = styled.input`
    padding: 0.6rem;
    border: none;
    border-radius: 1rem;
    &:focus-visible {
        outline: none;
    }
`

const SubmitButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 0.6rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: linear-gradient(90deg, #cfcfed, #0330ffcc);
    box-shadow: -3px 0px 6px 0px #d1cfcfb5;
    margin-left: 0.6rem;
`

const Section = (props) => {
    return <section>{props.children}</section>
}

const filterArray = (s, arr) => {
    return arr.filter((item) => {
        if (item.includes(s)) {
            return item
        }
    })
}

const fetchBlogs = async (query) => {
    const tempBlogs = []
    let url = '/api/blog/'
    // query can be an empty string when typing in search box
    if (query !== undefined && query !== null) {
        console.log('query is present')
        url += '?' + new URLSearchParams([['search', query]])
    }
    for (let _ = 0; _ < 10; _++) {
        const data = await ajax(url)
        if (!data) break
        tempBlogs.push(...data.results)
        const nextPageURL = data.next_page_link
        if (!nextPageURL) break
        url = data.next_page_link
    }
    return tempBlogs
}

const Blogs = (props) => {
    const [firstDelay, setFirstDelay] = useState(true)
    const [secondDelay, setSecondDelay] = useState(false)

    useTimeout(
        () => {
            console.log('first timeout')
            handleSubmit()
        },
        firstDelay ? 1000 : null,
    )
    useTimeout(
        () => {
            console.log('second timeout')
            handleSubmit()
        },
        secondDelay ? 1000 : null,
    )
    const [query, setQuery] = useState('')

    const [blogsToShow, setBlogsToShow] = useState([])
    const [fetchedBlogs, setFetchedBlogs] = useState([])

    useEffect(async () => {
        // when blog first loads
        const tempBlogs = await fetchBlogs()
        setBlogsToShow(tempBlogs)
        setFetchedBlogs(tempBlogs)
    }, [])

    const handleInput = (event) => {
        const currInput = event.target.value
        setQuery(currInput)
        // filtering on blogsToShow below will break cuz the current filter
        // will be set on blogsToShow cuz of setBlogsToShow() and so on...
        setBlogsToShow(
            fetchedBlogs.filter((blog) => {
                const filtered = filterArray(currInput.toLowerCase(), [
                    blog.title.toLowerCase(),
                    blog.description.toLowerCase(),
                ])
                return filtered.length > 0 ? blog : false
            }),
        )

        // One state is null while other is not-null.
        // not-null delays always get executed cuz internally delay is in a
        // dependency array of useEffect()
        setFirstDelay(!firstDelay)
        setSecondDelay(!secondDelay)
    }

    const handleSubmit = async (event) => {
        if (event) event.preventDefault()
        console.log('submitted search query: "' + query + '"')
        if (!query) return
        const tempBlogs = await fetchBlogs(query)
        // first filter on already fetched blogs and display those(see handleInput).
        // after fetching display only the fetched blogs.
        setBlogsToShow(tempBlogs)
    }

    const breakpointColumnsObj = {
        default: 2,
        800: 1,
    }

    return (
        <>
            <Box pt={7} style={{ color: '#13181e' }}>
                <Container style={{ paddingTop: '4rem' }}>
                    <TopPart>
                        <BigTitle variant='h4'>All Articles</BigTitle>
                        <form role='search' onSubmit={handleSubmit}>
                            <SearchBox
                                type='search'
                                id='search-blog'
                                name='search'
                                placeholder='Search Blogs...'
                                aria-label='Search all the blogs.'
                                required
                                onInput={handleInput}
                            />
                            <SubmitButton type='submit'>{'>'}</SubmitButton>
                        </form>
                    </TopPart>

                    <MasonryFlex className="col-container" breakpointCols={breakpointColumnsObj} aria-label="Masonry">
                        {blogsToShow.map((blog) => {
                            return (
                                <BlogCard
                                    key={blog.slug}
                                    slug={blog.slug}
                                    thumbnail={blog.thumbnail}
                                    title={blog.title}
                                    authorId={blog.author_id}
                                    authorName={blog.author_name}
                                    authorImage={blog.author_profile}
                                    likes={blog.likes}
                                    tags={blog.tags}
                                    description={blog.description}
                                />
                            )
                        })}
                    </MasonryFlex>
                </Container>
            </Box>
        </>
    )
}

export default Blogs
