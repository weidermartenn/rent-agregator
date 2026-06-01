import { ListingStatus, PropertyType } from '@/generated/prisma';

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
}
