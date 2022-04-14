import Vehiclebuilder from "./builders/VehiclerBuilder";
import Vehicle from "./components/products/Vehicle";
import Director from "./director/Director";

const builder: Vehiclebuilder = new Vehiclebuilder()
const director: Director = new Director(builder)

director.constructSedanCar()

const sedan: Vehicle = builder.getVehicle()

console.log(`Criando o veículo do tipo": ${sedan.vehicleType}  ${sedan.wheelsTotal} com rodas`)


director.constructTruck()

const truck: Vehicle = builder.getVehicle()

console.log(`Criando o veículo do tipo": ${truck.vehicleType}  ${truck.wheelsTotal} com rodas`)


director.constructorMotorcycle()

const motorcycle: Vehicle = builder.getVehicle()

console.log(`Criando o veículo do tipo": ${motorcycle.vehicleType}  ${motorcycle.wheelsTotal} com rodas`)