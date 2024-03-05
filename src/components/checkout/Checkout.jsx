import { useParams } from "react-router-dom";
import StripeCheckout from "./stripePayment";

function Checkout() {
  const { subscriptionTier } = useParams();
  return <StripeCheckout subscriptionTier={subscriptionTier} />;
}

export default Checkout;
