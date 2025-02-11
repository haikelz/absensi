import { IsEmail, IsString, Length, MinLength } from "class-validator";
import {
  NIM_VALIDATION_ERROR_MESSAGE,
  PASSWORD_VALIDATION_ERROR_MESSAGE,
} from "../utils/constants";

export class SignInAdminDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(6, { message: PASSWORD_VALIDATION_ERROR_MESSAGE })
  password: string;
}

export class DetailStudentStatisticInAdminDto {
  @IsString()
  @Length(10, 10, { message: NIM_VALIDATION_ERROR_MESSAGE })
  nim: string;
}
