import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "student" })
export class Student extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("string")
  nim: string;

  @Column("string")
  email: string;

  @Column("string")
  full_name: string;
}
