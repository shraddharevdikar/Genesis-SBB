import { TelemetryContext } from '../tracking/telemetry-context.js';

export interface ProviderSelectedEvent {
  readonly eventId: string;
  readonly eventType: 'routing.provider_selected';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly strategy: string;
  readonly latencyMs?: number;
}

export interface PromptSelectedEvent {
  readonly eventId: string;
  readonly eventType: 'routing.prompt_selected';
  readonly timestamp: Date;
  readonly context: TelemetryContext;
  readonly promptId: string;
  readonly version: string;
}
