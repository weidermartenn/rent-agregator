import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreateViewingRequestDTO {
  @IsUUID()
  listingId!: string;

  @IsOptional()
  @IsString()
  @Length(1, 500)
  message?: string;
}
