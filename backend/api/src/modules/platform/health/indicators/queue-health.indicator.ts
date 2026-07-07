import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueHealthIndicator {
  public async isHealthy(): Promise<{ status: 'UP' | 'DOWN'; details?: Record<string, any> }> {
    return {
      status: 'UP',
      details: {
        queue: 'active',
        pendingMessages: 0,
      },
    };
  }
}
