import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'info', 'warn', 'error'],
    });
  }

  async onModuleInit(): Promise<void> {
    await this.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.disconnect();
  }

  /**
   * Connect to the database.
   */
  async connect(): Promise<void> {
    await this.$connect();
  }

  /**
   * Disconnect from the database.
   */
  async disconnect(): Promise<void> {
    await this.$disconnect();
  }

  /**
   * Simple health check that executes a light probe query.
   */
  async health(): Promise<boolean> {
    try {
      await this.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Database health check failed:', error);
      return false;
    }
  }

  /**
   * Wrap operations inside a transaction.
   */
  async transaction<T>(fn: (prisma: any) => Promise<T>): Promise<T> {
    return this.$transaction(fn) as unknown as Promise<T>;
  }
}
