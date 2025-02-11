import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerModule } from "nestjs-pino";
import { typeormConfig } from "./configs/typeorm";
import { AdminModule } from "./modules/admin.module";
import { StudentModule } from "./modules/student.module";

@Module({
  imports: [
    /**
     * @see https://docs.nestjs.com/techniques/caching
     */
    CacheModule.register({ isGlobal: true }), // Caching
    TypeOrmModule.forRoot(typeormConfig),
    AdminModule,
    StudentModule,
    LoggerModule.forRoot(),
  ],
  providers: [{ provide: APP_INTERCEPTOR, useClass: CacheInterceptor }],
})
export class AppModule {}
