import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "../entities/admin";
import { Student } from "../entities/student";

@Injectable()
export class SignInAdminService {
  constructor(@InjectRepository(Admin) private repo: Repository<Admin>) {}
  @Post()
  public async signIn(username: string, password: string) {
    return this.repo;
  }
}

@Injectable()
export class StudentStatisticsInAdminService {
  constructor(
    @InjectRepository(Admin)
    private repo: Repository<Admin>,
  ) {}
  public async getStudentStatisticsInAdmin() {
    return this.repo;
  }
}

@Injectable()
export class DetailStudentStatisticInAdminService {
  constructor(
    @InjectRepository(Student)
    private repo: Repository<Student>,
  ) {}
  public async getDetailStudentStatisticInAdmin(nim: string) {
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
