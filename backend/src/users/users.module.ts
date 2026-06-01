import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from '@/auth';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AuthModule],
})
export class UsersModule {}
