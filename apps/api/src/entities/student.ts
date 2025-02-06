import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "student" })
export class Student extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("text")
  nim: string;

  @Column("text")
  email: string;

  @Column("text")
  full_name: string;
}
