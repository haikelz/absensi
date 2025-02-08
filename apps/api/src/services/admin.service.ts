import { Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "../entities/admin";
import { AdminModule } from "../modules/admin.module";

@Injectable()
export class SignInAdminService {
  constructor(@InjectRepository(Admin) private repo: Repository<AdminModule>) {}
  @Post()
  public async signIn() {
    return this.repo;
  }
}

@Injectable()
export class StudentStatisticsInAdminService {
  constructor(
    @InjectRepository(Admin)
    private repo: Repository<AdminModule>,
  ) {}
  public async getStudentStatisticsInAdmin() {
    return this.repo;
  }
}

@Injectable()
export class DetailStudentStatisticInAdminService {
  constructor(
    @InjectRepository(Admin)
    private repo: Repository<AdminModule>,
  ) {}
  public async getDetailStudentStatisticInAdmin(nim: string) {
    return this.repo.find({ where: (data) => data.nim === nim });
  }
}
