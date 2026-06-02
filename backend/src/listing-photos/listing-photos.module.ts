import { Module } from '@nestjs/common';
import { ListingPhotosController } from './listing-photos.controller';
import { ListingPhotosService } from './listing-photos.service';
import { AuthModule } from '@/auth';
import { StorageModule } from '@/storage';

@Module({
  imports: [AuthModule, StorageModule],
  controllers: [ListingPhotosController],
  providers: [ListingPhotosService],
})
export class ListingPhotosModule {}
