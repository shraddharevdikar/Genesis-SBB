import { Injectable, Logger } from '@nestjs/common';
import { IDeliveryMetrics } from './interfaces/notification.interface.js';

@Injectable()
export class DeliveryTrackerService {
  private readonly logger = new Logger(DeliveryTrackerService.name);

  private totalSent = 0;
  private totalDelivered = 0;
  private totalFailed = 0;
  private totalRetried = 0;
  private latencies: number[] = [];

  recordSent(): void {
    this.totalSent++;
  }

  recordDelivered(latencyMs?: number): void {
    this.totalDelivered++;
    if (typeof latencyMs === 'number' && latencyMs >= 0) {
      this.latencies.push(latencyMs);
      if (this.latencies.length > 1000) {
        this.latencies.shift(); // Keep moving window
      }
    }
  }

  recordFailed(): void {
    this.totalFailed++;
  }

  recordRetry(): void {
    this.totalRetried++;
  }

  getMetrics(currentQueueSize: number = 0): IDeliveryMetrics {
    const avgLatency =
      this.latencies.length > 0
        ? Math.round(this.latencies.reduce((a, b) => a + b, 0) / this.latencies.length)
        : 0;

    const processedTotal = this.totalDelivered + this.totalFailed;
    const successRate = processedTotal > 0 ? Number(((this.totalDelivered / processedTotal) * 100).toFixed(2)) : 100;
    const failureRate = processedTotal > 0 ? Number(((this.totalFailed / processedTotal) * 100).toFixed(2)) : 0;

    return {
      totalSent: this.totalSent,
      totalDelivered: this.totalDelivered,
      totalFailed: this.totalFailed,
      totalRetried: this.totalRetried,
      averageLatencyMs: avgLatency,
      queueSize: currentQueueSize,
      successRate,
      failureRate,
    };
  }
}
