import { Module } from '@nestjs/common';
import { ViewingRequestService } from './viewing-request.service';
import { ViewingRequestController } from './viewing-request.controller';

@Module({
  controllers: [ViewingRequestController],
  providers: [ViewingRequestService],
})
export class ViewingRequestModule {}
