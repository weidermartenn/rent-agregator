import { PrismaService } from '@/database';
import { MailService } from '@/mail/mail.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import Redis from 'ioredis';
import { SendOtpDTO, VerifyOtpDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectRedis() private readonly redis: Redis,
    private readonly mailService: MailService,
  ) {}

  async sendOtp({ email }: SendOtpDTO): Promise<{ message: string }> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await this.redis.set(`otp:${email}`, code, 'EX', 300);
    await this.redis.set(`otp:attempts:${email}`, '0', 'EX', 900);

    await this.mailService.sendOtp(email, code);

    return { message: 'Код отправлен на почту' };
  }

  async verifyOtp({ email, code }: VerifyOtpDTO): Promise<{ user: any }> {
    const attempts = await this.redis.incr(`otp:attempts:${email}`);

    if (attempts > 5) {
      throw new BadRequestException('Превышено количество попыток');
    }

    const stored = await this.redis.get(`otp:${email}`);

    if (!stored || stored !== code) {
      throw new UnauthorizedException('Неверный код');
    }

    await this.redis.del(`otp:${email}`);
    await this.redis.del(`otp:attempts:${email}`);

    const user = await this.prisma.user.upsert({
      where: { email },
      create: { email, isVerified: true, verifiedAt: new Date() },
      update: { isVerified: true, verifiedAt: new Date() },
    });

    return { user };
  }
}
