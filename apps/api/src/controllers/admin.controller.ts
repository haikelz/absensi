import { Controller } from "@nestjs/common";
import {
  DetailStatisticsStudentInAdminService,
  SignInAdminService,
  StatisticsAdminService,
} from "../services/admin.service";

@Controller("/api/v1/admin/auth/sign-in")
export class SignInAdminController {
  constructor(private readonly signInService: SignInAdminService) {}
  public signIn() {
    return this.signInService.signIn();
  }
}

@Controller("/api/v1/admin/student-statistics")
export class StatisticsAdminController {
  constructor(
    private readonly statisticsAdminService: StatisticsAdminService,
  ) {}
  public statisticsStudent() {}
}

@Controller("/api/v1/admin/student-statistics/:nim")
export class DetailStatisticsStudentInAdminContoller {
  constructor(
    private readonly detailStatisticsStudentInAdminService: DetailStatisticsStudentInAdminService,
  ) {}
  public detailStatisticsStudentInAdmin() {
    return this.detailStatisticsStudentInAdminService.detailStatisticsStudentInAdmin();
  }
}
