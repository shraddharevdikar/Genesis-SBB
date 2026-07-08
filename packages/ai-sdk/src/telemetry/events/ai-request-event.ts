import { TelemetryContext } from '../tracking/telemetry-context.js';

export interface AIRequestStartedEvent {
  readonly eventId: string;
  readonly eventType: 'request.started';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
}

export interface AIRequestCompletedEvent {
  readonly eventId: string;
  readonly eventType: 'request.completed';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly durationMs: number;
}

export interface AIRequestFailedEvent {
  readonly eventId: string;
  readonly eventType: 'request.failed';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly error: string;
  readonly durationMs: number;
}
