import { ViewingStatus } from '@/generated/prisma';

export class ReadViewingRequestDTO {
  id!: string;
  listingId?: string;
  tenantId?: string;
  status!: ViewingStatus;
  message?: string;
  requestedAt!: Date;
}
