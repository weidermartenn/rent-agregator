import { ViewingStatus } from '@/generated/prisma';
import { IsEnum, IsInt, IsOptional, IsUUID, Max, Min } from 'class-validator';

export class ReadManyViewingRequestsQueryDTO {
  @IsOptional()
  @IsUUID()
  listingId?: string;

  @IsOptional()
  @IsEnum(ViewingStatus)
  status?: ViewingStatus;

  @IsOptional()
  @IsUUID()
  cursor?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number = 20;
}
