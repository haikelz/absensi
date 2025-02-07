import { Injectable } from "@nestjs/common";

@Injectable()
export class SignInStudentService {
  public async signIn() {}
}

@Injectable()
export class StatisticsStudentService {
  public async statisticsStudent() {}
}

@Injectable()
export class AbsenceService {
  public async absence() {
    return {
      data: 1,
      status_code: 200,
    };
  }
}
