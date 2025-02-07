import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Admin } from "../entities/admin";
import { AdminModule } from "../modules/admin.module";

@Injectable()
export class SignInAdminService {
  constructor(
    @InjectRepository(Admin) private signInAdminRepository: Repository<Admin>,
  ) {}
  public async signIn() {}
}

@Injectable()
export class StatisticsAdminService {
  constructor(
    @InjectRepository(Admin)
    private staticticsStudentRepository: Repository<Admin>,
  ) {}
  public async getStatisticsStudent() {}
}

@Injectable()
export class DetailStatisticsStudentInAdminService {
  constructor(
    @InjectRepository(Admin)
    private detailStatisticsStudentInAdminRepository: Repository<AdminModule>,
  ) {}
  public async detailStatisticsStudentInAdmin() {}
}
