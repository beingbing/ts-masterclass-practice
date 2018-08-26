interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    type: 'stripe';
    card: string;
    cvc: number;
}

interface PayPal {
    type: 'paypal';
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & { name: string };

const order: Order = {
    id: 'fd43fg',
    amount: 435,
    currency: 'USD'
}

const orderCard: CheckoutCard = {
    ...order,
    type: 'stripe',
    card: '1000 2000 3000 4000',
    cvc: 435
}

const orderPayPal: CheckoutPayPal = {
    ...order,
    type: 'paypal',
    email: 'abd@sdf.com'
};

const assigned = Object.assign({}, order, orderCard);

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc)
    }
    if (payload.type === 'paypal') {
        console.log(payload.email);
    }
}