import { IsEmail, IsString, Length } from "class-validator";
import { NIM_VALIDATION_ERROR_MESSAGE } from "../utils/constants";

export class SignInStudentDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @Length(10, 10, { message: NIM_VALIDATION_ERROR_MESSAGE })
  nim: string;
}

export class AbsenceDto extends SignInStudentDto {}

export class StudentStatisticDto {
  @IsString()
  @Length(10, 10, { message: NIM_VALIDATION_ERROR_MESSAGE })
  nim: string;
}
