import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "admin" })
export class Admin extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("text")
  full_name: string;

  @Column("text")
  username: string;

  @Column("text")
  password: string;
}
