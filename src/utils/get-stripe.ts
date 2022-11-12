import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function checkout({
  lineItems,
}: {
  lineItems: { price?: string | undefined; quantity?: number | undefined }[];
}) {
  let stripePromise: Promise<Stripe | null>;

  const getStripe = () => {
    const stripe_publishable_key =
      "pk_test_51M3MArCySmvqtgpSH7FdAL8TOb16Nscz3oUde8cLGocd0QOU8QCSl4io9WXWv5lcPxH8vB1Ph5NLkwoWJIEWU0Mp00oWYrVJrC";
    if (!stripePromise) {
      stripePromise = loadStripe(stripe_publishable_key);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe?.redirectToCheckout({
    mode: "payment",
    lineItems,
    cancelUrl: window.location.origin,
    successUrl: `${window.location.origin}/?session_id={CHECKOUT_SESSION_ID}`,
  });
}
