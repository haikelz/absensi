import { Redis } from "ioredis";
import { DATABASE_HOST, REDIS_PORT } from "../utils/constants";

export const redis = new Redis({
  host: DATABASE_HOST,
  port: REDIS_PORT,
});
