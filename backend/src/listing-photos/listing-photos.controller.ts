import { JwtAuthGuard } from '@/auth';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ListingPhotosService } from './listing-photos.service';
import {
  CreateListingPhotoDTO,
  GetListingPhotoParamsDTO,
  ReadManyListingPhotosDTO,
  UpdateListingPhotoDTO,
} from './dto';

@Controller('listing-photos')
export class ListingPhotosController {
  constructor(private readonly service: ListingPhotosService) {}

  @Get()
  getListingPhotos(listingId: string): Promise<ReadManyListingPhotosDTO> {
    return this.service.getListingPhotos(listingId);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':listingId')
  create(
    @Param('listingId') listingId: string,
    @Body() data: CreateListingPhotoDTO,
  ): Promise<{ message: string }> {
    return this.service.create(data, listingId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':listingPhotoId')
  update(
    @Param() { listingPhotoId }: GetListingPhotoParamsDTO,
    @Body() data: UpdateListingPhotoDTO,
  ): Promise<{ message: string }> {
    return this.service.update(listingPhotoId, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':listingId')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(
    @Param() { listingPhotoId }: GetListingPhotoParamsDTO,
  ): Promise<{ message: string }> {
    return this.service.delete(listingPhotoId);
  }
}
