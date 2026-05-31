import { IsOptional, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CompleteProfileDTO {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  firstName?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  lastName?: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;
}
