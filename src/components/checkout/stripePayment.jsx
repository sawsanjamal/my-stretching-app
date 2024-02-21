import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { createPayment } from "../../api/stripe";

const stripePromise = loadStripe(import.meta.env.VITE_CLIENT_KEY);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // replace this with your own server endpoint
    createPayment({ items: [] })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
