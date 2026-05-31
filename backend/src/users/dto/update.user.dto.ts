import { PartialType } from '@nestjs/mapped-types';
import { CompleteProfileDTO } from './complete-profile.dto';

export class UpdateUserDTO extends PartialType(CompleteProfileDTO) {}
