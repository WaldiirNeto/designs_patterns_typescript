import Payonner from "../payonner/Payonner";
import IPayPalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {

    constructor(private payonner: Payonner) {
        console.log('Adaptando o Payonner utilizando os metodos e padroes do Paypal...')
    }

    authToken(): Token {
        return this.payonner.authToken()
    }

    payPalPayment(): void {
        return this.payonner.sendPayment()
    }

    payPalReceive(): void {
        return this.payonner.receivedPayment()
    }

}