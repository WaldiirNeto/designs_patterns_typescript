import Airplane from "./Airplane";

export default class Drone implements Airplane {
    startRoute(): void {
        this.getCargo()
        this.checkWind()
        console.log('Iniciando subida...')
    }
    getCargo(): void {
        console.log('Drone abastecido!')
    }
    checkWind(): void {
        console.log('Ventos estaveis!')

    }

}