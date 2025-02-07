import { Module } from "@nestjs/common";
import {
  AbsenceController,
  SignInStudentController,
  StatisticsStudentController,
} from "../controllers/student.controller";
import {
  AbsenceService,
  SignInStudentService,
  StatisticsStudentService,
} from "../services/student.service";

@Module({
  controllers: [
    AbsenceController,
    StatisticsStudentController,
    SignInStudentController,
  ],
  providers: [AbsenceService, StatisticsStudentService, SignInStudentService],
})
export class StudentModule {}
