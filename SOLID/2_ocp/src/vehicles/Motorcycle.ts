import IVehicleCar from "./IVehicleCar";
import IVehicleMotorCycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorCycle {

    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.configure(color, year, engine)
    }
    startVehicle(): void {
        console.log(`ligando os motores`)
    }
    configure(color: string, year: number, engine: number): void {
        console.log(`Criando uma moto: ${color}, ${year}, ${engine}} cilindradas`)
        this.startVehicle();
    }

}