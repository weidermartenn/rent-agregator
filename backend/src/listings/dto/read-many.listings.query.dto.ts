import { ListingStatus, PropertyType } from '@/generated/prisma';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

const MAX_PAGE_SIZE = 50;

export class ReadManyListingsQueryDTO {
  @IsOptional()
  @IsNumber()
  @Min(0)
  priceFrom?: number;

  @IsOptional()
  @IsNumber()
  priceTo?: number;

  @IsOptional()
  @IsEnum(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';

  @IsOptional()
  @IsEnum(['createdAt', 'priceMonth', 'area'])
  sortBy?: 'createdAt' | 'priceMonth' | 'area';

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(MAX_PAGE_SIZE)
  pageSize: number = MAX_PAGE_SIZE;

  @IsOptional()
  @IsInt()
  @Min(1)
  pageNumber: number = 1;

  @IsOptional()
  @IsUUID()
  landlordId?: string;

  @IsOptional()
  @IsEnum(PropertyType)
  propertyType?: PropertyType;

  @IsOptional()
  @IsEnum(ListingStatus)
  status?: ListingStatus;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  rooms?: number;

  get take(): number {
    return this.pageSize;
  }

  get skip(): number {
    return (this.pageNumber - 1) * this.take;
  }
}
