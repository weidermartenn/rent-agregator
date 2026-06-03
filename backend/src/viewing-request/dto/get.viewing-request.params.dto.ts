import { IsUUID } from 'class-validator';

export class GetViewingRequestParamsDTO {
  @IsUUID(4)
  viewingRequestId!: string;
}
