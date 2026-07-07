import { AIRequest } from '../gateway/ai-request.js';
import { TokenUsage } from '../cost/token-usage.js';

export interface TelemetryEvent {
  readonly id: string;
  readonly requestId: string;
  readonly model: string;
  readonly provider: string;
  readonly durationMs: number;
  readonly usage?: TokenUsage;
  readonly timestamp: Date;
  readonly success: boolean;
  readonly errorMsg?: string;
}

export class AITelemetry {
  private readonly events: TelemetryEvent[] = [];

  public trackSuccess(
    request: AIRequest,
    provider: string,
    model: string,
    durationMs: number,
    usage?: TokenUsage
  ): void {
    const event: TelemetryEvent = {
      id: Math.random().toString(36).substring(7),
      requestId: request.id,
      model,
      provider,
      durationMs,
      usage,
      timestamp: new Date(),
      success: true,
    };
    this.events.push(event);
  }

  public trackFailure(
    request: AIRequest,
    provider: string,
    model: string,
    durationMs: number,
    error: Error
  ): void {
    const event: TelemetryEvent = {
      id: Math.random().toString(36).substring(7),
      requestId: request.id,
      model,
      provider,
      durationMs,
      timestamp: new Date(),
      success: false,
      errorMsg: error.message,
    };
    this.events.push(event);
  }

  public getEvents(): TelemetryEvent[] {
    return [...this.events];
  }

  public clear(): void {
    this.events.length = 0;
  }
}
