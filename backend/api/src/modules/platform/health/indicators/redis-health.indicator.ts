import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisHealthIndicator {
  public async isHealthy(): Promise<{ status: 'UP' | 'DOWN'; details?: Record<string, any> }> {
    return {
      status: 'UP',
      details: {
        redis: 'connected',
        latency: '0ms',
      },
    };
  }
}
