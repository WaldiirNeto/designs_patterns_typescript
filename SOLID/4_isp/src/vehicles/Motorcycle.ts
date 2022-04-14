import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {

    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configurationMotorCycle(color, year, engine)
        this.startVehicle();
    }
    startVehicle(): void {
        console.log(`Ligando os motores`)
    }

    configurationMotorCycle(color: string, year: number, engine: number): void {
        console.log(`Criando uma moto: ${color}, ${year}, ${engine}} cilindradas`)

    }

}