import { Listing } from '@/generated/prisma';
import { ReadManyListingsDTO } from '@/listings/dto/read-many.listings.dto';
import { ReadListingDTO } from '@/listings/dto/read.listing.dto';

export class ReadListingsMapper {
  public mapOne(listing: Listing): ReadListingDTO {
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
    };
  }

  public mapAll(data: Listing[], count: number): ReadManyListingsDTO {
    return {
      count,
      data: data.map((one) => this.mapOne(one)),
    };
  }
}
