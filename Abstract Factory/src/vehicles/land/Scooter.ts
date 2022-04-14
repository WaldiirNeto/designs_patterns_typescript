import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando viagem com o patinete')
    }
    getCargo(): void {
        console.log('Carga Pronta!')
    }

}