import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Student } from "../entities/student";

@Injectable()
export class SignInStudentService {
  public async signIn() {}
}

@Injectable()
export class StatisticsStudentService {
  constructor(
    @InjectRepository(Student)
    private statisticsStudentRepository: Repository<Student>,
  ) {}
  public async statisticsStudent() {}
}

@Injectable()
export class AbsenceService {
  constructor(
    @InjectRepository(Student) private absenceResitory: Repository<Student>,
  ) {}
  public async absence() {
    return {
      data: 1,
      status_code: 200,
    };
  }
}
