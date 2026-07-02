import { PaginationRequest, PaginationResponse } from '@sbb/shared';

export interface IRepository<T, ID = string, CreateInput = any, UpdateInput = any> {
  findById(id: ID): Promise<T | null>;
  findFirst(filters: any): Promise<T | null>;
  findMany(filters?: any): Promise<T[]>;
  findPaginated(
    filters: any,
    pagination: PaginationRequest
  ): Promise<PaginationResponse<T>>;
  create(data: CreateInput): Promise<T>;
  update(id: ID, data: UpdateInput): Promise<T>;
  delete(id: ID): Promise<T>;
  count(filters?: any): Promise<number>;
}
