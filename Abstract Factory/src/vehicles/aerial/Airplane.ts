import IAircraft from "./interfaces/IAircraft"


export default class Airplane implements IAircraft {

    startRoute(): void {
        this.getCargo()
        this.checkWind()
        console.log('Iniciando a decolagem')
    }
    getCargo(): void {
        console.log('Pegamos os passageiros, estamos prontos!')

    }
    checkWind(): void {
        console.log('Ventos a 35km, ventos ok!')
        
    }

}