import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParser = require('cookie-parser');
declare const module: any;

async function bootstrap() {
    // const app = await NestFactory.createApplicationContext(AppModule);
    // app.use(cookieParser());
    // await app.listen(1337);
    //
    // // wbpack
    // if (module.hot) {
    //     module.hot.accept();
    //     module.hot.dispose(() => app.close());
    //
    // }
}
bootstrap();
