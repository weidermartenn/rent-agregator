import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { AuthModule } from '@/auth';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [AuthModule],
})
export class MessagesModule {}
