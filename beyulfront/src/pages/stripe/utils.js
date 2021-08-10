
const getPaymentIntent = async (items) => {
    const resp = await fetch(
        'http://127.0.0.1:8000/payment/create-payment-intent/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(items),
        },
    )
    const data = await resp.json()
    return data['clientSecret']
}

const payWithCard = async (stripe, element, secret) => {
    // const result = await stripe.confirmCardPayment(secret, {
    //     payment_method: { card: element },
    // })
    // console.log(result)
    // MyStripe.errorContainer.textContent = result.error?.message
    // if (result.paymentIntent?.status === 'succeeded') {
    //     return { success: true }
    // }
    // return { sucess: false, message: result.error.message }
    return null
}

export {getPaymentIntent, payWithCard}