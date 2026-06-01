import { PrismaService } from '@/database';
import { Prisma } from '@/generated/prisma';
import { ReadListingsMapper } from '@/mappers';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateListingDTO,
  ReadManyListingsDTO,
  ReadManyListingsQueryDTO,
  UpdateListingDTO,
} from './dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ListingsService {
  private readonly mapper = new ReadListingsMapper();

  constructor(private readonly prisma: PrismaService) {}

  async getListings(
    query: ReadManyListingsQueryDTO,
  ): Promise<ReadManyListingsDTO> {
    const where: Prisma.ListingWhereInput = {};

    if (query.priceFrom || query.priceTo) {
      where.priceMonth = {
        ...(query.priceFrom && { gte: query.priceFrom }),
        ...(query.priceTo && { lte: query.priceTo }),
      };
    }

    if (query.landlordId) {
      where.landlordId = query.landlordId;
    }

    if (query.propertyType) {
      where.propertyType = query.propertyType;
    }

    if (query.status) {
      where.status = query.status;
    }

    if (query.city) {
      where.city = { contains: query.city, mode: 'insensitive' };
    }

    if (query.rooms) {
      where.rooms = query.rooms;
    }

    const data = await this.prisma.listing.findMany({
      where,
      orderBy: { [query.sortBy ?? 'createdAt']: query.sortOrder ?? 'desc' },
      take: query.take,
      skip: query.skip,
    });

    const count = await this.prisma.listing.count({ where });

    return this.mapper.mapAll(data, count);
  }

  async create(data: CreateListingDTO, landlordId: string): Promise<string> {
    await this.prisma.listing.create({
      data: { ...data, id: randomUUID(), landlordId },
    });

    return 'Объявление создано';
  }

  async update(
    listingId: string,
    userId: string,
    data: UpdateListingDTO,
  ): Promise<string> {
    const listing = await this.prisma.listing.findUnique({
      where: { id: listingId },
    });

    if (!listing) throw new NotFoundException('Объявление не найдено');
    if (listing.landlordId !== userId)
      throw new ForbiddenException('Недостаточно прав');

    await this.prisma.listing.update({
      where: { id: listingId },
      data,
    });

    return 'Объявление обновлено';
  }

  async delete(listingId: string, userId: string): Promise<string> {
    const listing = await this.prisma.listing.findUnique({
      where: { id: listingId },
    });

    if (!listing) throw new NotFoundException('Объявление не найдено');
    if (listing.landlordId !== userId)
      throw new ForbiddenException('Недостаточно прав');

    await this.prisma.listing.delete({ where: { id: listingId } });

    return 'Объявление удалено';
  }
}
