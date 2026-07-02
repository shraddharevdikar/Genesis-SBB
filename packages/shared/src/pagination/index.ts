export interface PaginationRequest {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface PageInfo {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationResponse<T> {
  data: T[];
  meta: PageInfo;
}

export function createPageInfo(
  totalItems: number,
  currentPage: number,
  limit: number,
  itemCount: number
): PageInfo {
  const totalPages = Math.ceil(totalItems / limit) || 1;
  return {
    totalItems,
    itemCount,
    itemsPerPage: limit,
    totalPages,
    currentPage,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}
