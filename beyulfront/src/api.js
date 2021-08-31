let access = null
let refresh
const tokenTimeout = 5 // in mins
let lastTms = new Date().getTime()
const origin = 'http://127.0.0.1:8000'

const post = async (path, body) => {
    const resp = await fetch(origin + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    const data = await resp.json()
    return data
}

const storeJWT = async () => {
    const data = await post('/api/login/', {
        email: 'admin@gmail.com',
        password: 'admin',
    })
    if (!data.access) {
        console.log('Error when fetching token:', data)
        throw new Error('Potential Bad Credentials error.')
    }
    access = data.access
    refresh = data.refresh
}

const refreshJWT = async () => {
    if (!refresh) {
        await storeJWT
    }
    const data = await post('/api/token/refresh/', { refresh: refresh })
    if (!data.access) {
        console.log(
            'Refresh token Potentially expired. fetching new tokens using creds.:',
            data,
        )
        await storeJWT()
    } else {
        access = data.access
    }
}

/*Pass either abs or relative url. If relative, uses origin variable defined above.*/
const ajax = async (path, rest) => {
    if (path.indexOf('/') === 0) {
        path = origin + path
    }
    if (!rest) rest = {}
    const { headers, ...opts } = rest
    if (!access || !refresh) {
        console.log('no token present. authenticating using creds.')
        await storeJWT()
    }
    const currTms = new Date().getTime()
    try {
        if (currTms - lastTms >= tokenTimeout * 60 * 1000) {
            console.log(
                'access token timeout, refreshing using refresh token.',
            )
            await refreshJWT()
            lastTms = new Date().getTime()
        }
        console.log(
            'expires in mins:',
            tokenTimeout - (currTms - lastTms) / (60 * 1000),
        )
        const allHeaders = new Headers(headers || {})
        allHeaders.set('Authorization', 'Bearer ' + access)
        if (['POST', 'PUT', 'PATCH'].includes(opts.method)) {
            allHeaders.set('Content-Type', 'application/json;charset=UTF-8')
        }
        const resp = await fetch(path, { ...{ headers: allHeaders }, ...opts })
        let data
        if (!resp.ok)
            return { error: 'client: received ' + resp.status, type: '' }
        data = await resp.json()
        return data
    } catch (err) {
        console.log('JSON/Network error:', err)
        return { error: 'client: JSON/Network error:', type: '' }
    }
}

export default ajax
