import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {

    constructor(private builder: IBuilder) { }

    constructSedanCar() {
        this.builder.setVehicleType(VehicleType.SEDAN)
        this.builder.SetSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(1600))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
    }

    constructTruck() {
        this.builder.setVehicleType(VehicleType.TRUCK)
        this.builder.SetSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL)
        this.builder.setEngine(new Engine(13000))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
    }

    constructorMotorcycle() {
        this.builder.setVehicleType(VehicleType.MOTORCICYLE)
        this.builder.SetSeats(2)
        this.builder.setTransmission(Transmission.MANUAL)
        this.builder.setEngine(new Engine(12000))
        this.builder.addWheel(new Wheel(14))
        this.builder.addWheel(new Wheel(14))

    }
}