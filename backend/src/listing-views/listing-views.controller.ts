import { CurrentUser } from '@/decorators';
import type { User } from '@/generated/prisma';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { ListingViewsService } from './listing-views.service';
import { ReadManyListingViewsDTO } from './dto';

@Controller('listings/:listingId/views')
export class ListingViewsController {
  constructor(private readonly service: ListingViewsService) {}

  @Post()
  recordView(
    @Param('listingId') listingId: string,
    @CurrentUser() user?: User,
  ): Promise<void> {
    return this.service.recordView(listingId, user?.id);
  }

  @Get()
  getViews(
    @Param('listingId') listingId: string,
  ): Promise<ReadManyListingViewsDTO> {
    return this.service.getViews(listingId);
  }
}
