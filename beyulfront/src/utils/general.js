const randRange = (min, max) => {
    const num = Math.floor(Math.random() * (max - min)) + min
    return num
}

const generateRandomString = (len = 32) => {
    const array = new Uint32Array(Math.ceil(len / 2))
    window.crypto.getRandomValues(array)
    return Array.from(array, (dec) => dec.toString(16))
        .join('')
        .substr(0, len)
}

const shuffle = (arr) => {
    arr = Object.assign([], arr)
    const len = arr.length
    for (let i = 0; i < len * 2; i++) {
        const a = randRange(0, len)
        const b = randRange(0, len)
        ;[arr[a], arr[b]] = [arr[b], arr[a]]
    }
    return arr
}

export {randRange, generateRandomString, shuffle}