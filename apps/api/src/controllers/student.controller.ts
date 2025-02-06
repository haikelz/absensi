import { Controller } from "@nestjs/common";

@Controller("/api/v1/auth/sign-in")
export class SignInStudentController {}

@Controller("/api/v1/student/:nim")
export class StatisticsStudentController {}

@Controller("/")
export class AbsenceController {}
