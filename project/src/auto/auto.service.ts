import {Injectable} from '@nestjs/common'
import {ConductorService} from "../conductor/conductor.service";

@Injectable()
export class AutoService{
    arregloAutos: Auto[]=[];
    constructor(private _conductorService:ConductorService){}

    listarAutos(){
        return this.arregloAutos;
    }

    agregarAuto(auto: Auto): Auto[] {
        this.arregloAutos.push(auto);
        return this.arregloAutos;
    }


    editarAuto(indice:number,auto:Auto){
        this.arregloAutos[indice]=auto;
        return this.arregloAutos[indice];
    }

    obtenerAuto(indice: number) {
        return this.arregloAutos[indice];
    }
}

export class Auto {

    constructor(public chasis:string,
                public nombreMarca:string,
                public colorUno: string,
                public colorDos:string,
                public nombreModelo: string,
                public anio: number,
                public idConductor:number

                ){}

}