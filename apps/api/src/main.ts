import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { SwaggerModule } from "@nestjs/swagger";
import dotenv from "dotenv";
import { AppModule } from "./app.module";
import { swaggerConfig } from "./configs/swagger";
import { DATABASE_HOST } from "./utils/constants";

dotenv.config();

async function main() {
  /**
   * @see https://docs.nestjs.com/techniques/performance
   */
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    app.enableCors({ origin: "*" });

    /**
     * Setup swagger
     */
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("swagger", app, swaggerDoc);

    await app.listen(5000, DATABASE_HOST);
  } catch (err) {
    console.error(err);
  }
}

main();
