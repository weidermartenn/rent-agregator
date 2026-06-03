import { Favorite, Listing, ListingPhoto } from '@/generated/prisma';
import { ReadManyFavoritesDTO, ReadFavoriteDTO } from '@/favorites/dto';
import { ReadListingsMapper } from '@/mappers';

type FavoriteWithListing = Favorite & {
  listing: Listing & { photos: ListingPhoto[] };
};

export class ReadFavoritesMapper {
  private readonly listingsMapper = new ReadListingsMapper();

  public mapOne(favorite: FavoriteWithListing): ReadFavoriteDTO {
    return {
      listingId: favorite.listingId,
      savedAt: favorite.savedAt,
      listing: this.listingsMapper.mapOne(favorite.listing),
    };
  }

  public mapAll(
    data: FavoriteWithListing[],
    count: number,
  ): ReadManyFavoritesDTO {
    return {
      count,
      data: data.map((one) => this.mapOne(one)),
    };
  }
}
