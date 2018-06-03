import {Injectable} from '@nestjs/common'
import {ConductorService} from "../conductor/conductor.service";
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";

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
        if(this.arregloAutos[indice]!=undefined){
            this.arregloAutos[indice]=auto;
            return this.arregloAutos[indice];
        }else{
            throw new NoEncontradoException(
                "Auto no encontrado",
                "nop",
                4
            );
        }
    }

    obtenerAuto(indice: number) {
        try{
            return this.arregloAutos[indice];    
        }catch (error) {
            throw new NoEncontradoException(
                "Auto no encontrado",
                error,
                4
            );
        }
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