import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {
  AbsenceDto,
  SignInStudentDto,
  StudentStatisticDto,
} from "../dto/student.dto";
import {
  AbsenceService,
  SignInStudentService,
  StudentStatisticService,
} from "../services/student.service";

@Controller("/api/v1/student/auth/sign-in")
export class SignInStudentController {
  constructor(private readonly service: SignInStudentService) {}
  @Post()
  public async signIn(@Body() body: SignInStudentDto) {
    return this.service.signIn(body.email, body.nim);
  }
}

@Controller("/api/v1/student/:nim")
export class StudentStatisticController {
  constructor(private readonly service: StudentStatisticService) {}
  @Get()
  public async studentStatistic(@Param() params: StudentStatisticDto) {
    return this.service.getStudentStatistic(params.nim);
  }
}

@Controller("/api/v1/student/absence")
export class AbsenceController {
  constructor(private readonly service: AbsenceService) {}
  @Post()
  public async absence(@Body() body: AbsenceDto) {
    return this.service.absence(body.email, body.nim);
  }
}
