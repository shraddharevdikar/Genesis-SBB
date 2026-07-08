import { TelemetryContext } from './telemetry-context.js';
import { AIMetric } from '../metrics/ai-metric.js';
import { UserFeedback } from '../feedback/user-feedback.js';

export interface TelemetryRecorder {
  recordEvent(eventType: string, context: TelemetryContext, payload?: any): void;
  recordMetric(metric: AIMetric): void;
  recordFeedback(context: TelemetryContext, feedback: UserFeedback): void;
}

export class DefaultTelemetryRecorder implements TelemetryRecorder {
  private readonly events: Array<{ eventType: string; context: TelemetryContext; payload?: any; timestamp: Date }> = [];
  private readonly metrics: AIMetric[] = [];
  private readonly feedbackList: Array<{ context: TelemetryContext; feedback: UserFeedback }> = [];

  public recordEvent(eventType: string, context: TelemetryContext, payload?: any): void {
    this.events.push({
      eventType,
      context,
      payload,
      timestamp: new Date(),
    });
  }

  public recordMetric(metric: AIMetric): void {
    this.metrics.push(metric);
  }

  public recordFeedback(context: TelemetryContext, feedback: UserFeedback): void {
    this.feedbackList.push({ context, feedback });
  }

  public getEvents() {
    return [...this.events];
  }

  public getMetrics() {
    return [...this.metrics];
  }

  public getFeedback() {
    return [...this.feedbackList];
  }
}
