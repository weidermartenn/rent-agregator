export class ReadMessageDTO {
  id!: string;
  senderId?: string;
  recipientId?: string;
  listingId?: string;
  body!: string;
  isRead!: boolean;
  sentAt!: Date;
}
