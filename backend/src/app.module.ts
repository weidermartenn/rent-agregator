import { Module } from '@nestjs/common';
import { PrismaModule } from './database';
import { RedisModule } from '@nestjs-modules/ioredis';
import { AuthModule } from '@/auth';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ListingsModule } from './listings/listings.module';
import { ListingPhotosModule } from './listing-photos/listing-photos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RedisModule.forRoot({
      type: 'single',
      url: process.env.REDIS_URL,
    }),
    AuthModule,
    UsersModule,
    ListingsModule,
    ListingPhotosModule,
  ],
})
export class AppModule {}
