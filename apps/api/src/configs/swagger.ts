import { DocumentBuilder } from "@nestjs/swagger";
import { GITHUB_REPO_URL } from "../utils/constants";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("@absensi/api")
  .setDescription("API for Absensi app")
  .setLicense("MIT", `${GITHUB_REPO_URL}/blob/master/LICENSE`)
  .build();
