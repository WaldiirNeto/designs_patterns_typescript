import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPago";

export default class MercadoPago implements IMercadoPago {

    private token: Token

    authToken(): Token {
        return new Token()
    }

    enviarPagamento(): void {
        console.log('enviando pagamento Mercado pago')
    }

    recebePagamento(): void {
        console.log('Recebendo pagamento mercado pago')
    }

}