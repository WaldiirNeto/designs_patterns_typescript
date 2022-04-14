import Engine from "../components/Engine";
import Vehicle from "../components/products/Vehicle";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import  Wheel  from "../components/Wheel";

export default interface IBuilder {

    reset(): void
    getVehicle(): Vehicle

    addWheel(whell: Wheel)
    setVehicleType(value: VehicleType)
    SetSeats(seats: number)
    setEngine(engine: Engine)
    setTransmission(transmission: Transmission)
}