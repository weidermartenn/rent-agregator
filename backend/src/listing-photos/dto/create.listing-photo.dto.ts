import { IsInt, IsUrl } from 'class-validator';

export class CreateListingPhotoDTO {
  @IsUrl()
  url!: string;

  @IsInt()
  sortOrder!: number;
}
