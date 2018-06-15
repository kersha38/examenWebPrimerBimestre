import {Body, Controller, Get, Param, Post, Put} from "@nestjs/common";
import {Conductor, ConductorService} from "./conductor.service";
import {Conductor_Editar_Schema, Conductor_Guardar_Schema} from "./conductor.schema";
import {Indice_Schema} from "../auto/auto.schema";
import {ValidaPipe} from "../pipes/valida.pipe";
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";
import {Auto} from "../auto/auto.service";


@Controller('Conductor')
export class ConductorController {
    constructor(private _conductorService:ConductorService){}

    @Get()
    listarTodos():Conductor[]{
        return this._conductorService.mostrarConductores();
    }

    @Post()
    crearConductor(@Body(new ValidaPipe(Conductor_Guardar_Schema))bodyParams){
        const conductor= new Conductor(bodyParams.nombres,
            bodyParams.apellidos,
            bodyParams.fechaNacimiento,
            bodyParams.numeroMedallas,
            bodyParams.campeonActual);
        return this._conductorService.agregarConductor(conductor);
    }

    @Get('/:indice')
    obtenerUno(@Param(new ValidaPipe(Indice_Schema))Params){
        if(this._conductorService.obtenerConductor(Params.indice))
            return this._conductorService.obtenerConductor(Params.indice);
        else{
            throw new NoEncontradoException(
                "Conductor no encontrado",
                "",
                4
            );
        }
    }

    @Put('/:indice')
    editarUno(@Param(new ValidaPipe(Indice_Schema))Params,
              @Body(new ValidaPipe(Conductor_Editar_Schema))bodyParams){

        let conductor:Conductor;
        if(this._conductorService.obtenerConductor(Params.indice))
            conductor= this._conductorService.obtenerConductor(Params.indice);

        else{
            throw new NoEncontradoException(
                "Conductor no encontrado",
                "",
                4
            );
        }

        if(bodyParams.nombres){
            conductor.nombres=bodyParams.nombres;
        }
        if(bodyParams.apellidos){
            conductor.apellidos=bodyParams.apellidos;
        }
        if(bodyParams.fechaNacimiento){
            conductor.fechaNacimiento=bodyParams.fechaNacimiento;
        }
        if(bodyParams.numeroMedallas){
            conductor.numeroMedallas=bodyParams.numeroMedallas;
        }
        if(bodyParams.campeonActual){
            conductor.campeonActual=bodyParams.campeonActual;
        }

        return this._conductorService.editarConductor(Params.indice,conductor);
    }
}