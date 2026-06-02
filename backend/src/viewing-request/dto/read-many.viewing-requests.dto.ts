import { ReadViewingRequestDTO } from './read.viewing-request.dto';

export class ReadManyViewingRequestsDTO {
  count!: number;
  data!: ReadViewingRequestDTO[];
}
