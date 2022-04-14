import IPayPalPayment from "./paypal/IPaypalPayment";
import PayPal from "./paypal/PayPal";

const payment: IPayPalPayment = new PayPal()
// const payment: IPayPalPayment  = new PayonnerAdapter(new Payonner())
// const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago())
payment.payPalPayment()
payment.payPalReceive()
