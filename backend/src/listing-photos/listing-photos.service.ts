import { PrismaService } from '@/database';
import { ReadListingPhotosMapper } from '@/mappers';
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateListingPhotoDTO,
  ReadManyListingPhotosDTO,
  UpdateListingPhotoDTO,
} from './dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ListingPhotosService {
  private readonly mapper = new ReadListingPhotosMapper();

  constructor(private readonly prisma: PrismaService) {}

  async getListingPhotos(listingId: string): Promise<ReadManyListingPhotosDTO> {
    const data = await this.prisma.listingPhoto.findMany({
      where: { listingId: listingId },
      orderBy: { sortOrder: 'asc' },
    });

    const count = await this.prisma.listingPhoto.count({
      where: { listingId: listingId },
    });

    return this.mapper.mapAll(data, count);
  }

  async create(
    data: CreateListingPhotoDTO,
    listingId: string,
  ): Promise<{ message: string }> {
    await this.prisma.listingPhoto.create({
      data: { ...data, id: randomUUID(), listingId },
    });

    return { message: 'Фотография добавлена' };
  }

  async update(
    listingPhotoId: string,
    data: UpdateListingPhotoDTO,
  ): Promise<{ message: string }> {
    const listingPhoto = await this.prisma.listingPhoto.findUnique({
      where: { id: listingPhotoId },
    });

    if (!listingPhoto) throw new NotFoundException('Фотография не найдена');

    await this.prisma.listingPhoto.update({
      where: { id: listingPhotoId },
      data,
    });

    return { message: 'Фотография обновлена' };
  }

  async delete(listingId: string): Promise<{ message: string }> {
    const listing = await this.prisma.listingPhoto.findUnique({
      where: { id: listingId },
    });

    if (!listing) throw new NotFoundException('Фотография не найдена');

    await this.prisma.listingPhoto.delete({ where: { id: listingId } });

    return { message: 'Фотография удалена' };
  }
}
