import MercadoPago from "../mercadoPago/MercagoPago";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {

    constructor(private mercadoPago: MercadoPago) {}
    authToken(): Token {
        throw new Error("Method not implemented.");
    }
    payPalPayment(): void {
       this.mercadoPago.enviarPagamento()
    }
    payPalReceive(): void {
       this.mercadoPago.recebePagamento()
    }

}