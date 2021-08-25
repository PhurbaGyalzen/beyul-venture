import styled from 'styled-components'
import { useRef } from 'react'

let toaster

// const grad = (...args) => `linear-gradient(${args.join(',')})`

// const typeColor = {
//     Success: grad('#10ec28b5', '#10ec28b5', '#c2f4ab'),
//     Failed: grad('#10ec28b5', '#10ec28b5', '#c2f4ab'),
//     Warning: grad('#10ec28b5', '#10ec28b5', '#c2f4ab'),
//     Info: grad('#10ec28b5', '#10ec28b5', '#c2f4ab'),
// }

const Toaster = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const Bread = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding: 1rem;
    border-radius: 0.7rem;
    box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
    opacity: 1;
    background: ${(props) => props.bg || 'linear-gradient(#fff)'};
`

const ToastContent = styled.div`
    & > * {
        margin: 0.2rem auto;
    }
`

const CloseIcon = (props) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 15.642 15.642'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            enable-background='new 0 0 15.642 15.642'
        >
            <path
                fill-rule='evenodd'
                d='M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z'
            ></path>
        </svg>
    )
}

const CloseIconContainer = styled.div`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin-left: auto;
    cursor: pointer;
    padding: 0.7rem;
    &:hover {
        background-color: #fbfbfbbf;
    }
`

const SuccessIcon = (props) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 512 512'
            style='enable-background:new 0 0 512 512;'
            xml:space='preserve'
        >
            <g>
                <g>
                    <path d='M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z'></path>
                </g>
            </g>
        </svg>
    )
}

const FailIcon = (props) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 15.642 15.642'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            enable-background='new 0 0 15.642 15.642'
        >
            <path
                fill-rule='evenodd'
                d='M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z'
            ></path>
        </svg>
    )
}

const WarnIcon = (props) => {
    return (
        <svg
            version='1.1'
            class='toast__svg'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 301.691 301.691'
            style='enable-background:new 0 0 301.691 301.691;'
            xml:space='preserve'
        >
            <g>
                <polygon points='119.151,0 129.6,218.406 172.06,218.406 182.54,0'></polygon>
                <rect
                    x='130.563'
                    y='261.168'
                    width='40.525'
                    height='40.523'
                ></rect>
            </g>
        </svg>
    )
}

const InfoIcon = (props) => {
    return (
        <svg
            version='1.1'
            class='toast__svg'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 32 32'
            style='enable-background:new 0 0 32 32;'
            xml:space='preserve'
        >
            <g>
                <g id='info'>
                    <g>
                        <path d='M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8 v4H10z'></path>
                        <circle cx='16' cy='4' r='4'></circle>
                    </g>
                </g>
            </g>
        </svg>
    )
}

// const ToastIcon = ({bg='black'}) => {
//     return (

//     )
// }

const getThemeFromType = ({ type }) => {
    let title, bg, icon
    switch (type) {
        case 'success':
            title = 'Success'
            bg = 'linear-gradient(#10ec28b5, #10ec28b5,#c2f4ab)'
            icon = <SuccessIcon />
            break
        case 'fail':
            title = 'Failed'
            bg = 'linear-gradient(#ff000087, #ff000087,#c2f4ab)'
            icon = <FailIcon />
            break
        case 'warn':
            title = 'Warning'
            bg = 'linear-gradient(#fffb009c, #fffb009c,#c2f4ab)'
            icon = <WarnIcon />
            break
        case 'info':
        default:
            title = 'Info'
            bg = 'linear-gradient(#0800ff7d, #0800ff7d,#c2f4ab)'
            icon = <InfoIcon />
    }
    return {
        title: title,
        bg: bg,
        icon: icon,
    }
}

const Toast = ({ type, children }) => {
    if (!toaster) {
        toaster = <Toaster />
    }
    const theme = getThemeFromType(type)
    const ToastIcon = theme.icon
    return (
        <Bread bg={theme.bg}>
            <ToastIcon />
            <ToastContent>
                <h4>{theme.title}</h4>
                <p>{children}</p>
            </ToastContent>
            <CloseIconContainer>
                <CloseIcon />
            </CloseIconContainer>
        </Bread>
    )
}
