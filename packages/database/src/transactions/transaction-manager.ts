import { Prisma, PrismaClient } from '@prisma/client';
import { getPrismaClient } from '../client/prisma-client.js';

/**
 * Enterprise Transaction Manager wrapper for Prisma.
 * Enables services to execute transactional routines cleanly and securely.
 */
export class TransactionManager {
  constructor(private readonly prisma: PrismaClient = getPrismaClient()) {}

  /**
   * Runs the provided asynchronous function inside a standard Prisma transactional context.
   */
  public async run<T>(work: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(work);
  }

  /**
   * Runs the transactional operation with advanced options like timeouts or isolation settings.
   */
  public async runWithOptions<T>(
    work: (tx: Prisma.TransactionClient) => Promise<T>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): Promise<T> {
    return this.prisma.$transaction(work, options);
  }
}
