import { SortDirection } from '../common/index.js';

/**
 * Standard parameters for querying lists with pagination.
 */
export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortDirection?: SortDirection;
}

/**
 * Metadata returning information about the current page and pagination boundaries.
 */
export interface PaginationMetadata {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Standard API envelope for list responses containing pagination details.
 */
export interface ApiPaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: PaginationMetadata;
  timestamp: string;
}

/**
 * Standard API envelope for single resource responses.
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

/**
 * Detailed error context payload structure.
 */
export interface ApiErrorDetails {
  code: string;
  message: string;
  field?: string;
  helpUrl?: string;
}

/**
 * Standard API error response envelope.
 */
export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: ApiErrorDetails[];
  };
  timestamp: string;
}
