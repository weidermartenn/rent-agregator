import { PrismaService } from '@/database';
import { ReadMessagesMapper } from '@/mappers';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@/generated/prisma';
import {
  CreateMessageDTO,
  ReadManyMessagesDTO,
  ReadManyMessagesQueryDTO,
} from './dto';
import { randomUUID } from 'crypto';

@Injectable()
export class MessagesService {
  private readonly mapper = new ReadMessagesMapper();

  constructor(private readonly prisma: PrismaService) {}

  async getMessages(
    userId: string,
    query: ReadManyMessagesQueryDTO,
  ): Promise<ReadManyMessagesDTO> {
    const where: Prisma.MessageWhereInput = {
      OR: [{ senderId: userId }, { recipientId: userId }],
    };

    if (query.recipientId) {
      where.OR = [
        { senderId: userId, recipientId: query.recipientId },
        { senderId: query.recipientId, recipientId: userId },
      ];
    }

    if (query.listingId) {
      where.listingId = query.listingId;
    }

    const data = await this.prisma.message.findMany({
      where,
      take: query.limit,
      skip: query.cursor ? 1 : 0,
      cursor: query.cursor ? { id: query.cursor } : undefined,
      orderBy: { sentAt: 'asc' },
    });

    const count = await this.prisma.message.count({ where });

    return this.mapper.mapAll(data, count);
  }

  async create(
    senderId: string,
    data: CreateMessageDTO,
  ): Promise<{ message: string }> {
    await this.prisma.message.create({
      data: { ...data, id: randomUUID(), senderId },
    });

    return { message: 'Сообщение отправлено' };
  }

  async markAsRead(
    messageId: string,
    userId: string,
  ): Promise<{ message: string }> {
    const msg = await this.prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!msg) throw new NotFoundException('Сообщение не найдено');
    if (msg.recipientId !== userId)
      throw new NotFoundException('Сообщение не найдено');

    await this.prisma.message.update({
      where: { id: messageId },
      data: { isRead: true },
    });

    return { message: 'Сообщение прочитано' };
  }
}
