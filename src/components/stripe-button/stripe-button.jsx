import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_N9LKiyMchq1IfhucmJKYFWjG00ZMeNioEX';

    const onToken = token => {
        console.log(token);
        alert('Successful Payment');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;