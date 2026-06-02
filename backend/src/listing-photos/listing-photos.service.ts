import { PrismaService } from '@/database';
import { ReadListingPhotosMapper } from '@/mappers';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ReadManyListingPhotosDTO, UpdateListingPhotoDTO } from './dto';
import { randomUUID } from 'crypto';
import { MulterFile, StorageService } from '@/storage';

@Injectable()
export class ListingPhotosService {
  private readonly mapper = new ReadListingPhotosMapper();

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
  ) {}

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

  async uploadPhoto(
    listingId: string,
    file: MulterFile,
  ): Promise<{ message: string }> {
    const ext = file.originalname.split('.').pop() ?? 'jpg';
    const key = `${listingId}/${randomUUID()}.${ext}`;

    const url = await this.storage.upload(
      'listing_photos',
      key,
      file.buffer,
      file.mimetype,
    );

    const count = await this.prisma.listingPhoto.count({
      where: { listingId },
    });

    await this.prisma.listingPhoto.create({
      data: {
        id: randomUUID(),
        listingId,
        url,
        sortOrder: count + 1,
      },
    });

    return { message: 'Фотография загружена' };
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

  async delete(photoId: string): Promise<{ message: string }> {
    const photo = await this.prisma.listingPhoto.findUnique({
      where: { id: photoId },
    });

    if (!photo) throw new NotFoundException('Фотография не найдена');

    await this.prisma.listingPhoto.delete({ where: { id: photoId } });

    return { message: 'Фотография удалена' };
  }
}
