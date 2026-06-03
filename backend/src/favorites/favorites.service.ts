import { PrismaService } from '@/database';
import { ReadFavoritesMapper } from '@/mappers';
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateFavoriteDTO,
  ReadManyFavoritesDTO,
  ReadManyFavoritesQueryDTO,
} from './dto';

@Injectable()
export class FavoritesService {
  private readonly mapper = new ReadFavoritesMapper();

  constructor(private readonly prisma: PrismaService) {}

  async getFavorites(
    userId: string,
    query: ReadManyFavoritesQueryDTO,
  ): Promise<ReadManyFavoritesDTO> {
    const data = await this.prisma.favorite.findMany({
      where: { userId },
      include: { listing: { include: { photos: true } } },
      take: query.limit,
      skip: query.cursor ? 1 : 0,
      cursor: query.cursor
        ? { userId_listingId: { userId, listingId: query.cursor } }
        : undefined,
      orderBy: { savedAt: 'desc' },
    });

    const count = await this.prisma.favorite.count({ where: { userId } });

    return this.mapper.mapAll(data, count);
  }

  async create(
    userId: string,
    data: CreateFavoriteDTO,
  ): Promise<{ message: string }> {
    await this.prisma.favorite.create({
      data: { userId, listingId: data.listingId },
    });

    return { message: 'Добавлено в избранное' };
  }

  async delete(
    userId: string,
    listingId: string,
  ): Promise<{ message: string }> {
    const favorite = await this.prisma.favorite.findUnique({
      where: { userId_listingId: { userId, listingId } },
    });

    if (!favorite) throw new NotFoundException('Не найдено в избранном');

    await this.prisma.favorite.delete({
      where: { userId_listingId: { userId, listingId } },
    });

    return { message: 'Удалено из избранного' };
  }
}
