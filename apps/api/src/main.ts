import compression from "@fastify/compress";
import fastifyCsrf from "@fastify/csrf-protection";
import helmet from "@fastify/helmet";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { swaggerConfig } from "./configs/swagger";
import { APP_PORT, DATABASE_HOST } from "./utils/constants";

async function main() {
  /**
   * @see https://docs.nestjs.com/techniques/performance
   */
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      { logger: ["log", "fatal", "error", "warn", "debug", "verbose"] },
    );

    app.enableCors({ origin: "*" });

    /**
     * Setup swagger
     */
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("swagger", app, swaggerDoc);

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.register(fastifyCsrf);
    await app.register(helmet, { contentSecurityPolicy: false });
    await app.register(compression, { encodings: ["gzip", "deflate"] });

    await app.listen(APP_PORT, DATABASE_HOST);
  } catch (err) {
    console.error(err);
  }
}

main();
