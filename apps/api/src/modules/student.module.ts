import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  AbsenceController,
  SignInStudentController,
  StudentStatisticController,
} from "../controllers/student.controller";
import { Absence } from "../entities/absence";
import { Student } from "../entities/student";
import {
  AbsenceService,
  SignInStudentService,
  StudentStatisticService,
} from "../services/student.service";

@Module({
  imports: [TypeOrmModule.forFeature([Student, Absence])],
  controllers: [
    AbsenceController,
    StudentStatisticController,
    SignInStudentController,
  ],
  providers: [AbsenceService, StudentStatisticService, SignInStudentService],
})
export class StudentModule {}
