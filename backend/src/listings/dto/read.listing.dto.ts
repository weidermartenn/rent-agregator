import { ListingStatus, PropertyType } from '@/generated/prisma';
import { ReadListingPhotoDTO } from '@/listing-photos/dto/read.listing-photo.dto';

export class ReadListingDTO {
  id!: string;
  landlordId!: string;
  title!: string;
  description?: string | null;
  status!: ListingStatus;
  propertyType!: PropertyType;
  rooms?: number | null;
  area!: number;
  priceMonth!: number;
  city!: string;
  createdAt!: Date;

  photos!: ReadListingPhotoDTO[];
}
