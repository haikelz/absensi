import { IsEmail, IsString, Length } from "class-validator";

export class SignInStudentDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @Length(10)
  nim: string;
}

export class AbsenceDto extends SignInStudentDto {}

export class StudentStatisticDto {
  @IsString()
  @Length(10)
  nim: string;
}
