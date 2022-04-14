import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {

    validate(): void {
       console.log('validacao basica')
    }
    collectPayment(): void {
        console.log('pagamento realizado')
    }

}