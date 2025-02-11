import { Seeder } from "@jorgebodega/typeorm-seeding";
import { DataSource } from "typeorm";
import { Absence, Student } from "../entities/student";

export default class UserSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const students: Student[] = [];
    const absences: Absence[] = [];

    await dataSource.createEntityManager().save<Student>(students);
    await dataSource.createEntityManager().save<Absence>(Absence);
  }
}
