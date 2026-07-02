export interface BaseFilter {
  search?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  status?: string;
  isDeleted?: boolean;
}

/**
 * Helper to translate standard application filters into Prisma-friendly `where` criteria clauses.
 */
export function buildQueryFilters(filter: BaseFilter): Record<string, any> {
  const where: Record<string, any> = {};

  if (filter.status) {
    where.status = filter.status;
  }

  if (filter.isDeleted !== undefined) {
    where.isDeleted = filter.isDeleted;
  }

  if (filter.startDate || filter.endDate) {
    where.createdAt = {};
    if (filter.startDate) {
      where.createdAt.gte = new Date(filter.startDate);
    }
    if (filter.endDate) {
      where.createdAt.lte = new Date(filter.endDate);
    }
  }

  return where;
}
export interface FieldFilterOperator<T> {
  equals?: T;
  in?: T[];
  notIn?: T[];
  lt?: T;
  lte?: T;
  gt?: T;
  gte?: T;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
}
