import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Absence, Student } from "../entities/student";

@Injectable()
export class SignInStudentService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}
  public async signIn(email: string, nim: string) {
    const data = await this.repo.findBy({
      email,
      nim,
    });
    return data;
  }
}

@Injectable()
export class StudentStatisticService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
    @InjectRepository(Absence)
    private absenceRepo: Repository<Absence>,
  ) {}
  public async getStudentStatistic(nim: string) {
    const absences = await this.absenceRepo.findBy({ nim });
    const student = await this.studentRepo.findBy({ nim });

    return {
      data: {
        absences,
        student,
      },
    };
  }
}

@Injectable()
export class AbsenceService {
  constructor(@InjectRepository(Absence) private repo: Repository<Absence>) {}

  public async getAbsenceByEmailAndNim(email: string, nim: string) {
    const data = await this.repo.findBy({ email, nim });
    return data[0];
  }

  public async absence(email: string, nim: string) {
    const data = await this.getAbsenceByEmailAndNim(email, nim);

    // Note: format date using date-fns
    if (data.created_at === new Date()) {
      // Logic: The student only can do absence once per day
      return {
        message: "Kamu hanya perlu mengabsen satu kali dalam sehari!",
      };
    }
  }
}
