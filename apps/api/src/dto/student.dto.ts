import { IsEmail, IsString } from "class-validator";

export class SignInStudentDto {
  @IsEmail()
  email: string;

  @IsString()
  nim: string;
}

export class AbsenceDto extends SignInStudentDto {}

export class StudentStatisticDto {
  @IsString()
  nim: string;
}
