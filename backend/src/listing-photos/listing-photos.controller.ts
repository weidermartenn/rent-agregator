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
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ListingPhotosService } from './listing-photos.service';
import { ReadManyListingPhotosDTO, UpdateListingPhotoDTO } from './dto';
import type { MulterFile } from '@/storage';

@Controller('listings/:listingId/photos')
export class ListingPhotosController {
  constructor(private readonly service: ListingPhotosService) {}

  @Get()
  getListingPhotos(
    @Param('listingId') listingId: string,
  ): Promise<ReadManyListingPhotosDTO> {
    return this.service.getListingPhotos(listingId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadPhoto(
    @Param('listingId') listingId: string,
    @UploadedFile() file: MulterFile,
  ): Promise<{ message: string }> {
    return this.service.uploadPhoto(listingId, file);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':photoId')
  update(
    @Param('photoId') listingPhotoId: string,
    @Body() data: UpdateListingPhotoDTO,
  ): Promise<{ message: string }> {
    return this.service.update(listingPhotoId, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':photoId')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('photoId') photoId: string): Promise<{ message: string }> {
    return this.service.delete(photoId);
  }
}
