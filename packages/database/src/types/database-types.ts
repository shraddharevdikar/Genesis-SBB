import { Prisma } from '@prisma/client';

export type TransactionClient = Prisma.TransactionClient;

export interface QueryOptions {
  timeout?: number;
  throwOnError?: boolean;
}

export interface WriteOptions extends QueryOptions {
  softDelete?: boolean;
  userId?: string;
}

export type DbResult<T> = Promise<T>;
