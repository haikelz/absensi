import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("@absensi/api")
  .setDescription("API for absensi")
  .setLicense("MIT", "https://github.com/haikelz/absensi/blob/master/LICENSE")
  .build();
