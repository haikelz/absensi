import { Controller } from "@nestjs/common";
import {
  AbsenceService,
  SignInStudentService,
  StatisticsStudentService,
} from "../services/student.service";

@Controller("/api/v1/auth/sign-in")
export class SignInStudentController {
  constructor(private readonly signInService: SignInStudentService) {}
  public signIn() {
    return this.signInService.signIn();
  }
}

@Controller("/api/v1/student/:nim")
export class StatisticsStudentController {
  constructor(
    private readonly statisticsStudentService: StatisticsStudentService,
  ) {}
  public staticticsStudent() {
    return this.statisticsStudentService.statisticsStudent();
  }
}

@Controller("/")
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) {}
  public absence() {
    return this.absenceService.absence();
  }
}
