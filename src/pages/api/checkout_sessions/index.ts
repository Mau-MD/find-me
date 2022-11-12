import { Stripe } from "stripe";

export default function handler(req: Request, res: Response) {
    const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        line_items: [
            {
                
            },
        ],
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        };
}


    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);