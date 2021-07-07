const fetchPosts = async () => {
    const CORS_HOST = 'https://softwarica-cors.herokuapp.com/'
    const BIBLIOGRAM_ORIGIN = CORS_HOST + 'https://bibliogram.snopyta.org'

    const fetchPosts = async (username, limit = 12) => {
        const url = `${BIBLIOGRAM_ORIGIN}/u/${username}/rss.xml`
        const resp = await fetch(url, { method: 'GET' })
        const contents = await resp.text()
        const parser = new DOMParser()
        const root = parser.parseFromString(contents, 'application/xml')
        const posts = root.querySelectorAll('item')
        const feeds = []
        // ordering? is it good?
        for (const post of Array.from(posts).slice(0, limit)) {
            const lines = post
                .querySelector('description')
                .textContent.split('<br/>')
            const post_caption = lines.slice(0, lines.length - 1).join('\n')
            const urls = post.querySelector('link').textContent.split('/p/')
            const post_id = urls[urls.length - 1]
            all_url_soup = parser.parseFromString(
                lines[lines.length - 1],
                'text/html',
            )

            const img_tag = all_url_soup.querySelectorAll('img')
            if (img_tag.length) {
                const image_url = new URL(img_tag[0].src).searchParams.get(
                    'url',
                )
                feeds.push({
                    id: post_id,
                    caption: post_caption,
                    thumb_url: image_url,
                })
            }
        }
        return feeds
    }
}

export fetchPosts
