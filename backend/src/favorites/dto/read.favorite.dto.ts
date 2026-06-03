import { ReadListingDTO } from '@/listings/dto';

export class ReadFavoriteDTO {
  listingId!: string;
  savedAt!: Date;
  listing!: ReadListingDTO;
}
