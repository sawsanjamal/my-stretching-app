import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm({ subscriptionTier }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then((res) => {
        const { paymentIntent } = res;

        setMessage(
          paymentIntent.status === "succeeded"
            ? "Your payment succeeded"
            : "Unexpected error occurred"
        );
        nav("/");
      })
      .catch((e) => console.log(e));
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/checkout/${subscriptionTier}`,
      },
    });
    alert(error);
    if (
      error &&
      (error.type === "card_error" || error.type === "validation_error")
    ) {
      setMessage(error.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <p className="header">Complete your payment here!</p>
        <div>
          <p>Subscribe to one {subscriptionTier} of stretching!</p>
          <p>price per month</p>
        </div>
        <PaymentElement />
        <button
          className="checkout-btn"
          disabled={isLoading || !stripe || !elements}
        >
          {isLoading ? "Loading..." : "Pay now"}
        </button>
      </form>
      <div>{message}</div>
    </>
  );
}
