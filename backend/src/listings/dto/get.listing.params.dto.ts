import { IsUUID } from 'class-validator';

export class GetListingParamsDTO {
  @IsUUID()
  listingId!: string;
}
