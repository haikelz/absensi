import { Controller, Get, Post } from "@nestjs/common";
import {
  AbsenceService,
  SignInStudentService,
  StudentStatisticService,
} from "../services/student.service";

@Controller("/api/v1/student/auth/sign-in")
export class SignInStudentController {
  constructor(private readonly service: SignInStudentService) {}
  @Post()
  public async signIn() {
    return this.service.signIn();
  }
}

@Controller("/api/v1/student/:nim")
export class StudentStatisticController {
  constructor(private readonly service: StudentStatisticService) {}
  @Get()
  public async studentStatistic() {
    return this.service.getStudentStatistic("");
  }
}

@Controller("/api/v1/student/absence")
export class AbsenceController {
  constructor(private readonly service: AbsenceService) {}
  @Post()
  public async absence() {
    return this.service.absence();
  }
}
