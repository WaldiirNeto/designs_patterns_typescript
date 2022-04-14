import typeVehicle from "./typeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";
const type = typeVehicle.CAR;
let vehicle;

if (type == typeVehicle.CAR) {
    vehicle = new Car("Amarelo", 2022, 2.0, 4, 4)
} else if (type == typeVehicle.MOTORCYCLE) {
    vehicle = new Motorcycle("Amarelo", 2022, 2.0)
}