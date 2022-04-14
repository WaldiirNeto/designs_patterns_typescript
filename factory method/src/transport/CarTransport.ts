import Transport from "./transport";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/inferfaces/IVehicle";

export default class CarTransport extends Transport {

    protected createTransport(): IVehicle {
        return new Car()
    }

}