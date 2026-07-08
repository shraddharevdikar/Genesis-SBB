import { TelemetryContext } from '../tracking/telemetry-context.js';

export interface AIResponseStreamStartedEvent {
  readonly eventId: string;
  readonly eventType: 'response.stream_started';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
}

export interface AIResponseStreamCompletedEvent {
  readonly eventId: string;
  readonly eventType: 'response.stream_completed';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly durationMs: number;
  readonly totalChunks: number;
}
