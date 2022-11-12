import { Stripe, loadStripe } from "@stripe/stripe-js";

export async function checkout({
  lineItems,
}: {
  lineItems: { price?: string | undefined; quantity?: number | undefined }[];
}) {
  let stripePromise: Promise<Stripe | null>;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
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
