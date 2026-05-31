import { IsEmail, IsString, Length } from 'class-validator';

export class VerifyOtpDTO {
  @IsEmail()
  @Length(1, 255)
  email!: string;

  @IsString()
  @Length(6, 6)
  code!: string;
}
