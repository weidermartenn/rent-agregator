import { IsInt, IsOptional, IsUUID, Max, Min } from 'class-validator';

export class ReadManyMessagesQueryDTO {
  @IsOptional()
  @IsUUID()
  cursor?: string;

  @IsOptional()
  @IsUUID()
  recipientId?: string;

  @IsOptional()
  @IsUUID()
  listingId?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number = 20;
}
