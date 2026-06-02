import { Listing, ListingPhoto } from '@/generated/prisma';
import { ReadManyListingsDTO, ReadListingDTO } from '@/listings/dto';
import { ReadListingPhotosMapper } from '@/mappers';

type AllListingsFields = Listing & {
  photos: ListingPhoto[];
};

export class ReadListingsMapper {
  private readonly listingPhotosMapper = new ReadListingPhotosMapper();
  public mapOne(listing: AllListingsFields): ReadListingDTO {
    return {
      id: listing.id,
      landlordId: listing.landlordId,
      title: listing.title,
      description: listing.description,
      status: listing.status,
      propertyType: listing.propertyType,
      rooms: listing.rooms,
      area: listing.area.toNumber(),
      priceMonth: listing.priceMonth.toNumber(),
      city: listing.city,
      createdAt: listing.createdAt,
      photos: listing.photos.map((one) => this.listingPhotosMapper.mapOne(one)),
    };
  }

  public mapAll(data: AllListingsFields[], count: number): ReadManyListingsDTO {
    return {
      count,
      data: data.map((one) => this.mapOne(one)),
    };
  }
}
