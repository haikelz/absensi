import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Admin } from "../entities/admin";
import { Absence, Student } from "../entities/student";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_TYPE,
  DATABASE_USERNAME,
} from "../utils/constants";

export const typeormConfig: TypeOrmModuleOptions = {
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [Admin, Student, Absence],
  logging: true,
  migrations: [`${__dirname}/../**/*.entity{.ts,.js}`],
  migrationsTableName: "migrations",
  autoLoadEntities: true,
  synchronize: true,
};
