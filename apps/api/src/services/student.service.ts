import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Student } from "../entities/student";

@Injectable()
export class SignInStudentService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}
  public async signIn() {
    return this.repo;
  }
}

@Injectable()
export class StudentStatisticService {
  constructor(
    @InjectRepository(Student)
    private repo: Repository<Student>,
  ) {}
  public async getStudentStatistic(nim: string) {
    return this.repo.find({
      where: {
        nim: nim,
      },
    });
  }
}

@Injectable()
export class AbsenceService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}

  public async absence() {}
}
