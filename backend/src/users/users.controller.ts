import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUserParams, ReadUserDTO, UpdateUserDTO } from './dto';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

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
}
