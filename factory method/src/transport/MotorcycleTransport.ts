import Transport from "./transport";
import IVehicle from "./vehicles/inferfaces/IVehicle";
import Motorcycle from "./vehicles/Motorcycle";

export default class MotorcycleTransport extends Transport {

    protected createTransport(): IVehicle {
        return new Motorcycle()
    }

}