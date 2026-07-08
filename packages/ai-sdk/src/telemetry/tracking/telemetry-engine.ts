import { TelemetryContext } from './telemetry-context.js';
import { AIMetric } from '../metrics/ai-metric.js';
import { UserFeedback } from '../feedback/user-feedback.js';
import { TelemetrySummary } from '../reports/telemetry-summary.js';

export interface TelemetryEngine {
  recordEvent(eventType: string, context: TelemetryContext, payload?: any): Promise<void>;
  recordMetric(metric: AIMetric): Promise<void>;
  recordFeedback(context: TelemetryContext, feedback: UserFeedback): Promise<void>;
  generateSummary(tenantId: string, startDate: Date, endDate: Date): Promise<TelemetrySummary>;
}

export class DefaultTelemetryEngine implements TelemetryEngine {
  private readonly events: Array<{ eventType: string; context: TelemetryContext; payload?: any; timestamp: Date }> = [];
  private readonly metrics: AIMetric[] = [];
  private readonly feedbackList: Array<{ context: TelemetryContext; feedback: UserFeedback }> = [];

  public async recordEvent(eventType: string, context: TelemetryContext, payload?: any): Promise<void> {
    this.events.push({
      eventType,
      context,
      payload,
      timestamp: new Date(),
    });
  }

  public async recordMetric(metric: AIMetric): Promise<void> {
    this.metrics.push(metric);
  }

  public async recordFeedback(context: TelemetryContext, feedback: UserFeedback): Promise<void> {
    this.feedbackList.push({ context, feedback });
  }

  public async generateSummary(tenantId: string, startDate: Date, endDate: Date): Promise<TelemetrySummary> {
    const filteredEvents = this.events.filter(e => 
      e.context.tenantId === tenantId && e.timestamp >= startDate && e.timestamp <= endDate
    );

    const requestCompletedCount = filteredEvents.filter(e => e.eventType === 'request.completed').length;
    const requestFailedCount = filteredEvents.filter(e => e.eventType === 'request.failed').length;
    const totalRequests = requestCompletedCount + requestFailedCount;
    const successRate = totalRequests > 0 ? requestCompletedCount / totalRequests : 1.0;

    return {
      tenantId,
      periodStart: startDate,
      periodEnd: endDate,
      totalRequests,
      successRate,
      totalCostUSD: 0,
      totalTokens: 0,
      providers: [],
      models: [],
      prompts: [],
      capabilities: [],
    };
  }
}
