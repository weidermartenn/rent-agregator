import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ViewingRequestService } from './viewing-request.service';
import { JwtAuthGuard } from '@/auth';
import { CurrentUser } from '@/decorators';
import type { User } from '@/generated/prisma';
import {
  CreateViewingRequestDTO,
  GetViewingRequestParamsDTO,
  ReadManyViewingRequestsDTO,
  ReadManyViewingRequestsQueryDTO,
  UpdateViewingRequestDTO,
} from './dto';

@UseGuards(JwtAuthGuard)
@Controller('viewing-requests')
export class ViewingRequestController {
  constructor(private readonly service: ViewingRequestService) {}

  @Get()
  getViewingRequests(
    @Query() query: ReadManyViewingRequestsQueryDTO,
  ): Promise<ReadManyViewingRequestsDTO> {
    return this.service.getViewingRequests(query);
  }

  @Post()
  create(
    @Body() data: CreateViewingRequestDTO,
    @CurrentUser() user: User,
  ): Promise<{ message: string }> {
    return this.service.create(data, user.id);
  }

  @Patch(':viewingRequestId')
  update(
    @Param() { viewingRequestId }: GetViewingRequestParamsDTO,
    @Body() data: UpdateViewingRequestDTO,
    @CurrentUser() user: User,
  ): Promise<{ message: string }> {
    return this.service.update(viewingRequestId, user.id, data);
  }
}
