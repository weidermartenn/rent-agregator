import { IsInt, IsOptional, IsUUID, Max, Min } from 'class-validator';

export class ReadManyFavoritesQueryDTO {
  @IsOptional()
  @IsUUID()
  cursor?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number = 20;
}
