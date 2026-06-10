import { User } from '@/generated/prisma';
import { ReadUserDTO } from '@/users/dto/read.user.dto';

export class ReadUserMapper {
  public map(user: User): ReadUserDTO {
    return {
      id: user.id,
      email: user.email,
      phone: user.phone ?? undefined,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
      city: user.city ?? undefined,
    };
  }
}
