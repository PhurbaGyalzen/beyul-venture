const getPaymentIntent = async (items) => {
    const data = await ajax('/payment/create-payment-intent/', {
        method: 'POST',
        body: JSON.stringify(items),
    })
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

export { getPaymentIntent, payWithCard }
