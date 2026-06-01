import { PrismaService } from '@/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDTO } from './dto/update.user.dto';
import { ReadUserDTO } from './dto/read.user.dto';
import { ReadUserMapper } from '@/mappers';

@Injectable()
export class UsersService {
  private readonly mapper = new ReadUserMapper();

  constructor(private readonly prisma: PrismaService) {}

  async getUserData(userId: string): Promise<ReadUserDTO> {
    const user = await this.prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) throw new NotFoundException('Пользователь не найден');

    return this.mapper.map(user);
  }

  async update(
    userId: string,
    data: UpdateUserDTO,
  ): Promise<{ message: string }> {
    await this.prisma.user.update({
      where: { id: userId },
      data,
    });

    return { message: 'Профиль обновлен' };
  }
}
