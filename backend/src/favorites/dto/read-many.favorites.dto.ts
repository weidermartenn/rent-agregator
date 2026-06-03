import { ReadFavoriteDTO } from './read.favorite.dto';

export class ReadManyFavoritesDTO {
  count!: number;
  data!: ReadFavoriteDTO[];
}
