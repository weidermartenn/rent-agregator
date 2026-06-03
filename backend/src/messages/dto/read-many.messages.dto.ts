import { ReadMessageDTO } from './read.message.dto';

export class ReadManyMessagesDTO {
  count!: number;
  data!: ReadMessageDTO[];
}
