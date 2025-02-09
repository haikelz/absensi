import { Get, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "../entities/admin";
import { Student } from "../entities/student";

@Injectable()
export class SignInAdminService {
  constructor(@InjectRepository(Admin) private repo: Repository<Admin>) {}
  @Post()
  public async signIn(email: string, password: string) {
    const data = await this.repo.findBy({
      email,
      password,
    });
    return data;
  }
}

@Injectable()
export class AdminProfileService {
  constructor(@InjectRepository(Admin) private repo: Repository<Admin>) {}
  @Get()
  public async getAdminProfile(email: string) {
    const data = await this.repo.findBy({ email });
    return data;
  }
}

@Injectable()
export class StudentStatisticsInAdminService {
  constructor(
    @InjectRepository(Student)
    private repo: Repository<Student>,
  ) {}
  public async getStudentStatisticsInAdmin() {
    const data = await this.repo.find();
    return data;
  }
}

@Injectable()
export class DetailStudentStatisticInAdminService {
  constructor(
    @InjectRepository(Student)
    private repo: Repository<Student>,
  ) {}
  public async getDetailStudentStatisticInAdmin(nim: string) {
    const data = await this.repo.findBy({ nim });
    return data;
  }
}
