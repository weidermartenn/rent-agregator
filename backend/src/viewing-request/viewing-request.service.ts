import { PrismaService } from '@/database';
import { ReadViewingRequestsMapper } from '@/mappers';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateViewingRequestDTO,
  ReadManyViewingRequestsDTO,
  ReadManyViewingRequestsQueryDTO,
  UpdateViewingRequestDTO,
} from './dto';
import { Prisma } from '@/generated/prisma';
import { randomUUID } from 'crypto';

@Injectable()
export class ViewingRequestService {
  private readonly mapper = new ReadViewingRequestsMapper();

  constructor(private readonly prisma: PrismaService) {}

  async getViewingRequests(
    query: ReadManyViewingRequestsQueryDTO,
  ): Promise<ReadManyViewingRequestsDTO> {
    const where: Prisma.ViewingRequestWhereInput = {};

    if (query.listingId) where.listingId = query.listingId;
    if (query.status) where.status = query.status;

    const data = await this.prisma.viewingRequest.findMany({
      where,
      skip: query.cursor ? 1 : 0,
      take: query.limit,
      cursor: query.cursor ? { id: query.cursor } : undefined,
      orderBy: { requestedAt: 'desc' },
    });

    const count = await this.prisma.viewingRequest.count({ where });

    return this.mapper.mapAll(data, count);
  }

  async create(
    data: CreateViewingRequestDTO,
    tenantId: string,
  ): Promise<{ message: string }> {
    await this.prisma.viewingRequest.create({
      data: { ...data, id: randomUUID(), tenantId },
    });

    return { message: 'Запрос отправлен' };
  }

  async update(
    viewingRequestId: string,
    userId: string,
    data: UpdateViewingRequestDTO,
  ): Promise<{ message: string }> {
    const viewingRequest = await this.prisma.viewingRequest.findUnique({
      where: { id: viewingRequestId },
      include: { listing: true },
    });

    if (!viewingRequest) throw new NotFoundException('Запрос не найден');
    if (!viewingRequest.listing)
      throw new NotFoundException('Объявление не найдено');
    if (viewingRequest.listing.landlordId !== userId)
      throw new ForbiddenException();

    await this.prisma.viewingRequest.update({
      where: { id: viewingRequestId },
      data,
    });

    return { message: 'Запрос обновлен' };
  }
}
