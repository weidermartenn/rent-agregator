import { ListingPhoto } from '@/generated/prisma';
import {
  ReadListingPhotoDTO,
  ReadManyListingPhotosDTO,
} from '@/listing-photos/dto';

export class ReadListingPhotosMapper {
  public mapOne(listingPhoto: ListingPhoto): ReadListingPhotoDTO {
    return {
      id: listingPhoto.id,
      listingId: listingPhoto.listingId,
      url: listingPhoto.url,
      sortOrder: listingPhoto.sortOrder,
    };
  }

  public mapAll(data: ListingPhoto[], count: number): ReadManyListingPhotosDTO {
    return {
      count,
      data: data.map((one) => this.mapOne(one)),
    };
  }
}
