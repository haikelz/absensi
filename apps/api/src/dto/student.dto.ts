export class SignInStudentDto {
  email: string;
  nim: string;
}

export class AbsenceDto extends SignInStudentDto {}

export class StudentStatisticDto {
  nim: string;
}
