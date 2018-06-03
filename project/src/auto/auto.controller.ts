import {Body, Controller, Get, Param, Post, Put, Res} from "@nestjs/common";
import {Auto, AutoService} from "./auto.service";
import {Auto_Editar_Schema, Auto_Guardar_Schema, Indice_Schema} from "./auto.schema";
import {ValidaPipe} from "../pipes/valida.pipe";


@Controller('Auto')
export class AutoController {
    constructor(private _autoService:AutoService){}

    @Get()
    listarTodos():Auto[]{
        return this._autoService.listarAutos();
    }

    @Post()
    crearAuto(@Body(new ValidaPipe(Auto_Guardar_Schema))bodyParams){
        const auto= new Auto(bodyParams.chasis,
            bodyParams.nombreMarca,
            bodyParams.colorUno,
            bodyParams.colorDos,
            bodyParams.nombreModelo,
            bodyParams.anio,
            bodyParams.idConductor);
        return this._autoService.agregarAuto(auto);
    }

    @Get('/:indice')
    obtenerUno(@Param(new ValidaPipe(Indice_Schema))Params){
        return this._autoService.obtenerAuto(Params.indice);
    }

    @Put('/:indice')
    editarUno(@Param(new ValidaPipe(Indice_Schema))Params,
              @Body(new ValidaPipe(Auto_Editar_Schema))bodyParams){
        const auto=this._autoService.obtenerAuto(Params.indice);
        if(bodyParams.chasis){
            auto.chasis=bodyParams.chasis;
        }
        if(bodyParams.nombreMarca){
            auto.nombreMarca=bodyParams.nombreMarca;
        }
        if(bodyParams.colorUno){
            auto.colorUno=bodyParams.colorUno;
        }
        if(bodyParams.colorDos){
            auto.colorDos=bodyParams.colorDos;
        }
        if(bodyParams.nombreModelo){
            auto.nombreModelo=bodyParams.nombreModelo;
        }
        if(bodyParams.anio){
            auto.anio=bodyParams.anio;
        }
        if(bodyParams.idConductor){
            auto.idConductor=bodyParams.idConductor;
        }

        return this._autoService.editarAuto(Params.indice,auto);
    }

}