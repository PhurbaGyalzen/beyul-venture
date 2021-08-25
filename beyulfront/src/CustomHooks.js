import React from 'react'

// sauce: https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
export default function useTimeout(callback, delay) {
    const timeoutRef = React.useRef(null)
    const savedCallback = React.useRef(callback)
    React.useEffect(() => {
        savedCallback.current = callback
    }, [callback])
    React.useEffect(() => {
        const tick = () => savedCallback.current()
        if (typeof delay === 'number') {
            timeoutRef.current = window.setTimeout(tick, delay)
            return () => window.clearTimeout(timeoutRef.current)
        }
    }, [delay])
    return timeoutRef
}

// sauce: https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
function useInterval(callback, delay) {
    const intervalRef = React.useRef(null)
    const savedCallback = React.useRef(callback)
    React.useEffect(() => {
        savedCallback.current = callback
    }, [callback])
    React.useEffect(() => {
        const tick = () => savedCallback.current()
        if (typeof delay === 'number') {
            intervalRef.current = window.setInterval(tick, delay)
            return () => window.clearInterval(intervalRef.current)
        }
    }, [delay])
    return intervalRef
}

export { useTimeout, useInterval }
