import { Module } from '@nestjs/common';
import { ListingPhotosController } from './listing-photos.controller';
import { ListingPhotosService } from './listing-photos.service';
import { AuthModule } from '@/auth';

@Module({
  controllers: [ListingPhotosController],
  providers: [ListingPhotosService],
  imports: [AuthModule],
})
export class ListingPhotosModule {}
