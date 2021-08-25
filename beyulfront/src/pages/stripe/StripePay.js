import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from './CheckoutForm'

// The loadStripe function asynchronously loads the Stripe.js script and initializes a Stripe object.
// The initialized Stripe object can be retrieved with useStripe() hook if its inside the Elements Provider.
const stripePromise = loadStripe(
    'pk_test_51JKJMUKE0qqhCtCalOccPeprxCNzavUez9WNGLdoLwyVdECRJg1PPRaRmedDpBDduWvmbaFLv8kOSfsWEbewfqsk00jNdCGMSE',
)

const StripePaymentPage = (props) => {
    console.log({ props })
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default StripePaymentPage
