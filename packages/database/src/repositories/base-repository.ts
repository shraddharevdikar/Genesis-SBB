import { Prisma, PrismaClient } from '@prisma/client';
import { IRepository } from './repository.interface.js';
import { PaginationRequest, PaginationResponse, createPageInfo } from '@sbb/shared';

/**
 * Abstract base repository that maps generic model operations onto standard Prisma CRUD endpoints.
 * Supports executing within standard database transactions.
 */
export abstract class BaseRepository<T, ID = string, CreateInput = any, UpdateInput = any>
  implements IRepository<T, ID, CreateInput, UpdateInput>
{
  constructor(
    protected readonly prisma: PrismaClient | Prisma.TransactionClient,
    protected readonly modelName: string
  ) {}

  /**
   * Helper to resolve the model delegate from the prisma client context.
   */
  protected get model(): any {
    const delegate = (this.prisma as any)[this.modelName];
    if (!delegate) {
      throw new Error(`Prisma model delegate for '${this.modelName}' was not found on client.`);
    }
    return delegate;
  }

  public async findById(id: ID): Promise<T | null> {
    return this.model.findUnique({
      where: { id },
    });
  }

  public async findFirst(filters: any): Promise<T | null> {
    return this.model.findFirst({
      where: filters,
    });
  }

  public async findMany(filters?: any): Promise<T[]> {
    return this.model.findMany({
      where: filters,
    });
  }

  public async findPaginated(
    filters: any,
    pagination: PaginationRequest
  ): Promise<PaginationResponse<T>> {
    const page = pagination.page && pagination.page > 0 ? pagination.page : 1;
    const limit = pagination.limit && pagination.limit > 0 ? pagination.limit : 10;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.model.findMany({
        where: filters,
        skip,
        take: limit,
        orderBy: pagination.sortBy
          ? { [pagination.sortBy]: pagination.sortDirection || 'asc' }
          : undefined,
      }),
      this.count(filters),
    ]);

    const pageInfo = createPageInfo(total, page, limit, items.length);

    return {
      data: items,
      meta: pageInfo,
    };
  }

  public async create(data: CreateInput): Promise<T> {
    return this.model.create({
      data,
    });
  }

  public async update(id: ID, data: UpdateInput): Promise<T> {
    return this.model.update({
      where: { id },
      data,
    });
  }

  public async delete(id: ID): Promise<T> {
    return this.model.delete({
      where: { id },
    });
  }

  public async count(filters?: any): Promise<number> {
    return this.model.count({
      where: filters,
    });
  }
}
