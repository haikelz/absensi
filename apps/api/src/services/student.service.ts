import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Student } from "../entities/student";
import { StudentModule } from "../modules/student.module";

@Injectable()
export class SignInStudentService {
  constructor(
    @InjectRepository(Student) private repo: Repository<StudentModule>,
  ) {}
  public async signIn() {
    return this.repo;
  }
}

@Injectable()
export class StudentStatisticService {
  constructor(
    @InjectRepository(Student)
    private repo: Repository<StudentModule>,
  ) {}
  public async getStudentStatistic(nim: string) {
    return this.repo.find({ where: (data) => data.nim === nim });
  }
}

@Injectable()
export class AbsenceService {
  constructor(
    @InjectRepository(Student) private repo: Repository<StudentModule>,
  ) {}

  public async absence() {
    return this.repo;
  }
}
