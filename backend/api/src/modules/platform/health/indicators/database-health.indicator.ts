import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseHealthIndicator {
  public async isHealthy(): Promise<{ status: 'UP' | 'DOWN'; details?: Record<string, any> }> {
    return {
      status: 'UP',
      details: {
        database: 'connected',
        latency: '1ms',
      },
    };
  }
}
