import { Controller } from '@nestjs/common';
import { ViewingRequestService } from './viewing-request.service';

@Controller('viewing-request')
export class ViewingRequestController {
  constructor(private readonly service: ViewingRequestService) {}
}
