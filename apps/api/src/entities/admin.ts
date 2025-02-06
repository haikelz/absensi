import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "admin" })
export class Admin extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("string")
  full_name: string;

  @Column("string")
  username: string;

  @Column("string")
  password: string;
}
