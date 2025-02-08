import { Controller, Get, Post } from "@nestjs/common";
import {
  DetailStudentStatisticInAdminService,
  SignInAdminService,
  StudentStatisticsInAdminService,
} from "../services/admin.service";

@Controller("/api/v1/admin/auth/sign-in")
export class SignInAdminController {
  constructor(private readonly service: SignInAdminService) {}

  @Post()
  public async signIn() {
    return this.service.signIn();
  }
}

@Controller("/api/v1/admin/student-statistics")
export class StudentStatisticsInAdminController {
  constructor(private readonly service: StudentStatisticsInAdminService) {}

  @Get()
  public async studentStatisticsInAdmin() {
    return this.service;
  }
}

@Controller("/api/v1/admin/student-statistics/:nim")
export class DetailStatisticStudentInAdminContoller {
  constructor(private readonly service: DetailStudentStatisticInAdminService) {}

  @Get()
  public async detailStudentStatisticInAdmin() {
    return this.service.getDetailStudentStatisticInAdmin("");
  }
}
