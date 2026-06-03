import { Module } from '@nestjs/common';
import { ListingViewsService } from './listing-views.service';
import { ListingViewsController } from './listing-views.controller';

@Module({
  controllers: [ListingViewsController],
  providers: [ListingViewsService],
})
export class ListingViewsModule {}
