import IPaymentInstrument from "./IPaymentInstrument";

export default class NubanlRewards implements IPaymentInstrument {

    validate(): void {
        console.log('Verificar a pontuacao no rewards')
    }
    collectPayment(): void {
        console.log('pagar com a pontuacao do rewards')
    }

}