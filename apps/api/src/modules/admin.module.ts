import { Module } from "@nestjs/common";
import {
  DetailStatisticsStudentInAdminContoller,
  SignInAdminController,
  StatisticsAdminController,
} from "../controllers/admin.controller";
import {
  DetailStatisticsStudentInAdminService,
  SignInAdminService,
  StatisticsAdminService,
} from "../services/admin.service";

@Module({
  controllers: [
    SignInAdminController,
    StatisticsAdminController,
    DetailStatisticsStudentInAdminContoller,
  ],
  providers: [
    SignInAdminService,
    StatisticsAdminService,
    DetailStatisticsStudentInAdminService,
  ],
})
export class AdminModule {}
