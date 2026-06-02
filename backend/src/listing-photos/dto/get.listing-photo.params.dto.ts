import { IsUUID } from 'class-validator';

export class GetListingPhotoParamsDTO {
  @IsUUID(4)
  listingPhotoId!: string;
}
