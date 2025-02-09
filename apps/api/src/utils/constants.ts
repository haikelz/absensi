import dotenv from "dotenv";

dotenv.config();

// Env Related
export const DATABASE_TYPE = process.env.DATABASE_TYPE as "postgres";
export const DATABASE_HOST = process.env.DATABASE_HOST as string;
export const DATABASE_PORT = process.env.DATABASE_PORT as unknown as number;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME as string;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
export const DATABASE_NAME = process.env.DATABASE_NAME as string;

export const REDIS_PORT = process.env.REDIS_PORT as unknown as number;

export const API_PRODUCTION_URL = process.env.API_PRODUCTION_URL as string;

export const AWS_REGION = process.env.AWS_REGION as string;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY as string;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME as string;

export const APP_PORT = process.env.APP_PORT as string;
