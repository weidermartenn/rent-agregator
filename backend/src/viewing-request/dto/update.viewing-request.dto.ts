import { PartialType } from '@nestjs/mapped-types';
import { CreateViewingRequestDTO } from './create.viewing-request.dto';
import { ViewingStatus } from '@/generated/prisma';
import { IsEnum } from 'class-validator';

export class UpdateViewingRequestDTO extends PartialType(
  CreateViewingRequestDTO,
) {
  @IsEnum(ViewingStatus)
  status!: ViewingStatus;
}
