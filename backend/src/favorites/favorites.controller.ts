import { JwtAuthGuard } from '@/auth';
import { CurrentUser } from '@/decorators';
import type { User } from '@/generated/prisma';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import {
  CreateFavoriteDTO,
  ReadManyFavoritesDTO,
  ReadManyFavoritesQueryDTO,
} from './dto';

@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly service: FavoritesService) {}

  @Get()
  getFavorites(
    @CurrentUser() user: User,
    @Query() query: ReadManyFavoritesQueryDTO,
  ): Promise<ReadManyFavoritesDTO> {
    return this.service.getFavorites(user.id, query);
  }

  @Post()
  create(
    @CurrentUser() user: User,
    @Body() data: CreateFavoriteDTO,
  ): Promise<{ message: string }> {
    return this.service.create(user.id, data);
  }

  @Delete(':listingId')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(
    @CurrentUser() user: User,
    @Param('listingId') listingId: string,
  ): Promise<{ message: string }> {
    return this.service.delete(user.id, listingId);
  }
}
