import { JwtAuthGuard } from '@/auth';
import { CurrentUser } from '@/decorators';
import type { User } from '@/generated/prisma';
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
import { MessagesService } from './messages.service';
import {
  CreateMessageDTO,
  ReadManyMessagesDTO,
  ReadManyMessagesQueryDTO,
} from './dto';

@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(private readonly service: MessagesService) {}

  @Get()
  getMessages(
    @CurrentUser() user: User,
    @Query() query: ReadManyMessagesQueryDTO,
  ): Promise<ReadManyMessagesDTO> {
    return this.service.getMessages(user.id, query);
  }

  @Post()
  create(
    @CurrentUser() user: User,
    @Body() data: CreateMessageDTO,
  ): Promise<{ message: string }> {
    return this.service.create(user.id, data);
  }

  @Patch(':messageId/read')
  markAsRead(
    @Param('messageId') messageId: string,
    @CurrentUser() user: User,
  ): Promise<{ message: string }> {
    return this.service.markAsRead(messageId, user.id);
  }
}
