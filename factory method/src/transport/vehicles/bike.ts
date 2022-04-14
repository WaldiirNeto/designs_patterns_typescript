import IVehicle from "./inferfaces/IVehicle";

export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando delivery...')
    }
    getCargo(): void {
        console.log('Pegamos o lanche!')
    }

}