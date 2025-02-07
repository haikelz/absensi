import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "student" })
export class Student extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 10 })
  nim: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("varchar", { length: 255 })
  full_name: string;
}
