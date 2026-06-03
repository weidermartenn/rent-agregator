import { PrismaService } from '@/database';
import { Injectable } from '@nestjs/common';
import { ReadManyListingViewsDTO } from './dto';

@Injectable()
export class ListingViewsService {
  constructor(private readonly prisma: PrismaService) {}

  async recordView(listingId: string, userId?: string): Promise<void> {
    await this.prisma.listingView.create({
      data: { listingId, userId },
    });
  }

  async getViews(listingId: string): Promise<ReadManyListingViewsDTO> {
    const data = await this.prisma.listingView.findMany({
      where: { listingId },
      orderBy: { viewedAt: 'desc' },
    });

    const count = await this.prisma.listingView.count({
      where: { listingId },
    });

    return {
      count,
      data: data.map((v) => ({
        id: v.id,
        listingId: v.listingId,
        viewedAt: v.viewedAt,
      })),
    };
  }
}
