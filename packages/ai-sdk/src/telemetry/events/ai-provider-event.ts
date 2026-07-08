import { TelemetryContext } from '../tracking/telemetry-context.js';

export interface SafetyPassedEvent {
  readonly eventId: string;
  readonly eventType: 'provider.safety_passed';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly scores: Record<string, number>;
}

export interface SafetyBlockedEvent {
  readonly eventId: string;
  readonly eventType: 'provider.safety_blocked';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly category: string;
  readonly score: number;
  readonly reason: string;
}
