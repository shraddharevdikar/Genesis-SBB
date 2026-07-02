import { PageInfo } from '../pagination/index.js';

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  meta?: PageInfo;
  errors?: Array<{
    field?: string;
    message: string;
    code?: string;
  }>;
}

export function createSuccessResponse<T>(data: T, message?: string, meta?: PageInfo): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
    meta,
  };
}

export function createErrorResponse(message: string, errors?: Array<{ field?: string; message: string; code?: string }>): ApiResponse<never> {
  return {
    success: false,
    message,
    errors,
  };
}
