import { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import {
    useStripe,
    useElements,
    CardElement,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js'
import CreditCard from './CreditCard'
import { getPaymentIntent, payWithCard } from './utils'

const CONWIDTH = '32rem'
const CARD_FONT_COLOR = '#303238'
const CARD_PLACEHOLDER_COLOR = '#303238'
const CARD_INVALID_COLOR = '#e5424d'
const CARD_FONT_SIZE = '16px'
const CARD_FONT_FAMILY = '"Open Sans", sans-serif'

const PaymentContainer = styled.div`
    max-width: ${(props) => props.maxWidth || CONWIDTH};
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
`

const CardDetails = styled.div`
    width: 100%;
`

const CreditCardCon = styled.div`
    max-width: calc(${CONWIDTH} - 12rem);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 2rem; /*% wont work without explicit height on parent*/
    background: linear-gradient(
        45deg,
        #0643f0,
        #0831e2cf,
        #0642ebc7,
        #2275f1c2,
        #a9afbbd6
    );
    color: white;
    padding: 0.8rem;
    border-radius: 0.7rem;
    font-size: 1.5rem;
    font-weight: 600;
`

const StripeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StripePaymentForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    border: 1px solid #dcdfe6;
    padding: 3rem 2rem;
    box-shadow: 6px 6px 0px #0404ed57, -6px -6px 0px #8000f54f;
    border-radius: 1rem;
`

const StripeCardElement = styled.div`
    width: 100%;
    border-radius: 0.6rem 0.6rem 0 0;
    padding: 0.5rem;
    border: 1px solid #dcdfe6;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const NotNumber = styled.div`
    display: grid; /*stripe elements width is 1px on flex*/
    grid-template-columns: 2fr 1fr 3fr;
`

const PostalCode = styled.input`
    color: ${CARD_FONT_COLOR};
    border: none;
    font-size: calc(${CARD_FONT_SIZE} - 4px);
    font-family: ${CARD_FONT_FAMILY};
    font-weight: 500;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 16px;
    background-color: transparent;
    &:placeholder {
        color: ${CARD_PLACEHOLDER_COLOR};
    }
    &:focus-visible {
        outline: none;
    }
    &:invalid {
        color: ${CARD_INVALID_COLOR};
    }
`

const SubmitButton = styled.button`
    width: 100%;
    background-color: #4e77af;
    color: white;
    border: none;
    padding: 0.7rem;
    font-weight: 600;
    border-radius: 0 0 0.6rem 0.6rem;
    display: flex;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`

const SubmitButtonText = styled.span`
    ${(props) => (props.show ? '' : 'display: none;')}
    font-size: 1.2rem;
`

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const SpinnerSvg = styled.svg`
    ${(props) => (props.show ? '' : 'display: none;')}
    width: 1rem;
    animation: 1s linear 0s infinite ${rotateAnimation};
`

const ErrorContainer = styled.div`
    font-size: 0.9rem;
    width: 100%;
    padding: 0.5rem 0;
    color: #5b5b5b;
`

const Disclosure = styled.div`
    text-align: center;
    padding: 0.5rem;
    color: #4d4d4d;
    font-size: 0.9rem;

    & p {
        margin: 0;
    }
`

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: CARD_FONT_COLOR,
            fontSize: CARD_FONT_SIZE,
            fontFamily: CARD_FONT_FAMILY,
            fontSmoothing: 'antialiased',
            '::placeholder': {
                color: CARD_PLACEHOLDER_COLOR,
            },
        },
        invalid: {
            color: CARD_INVALID_COLOR,
            ':focus': {
                color: '#303238',
            },
        },
    },
}

const pStripeKey =
    'pk_test_51JJrwRDyVuOwHMJSvlLXTL9TKehrzSuUbyxPBBvy7823YH0OxmoOtqOaBvMLozLZe3VBshKXK6zJ95De1LOG8eq500h4TVHTrk'
const purchase = {
    items: [{ id: 'Langtang National Park' }],
}

const CheckoutForm = ({}) => {
    // get reference to Stripe Object passed to the Elements provider or null if promise hasn't resolved
    const stripe = useStripe()
    // access a mounted Element. If promise has not resolved, returns null.
    const elements = useElements()
    const [cardElement, setCardElement] = useState()

    const [clientSecret, setClientSecret] = useState(null)
    const [canSubmit, setCanSubmit] = useState(false)
    const [errors, setErrors] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(async () => {
        if (!stripe || clientSecret) return

        // receive secret from our server.
        const secret = await getPaymentIntent(purchase)
        console.log(secret)
        setClientSecret(secret)
    }, [stripe])

    const handleInput = async (event) => {
        setCanSubmit(!event.empty)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements || !clientSecret) {
            // Stripe.js has not yet loaded.
            return
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                // Get a reference to a mounted CardElement. Elements knows how
                // to find a CardElement because there can only ever be one of
                // each type of element.
                card: elements.getElement(CardElement),
            },
        })

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            setErrors(result.error.message)
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
                setErrors('Payment Completed Successfully.')
            }
        }
    }

    const outlinedElem = useRef()

    const removeOutline = (elem) => {
        if (elem) {
            elem.style.outline = 'none'
            elem.style.outlineOffset = 'unset'
        }
    }

    const drawOutline = (elem) => {
        elem.style.outline = '2px solid white'
        elem.style.outlineOffset = '0.3rem'
    }

    const handleFocus = (type) => {
        let elem
        switch (type) {
            case 'num':
                removeOutline(outlinedElem.current)
                outlinedElem.current = document.getElementById('num')
                drawOutline(outlinedElem.current)
                break
            case 'expiry':
                removeOutline(outlinedElem.current)
                outlinedElem.current = document.getElementById('expiry')
                drawOutline(outlinedElem.current)
                break
            case 'cvc':
                console.log('cvc clicked')
                break
            default:
                console.log('nothing clicked')
                removeOutline(outlinedElem.current)
        }
    }

    return (
        <PaymentContainer>
            <CardDetails>
                <CreditCardCon>
                    <CreditCard />
                </CreditCardCon>
                <StripeContainer>
                    <StripePaymentForm onSubmit={handleSubmit}>
                        <StripeCardElement>
                            {/*element is mounted now.*/}
                            {/*<CardElement
                                options={CARD_ELEMENT_OPTIONS}
                                onChange={handleInput}
                            />*/}
                            <CardNumberElement
                                onFocus={() => handleFocus('num')}
                                onBlur={() => handleFocus(null)}
                            />
                            <NotNumber>
                                <CardExpiryElement
                                    onFocus={() => handleFocus('expiry')}
                                    onBlur={() => handleFocus(null)}
                                />
                                <CardCvcElement
                                    onFocus={() => handleFocus('cvc')}
                                    onBlur={() => handleFocus(null)}
                                />
                                <div style={{ position: 'relative' }}>
                                    <PostalCode
                                        name='postalcode'
                                        placeholder='Postal code'
                                        maxlength='15'
                                        pattern='[0-9A-Za-z]+'
                                        required
                                    />
                                </div>
                            </NotNumber>
                        </StripeCardElement>
                        <SubmitButton disabled={!canSubmit}>
                            <SpinnerSvg show={isLoading}>
                                <path
                                    d='M90 50 A40 40 0 1 1 50 10'
                                    fill='none'
                                    stroke='#fff'
                                    strokeWidth='10'
                                />
                            </SpinnerSvg>
                            <SubmitButtonText show={!isLoading}>
                                Pay now
                            </SubmitButtonText>
                        </SubmitButton>
                        <ErrorContainer role='alert'>{errors}</ErrorContainer>
                    </StripePaymentForm>
                </StripeContainer>
            </CardDetails>

            <Disclosure>
                <p>Credit cards details never pass through our server.</p>
                <p>
                    Instead, all details go straight to
                    <a href='https://stripe.com'> Stripe</a>.
                </p>
            </Disclosure>
        </PaymentContainer>
    )
}

export default CheckoutForm
