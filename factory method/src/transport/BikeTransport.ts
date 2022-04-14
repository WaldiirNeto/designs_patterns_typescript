import Transport from "./transport";
import Bike from "./vehicles/bike";
import IVehicle from "./vehicles/inferfaces/IVehicle";

export default class BikeTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Bike()
    }

}