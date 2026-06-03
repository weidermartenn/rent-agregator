import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreateMessageDTO {
  @IsUUID()
  recipientId!: string;

  @IsOptional()
  @IsUUID()
  listingId?: string;

  @IsString()
  @Length(1, 1000)
  body!: string;
}
