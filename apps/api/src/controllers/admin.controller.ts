import { Controller } from "@nestjs/common";

@Controller("/api/v1/admin/auth/sign-in")
export class SignInAdminController {
  // constructor(private readonly)
}

@Controller("/api/v1/admin/student-statistics")
export class StatisticsAdminController {}

@Controller("/api/v1/admin/student-statistics/:nim")
export class DetailStatisticsStudentInAdminContoller {}
