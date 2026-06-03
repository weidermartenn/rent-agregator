import { ViewingRequest } from '@/generated/prisma';
import {
  ReadManyViewingRequestsDTO,
  ReadViewingRequestDTO,
} from '@/viewing-request/dto';

export class ReadViewingRequestsMapper {
  public mapOne(viewingRequest: ViewingRequest): ReadViewingRequestDTO {
    return {
      id: viewingRequest.id,
      listingId: viewingRequest.listingId,
      tenantId: viewingRequest.tenantId,
      status: viewingRequest.status,
      message: viewingRequest.message,
      requestedAt: viewingRequest.requestedAt,
    };
  }

  public mapAll(
    data: ViewingRequest[],
    count: number,
  ): ReadManyViewingRequestsDTO {
    return {
      count,
      data: data.map((one) => this.mapOne(one)),
    };
  }
}
