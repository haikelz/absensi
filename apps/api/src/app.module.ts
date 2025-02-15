import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ZodValidationPipe } from "nestjs-zod";
import { DataSource } from "typeorm";
import { typeormConfig } from "./configs/typeorm";
import { AdminModule } from "./modules/admin.module";
import { StudentModule } from "./modules/student.module";

/**
 * @see https://docs.nestjs.com/techniques/caching
 */
@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    TypeOrmModule.forRoot(typeormConfig),
    AdminModule,
    StudentModule,
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
    { provide: APP_PIPE, useClass: ZodValidationPipe },
  ],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}
