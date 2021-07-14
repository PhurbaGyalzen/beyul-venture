const fetchProtype = window.fetch
const origin = 'http://127.0.0.1:8000'

/*Pass either abs or relative url. If relative, use origin variable defined above.*/
const ajax = async (path, ...rest) => {
    if (path.indexOf('/') === 0) {
        path = origin + path
    }
    try {
        const resp = await fetchProtype(path, ...rest)
        const data = await resp.json()
        return data
    } catch (err) {
        console.log('Network/JSON Decode error:', err)
        return null
    }
}

export default ajax
