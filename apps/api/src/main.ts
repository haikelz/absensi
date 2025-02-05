import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

const localAddress = "127.0.0.1";

async function bootstrap() {
  /**
   * @see https://docs.nestjs.com/techniques/performance
   */
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    app.enableCors({ origin: "*" });

    await app.listen(5000, localAddress);
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
