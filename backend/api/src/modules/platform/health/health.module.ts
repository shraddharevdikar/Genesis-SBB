import { Module } from '@nestjs/common';
import { HealthController } from './health.controller.js';
import { DatabaseHealthIndicator } from './indicators/database-health.indicator.js';
import { RedisHealthIndicator } from './indicators/redis-health.indicator.js';
import { AIProviderHealthIndicator } from './indicators/ai-provider-health.indicator.js';
import { QueueHealthIndicator } from './indicators/queue-health.indicator.js';
import { StorageHealthIndicator } from './indicators/storage-health.indicator.js';

@Module({
  controllers: [HealthController],
  providers: [
    DatabaseHealthIndicator,
    RedisHealthIndicator,
    AIProviderHealthIndicator,
    QueueHealthIndicator,
    StorageHealthIndicator,
  ],
  exports: [
    DatabaseHealthIndicator,
    RedisHealthIndicator,
    AIProviderHealthIndicator,
    QueueHealthIndicator,
    StorageHealthIndicator,
  ],
})
export class HealthModule {}
