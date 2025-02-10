import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {
  DetailStudentStatisticInAdminDto,
  SignInAdminDto,
} from "../dto/admin.dto";
import {
  DetailStudentStatisticInAdminService,
  SignInAdminService,
  StudentStatisticsInAdminService,
} from "../services/admin.service";

@Controller("/api/v1/admin/auth/sign-in")
export class SignInAdminController {
  constructor(private readonly service: SignInAdminService) {}
  @Post()
  public async signIn(@Body() body: SignInAdminDto) {
    // Sign In Logic Here
    return this.service.signIn(body.email, body.password);
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
  public async detailStudentStatisticInAdmin(
    @Param() params: DetailStudentStatisticInAdminDto,
  ) {
    return this.service.getDetailStudentStatisticInAdmin(params.nim);
  }
}
