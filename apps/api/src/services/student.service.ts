import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Student } from "../entities/student";

@Injectable()
export class SignInStudentService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}
  public async signIn(email: string, nim: string) {
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
    const data = await this.repo.find({
      where: {
        nim,
      },
    });

    return {
      status_code: 200,
      message: "Success!",
      data: data,
    };
  }
}

@Injectable()
export class AbsenceService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}
  public async absence(email: string, nim: string) {}
}
