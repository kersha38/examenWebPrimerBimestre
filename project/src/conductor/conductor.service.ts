import {Injectable} from "@nestjs/common";
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";


@Injectable()
export class ConductorService {
    arregloConductores:Conductor[]=[];

    agregarConductor(conductor:Conductor){
        this.arregloConductores.push(conductor);
        return this.arregloConductores;
    }

    mostrarConductores(){
        return this.arregloConductores;
    }

    obtenerConductor(indice:number){
        try{
            return this.arregloConductores[indice];
        }catch (error) {
            throw new NoEncontradoException(
                "Conductor no encontrado",
                error,
                4
            )
        }

    }

    editarConductor(indice:number,conductor:Conductor){
        this.arregloConductores[indice]=conductor;
        return this.arregloConductores[indice];
    }
}

export class Conductor {
    constructor(public nombres:string,
                public apellidos:string,
                public fechaNacimiento: Date,
                public numeroMedallas:number,
                public campeonActual:boolean){}
}