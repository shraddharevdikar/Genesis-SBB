import { Controller, Get } from '@nestjs/common';
import { DatabaseHealthIndicator } from './indicators/database-health.indicator.js';
import { RedisHealthIndicator } from './indicators/redis-health.indicator.js';
import { AIProviderHealthIndicator } from './indicators/ai-provider-health.indicator.js';
import { QueueHealthIndicator } from './indicators/queue-health.indicator.js';
import { StorageHealthIndicator } from './indicators/storage-health.indicator.js';

@Controller('health')
export class HealthController {
  constructor(
    private readonly dbHealth: DatabaseHealthIndicator,
    private readonly redisHealth: RedisHealthIndicator,
    private readonly aiHealth: AIProviderHealthIndicator,
    private readonly queueHealth: QueueHealthIndicator,
    private readonly storageHealth: StorageHealthIndicator,
  ) {}

  @Get()
  public async getHealth(): Promise<Record<string, any>> {
    const db = await this.dbHealth.isHealthy();
    const redis = await this.redisHealth.isHealthy();
    const ai = await this.aiHealth.isHealthy();
    const queue = await this.queueHealth.isHealthy();
    const storage = await this.storageHealth.isHealthy();

    const overallStatus =
      db.status === 'UP' &&
      redis.status === 'UP' &&
      ai.status === 'UP' &&
      queue.status === 'UP' &&
      storage.status === 'UP'
        ? 'UP'
        : 'DOWN';

    return {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      services: {
        database: db,
        redis,
        aiProvider: ai,
        queue,
        storage,
      },
    };
  }

  @Get('ready')
  public getReady(): Record<string, any> {
    return {
      status: 'READY',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('live')
  public getLive(): Record<string, any> {
    return {
      status: 'LIVE',
      timestamp: new Date().toISOString(),
    };
  }
}
