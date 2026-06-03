import { IsUUID } from 'class-validator';

export class CreateFavoriteDTO {
  @IsUUID()
  listingId!: string;
}
