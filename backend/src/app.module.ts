import { Module } from '@nestjs/common';
import { PrismaModule } from './database';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    PrismaModule,
    RedisModule.forRoot({
      type: 'single',
      url: process.env.REDIS_URL,
    }),
  ],
})
export class AppModule {}
