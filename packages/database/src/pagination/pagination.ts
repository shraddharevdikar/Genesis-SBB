import { PaginationRequest } from '@sbb/shared';

export interface CursorPaginationRequest extends Omit<PaginationRequest, 'page'> {
  cursor?: string;
  take: number;
}

export interface CursorPaginationResponse<T> {
  data: T[];
  nextCursor?: string;
  hasMore: boolean;
}

/**
 * Normalizes standard pagination parameters for clean, direct integration with Prisma findMany queries.
 */
export function buildOffsetParams(pagination: PaginationRequest) {
  const page = pagination.page && pagination.page > 0 ? pagination.page : 1;
  const limit = pagination.limit && pagination.limit > 0 ? pagination.limit : 10;
  const skip = (page - 1) * limit;

  return {
    skip,
    take: limit,
    orderBy: pagination.sortBy
      ? { [pagination.sortBy]: pagination.sortDirection || 'asc' }
      : undefined,
  };
}
