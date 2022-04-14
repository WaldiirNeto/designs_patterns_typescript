import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {

    startRoute(): void {
            this.getCargo()
            console.log('Iniciante a entrega...')
    }
    getCargo(): void {
        console.log('Já pegamos a encomenda!')
    }

}