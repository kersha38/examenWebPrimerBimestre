import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConductorController} from "./conductor/conductor.controller";
import {AutoController} from "./auto/auto.controller";
import {AutorizacionController} from "./autorizacion/autorizacion.controller";
import {ConductorService} from "./conductor/conductor.service";
import {AutoService} from "./auto/auto.service";

@Module({
  imports: [],
  controllers: [AppController,ConductorController,AutoController,AutorizacionController],
  providers: [AppService,ConductorService,AutoService],
})
export class AppModule {}
