import { Module } from '@nestjs/common';
import { ViewingRequestService } from './viewing-request.service';
import { ViewingRequestController } from './viewing-request.controller';
import { AuthModule } from '@/auth';

@Module({
  controllers: [ViewingRequestController],
  providers: [ViewingRequestService],
  imports: [AuthModule],
})
export class ViewingRequestModule {}
