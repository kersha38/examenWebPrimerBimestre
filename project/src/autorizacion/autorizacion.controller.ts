import {Body, Controller, Post, Res} from "@nestjs/common";


@Controller('Autorizacion')
export class AutorizacionController {

    @Post('iniciarSesion')
    iniciarSesion(@Body()bodyParamas,
                  @Res()res){
        if(bodyParamas.usuario=='adrianeguez'&&bodyParamas.password=='12345678910'){
            const mensaje={mensaje:'ok'};
            const parametros={nombre:'token',
                valor:'adrianeguez'}

            res.cookie(parametros.nombre,parametros.valor);
            return res.send(mensaje);
        }

        return res.send('Usuario incorrecto');
    }

    @Post('cerrarSesion')
    cerrarSesion(@Res()res){
        const mensaje={mensaje:'Usted salio del sistema'};
        const parametros={nombre:'token',
            valor:undefined}

        res.cookie(parametros.nombre,parametros.valor);
        return res.send(mensaje);

    }
}