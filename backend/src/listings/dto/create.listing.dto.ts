import { PropertyType } from '@/generated/prisma';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateListingDTO {
  @IsString()
  @Length(1, 150)
  title!: string;

  @IsOptional()
  @IsString()
  @Length(1, 1000)
  description?: string;

  @IsEnum(PropertyType)
  propertyType!: PropertyType;

  @IsOptional()
  @IsInt()
  rooms?: number;

  @IsNumber()
  area!: number;

  @IsNumber()
  priceMonth!: number;

  @IsString()
  @Length(1, 50)
  city!: string;

  @IsNumber()
  @Min(-90)
  @Max(90)
  lat!: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  lng!: number;
}
