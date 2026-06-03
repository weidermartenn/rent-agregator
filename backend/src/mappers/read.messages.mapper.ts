import { Message } from '@/generated/prisma';
import { ReadManyMessagesDTO, ReadMessageDTO } from '@/messages/dto';

export class ReadMessagesMapper {
  public mapOne(message: Message): ReadMessageDTO {
    return {
      id: message.id,
      senderId: message.senderId ?? undefined,
      recipientId: message.recipientId ?? undefined,
      listingId: message.listingId ?? undefined,
      body: message.body,
      isRead: message.isRead,
      sentAt: message.sentAt,
    };
  }

  public mapAll(data: Message[], count: number): ReadManyMessagesDTO {
    return {
      count,
      data: data.map((one) => this.mapOne(one)),
    };
  }
}
