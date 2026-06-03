import { IsUUID } from 'class-validator';

export class GetMessageParamsDTO {
  @IsUUID(4)
  messageId!: string;
}
