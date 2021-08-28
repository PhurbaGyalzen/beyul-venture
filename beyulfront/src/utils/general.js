export const randRange = (min, max) => {
    const num = Math.floor(Math.random() * (max - min)) + min
    return num
}

export const generateRandomString = (len = 32) => {
    const array = new Uint32Array(Math.ceil(len / 2))
    window.crypto.getRandomValues(array)
    return Array.from(array, (dec) => dec.toString(16))
        .join('')
        .substr(0, len)
}
