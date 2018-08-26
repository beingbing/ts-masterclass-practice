interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    card: string;
    cvc: number;
}

interface PayPal {
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
type CheckoutABC = Order & { name: string };

const order: Order = {
    id: 'fd43fg',
    amount: 435,
    currency: 'USD'
}

const orderCard: CheckoutCard = {
    ...order,
    card: '1000 2000 3000 4000',
    cvc: 435
}

const orderPayPal: CheckoutPayPal = {
    ...order,
    email: 'abd@sdf.com'
};

const assigned = Object.assign({}, order, orderCard);