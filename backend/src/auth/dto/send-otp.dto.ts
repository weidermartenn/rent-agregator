import { IsEmail, Length } from 'class-validator';

export class SendOtpDTO {
  @IsEmail()
  @Length(1, 255)
  email!: string;
}
