import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  DetailStatisticsStudentInAdminContoller,
  SignInAdminController,
  StatisticsAdminController,
} from "../controllers/admin.controller";
import { Admin } from "../entities/admin";
import {
  DetailStatisticsStudentInAdminService,
  SignInAdminService,
  StatisticsAdminService,
} from "../services/admin.service";

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
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
