import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51JJrwRDyVuOwHMJSvlLXTL9TKehrzSuUbyxPBBvy7823YH0OxmoOtqOaBvMLozLZe3VBshKXK6zJ95De1LOG8eq500h4TVHTrk");

const StripePaymentPage = (props) => {
    return (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
    )
}

export default StripePaymentPage