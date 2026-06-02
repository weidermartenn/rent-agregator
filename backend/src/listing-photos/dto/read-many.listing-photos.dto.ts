import { ReadListingPhotoDTO } from './read.listing-photo.dto';

export class ReadManyListingPhotosDTO {
  count!: number;
  data!: ReadListingPhotoDTO[];
}
