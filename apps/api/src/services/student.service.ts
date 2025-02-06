import { Injectable } from "@nestjs/common";

@Injectable()
export class SignInStudentService {
  public async signIn() {}
}

@Injectable()
export class StatisticsStudentService {
  public async getDetailStudent() {}
}

@Injectable()
export class AbsenceService {
  public async absence() {}
}
