import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ListingsService } from './listings.service';
import {
  CreateListingDTO,
  GetListingParamsDTO,
  ReadManyListingsDTO,
  ReadManyListingsQueryDTO,
  UpdateListingDTO,
} from './dto';
import { JwtAuthGuard } from '@/auth';
import type { User } from '@/generated/prisma';
import { CurrentUser } from '@/decorators';

@Controller('listings')
export class ListingsController {
  constructor(private readonly service: ListingsService) {}

  @Get()
  getListings(
    @Query() query: ReadManyListingsQueryDTO,
  ): Promise<ReadManyListingsDTO> {
    return this.service.getListings(query);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() data: CreateListingDTO,
    @CurrentUser() user: User,
  ): Promise<string> {
    return this.service.create(data, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':listingId')
  update(
    @Param() { listingId }: GetListingParamsDTO,
    @Body() data: UpdateListingDTO,
    @CurrentUser() user: User,
  ): Promise<string> {
    return this.service.update(listingId, user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':listingId')
  delete(
    @Param() { listingId }: GetListingParamsDTO,
    @CurrentUser() user: User,
  ): Promise<string> {
    return this.service.delete(listingId, user.id);
  }
}
