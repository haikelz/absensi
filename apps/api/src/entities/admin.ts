import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "admin" })
export class Admin extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 })
  full_name: string;

  @Column("varchar", { length: 255 })
  username: string;

  @Column("varchar", { length: 255 })
  password: string;
}
