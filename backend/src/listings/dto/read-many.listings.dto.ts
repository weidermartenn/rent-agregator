import { ReadListingDTO } from './read.listing.dto';

export class ReadManyListingsDTO {
  count!: number;
  data!: ReadListingDTO[];
}
