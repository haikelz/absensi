import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  DetailStatisticStudentInAdminContoller,
  SignInAdminController,
  StudentStatisticsInAdminController,
} from "../controllers/admin.controller";
import { Admin } from "../entities/admin";
import { Student } from "../entities/student";
import {
  DetailStudentStatisticInAdminService,
  SignInAdminService,
  StudentStatisticsInAdminService,
} from "../services/admin.service";

@Module({
  imports: [TypeOrmModule.forFeature([Admin, Student])],
  controllers: [
    SignInAdminController,
    StudentStatisticsInAdminController,
    DetailStatisticStudentInAdminContoller,
  ],
  providers: [
    SignInAdminService,
    StudentStatisticsInAdminService,
    DetailStudentStatisticInAdminService,
  ],
})
export class AdminModule {}
