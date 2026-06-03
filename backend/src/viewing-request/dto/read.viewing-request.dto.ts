import { ViewingStatus } from '@/generated/prisma';

export class ReadViewingRequestDTO {
  id!: string;
  listingId?: string | null;
  tenantId?: string | null;
  status!: ViewingStatus;
  message?: string | null;
  requestedAt!: Date;
}
