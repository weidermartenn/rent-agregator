import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller';
import { ListingsService } from './listings.service';
import { AuthModule } from '@/auth';

@Module({
  controllers: [ListingsController],
  providers: [ListingsService],
  imports: [AuthModule],
})
export class ListingsModule {}
