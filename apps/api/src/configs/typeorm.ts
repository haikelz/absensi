import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
  REDIS_PORT,
} from "../utils/constants";

export const typeormConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [],
  synchronize: true,
  logging: true,
  cache: {
    type: "ioredis",
    options: {
      socket: {
        host: "127.0.0.1",
        port: Number(REDIS_PORT),
      },
    },
  },
  migrations: ["migrations/*{.ts,.js}"],
  migrationsTableName: "migrations",
};
