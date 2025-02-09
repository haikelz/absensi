import { IsEmail, IsString, Length } from "class-validator";

export class SignInAdminDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class DetailStudentStatisticInAdminDto {
  @IsString()
  @Length(10)
  nim: string;
}
