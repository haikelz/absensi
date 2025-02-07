import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  AbsenceController,
  SignInStudentController,
  StatisticsStudentController,
} from "../controllers/student.controller";
import { Student } from "../entities/student";
import {
  AbsenceService,
  SignInStudentService,
  StatisticsStudentService,
} from "../services/student.service";

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [
    AbsenceController,
    StatisticsStudentController,
    SignInStudentController,
  ],
  providers: [AbsenceService, StatisticsStudentService, SignInStudentService],
})
export class StudentModule {}
