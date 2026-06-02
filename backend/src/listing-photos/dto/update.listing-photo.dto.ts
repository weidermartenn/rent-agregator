import { PartialType } from '@nestjs/mapped-types';
import { CreateListingPhotoDTO } from './create.listing-photo.dto';

export class UpdateListingPhotoDTO extends PartialType(CreateListingPhotoDTO) {}
