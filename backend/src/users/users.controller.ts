import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserParams, ReadUserDTO, UpdateUserDTO } from './dto';
import { JwtAuthGuard } from '@/auth';
import { CurrentUser } from '@/decorators';
import type { User } from '@/generated/prisma';
import { FileInterceptor } from '@nestjs/platform-express';
import type { MulterFile } from '@/storage';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('me')
  getMe(@CurrentUser() user: User): Promise<ReadUserDTO> {
    return this.service.getUserData(user.id);
  }

  @Get(':userId')
  getUser(@Param() { userId }: GetUserParams): Promise<ReadUserDTO> {
    return this.service.getUserData(userId);
  }

  @Patch(':userId')
  update(
    @Param() { userId }: GetUserParams,
    @Body() data: UpdateUserDTO,
  ): Promise<{ message: string }> {
    return this.service.update(userId, data);
  }

  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  uploadAvatar(
    @CurrentUser() user: User,
    @UploadedFile() file: MulterFile,
  ): Promise<{ message: string }> {
    return this.service.uploadAvatar(user.id, file);
  }
}
