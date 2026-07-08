import { TelemetryContext } from '../tracking/telemetry-context.js';

export interface AISession {
  readonly sessionId: string;
  readonly tenantId: string;
  readonly userId: string;
  readonly requestCount: number;
  readonly startedAt: Date;
  readonly lastActiveAt: Date;
  readonly contexts: TelemetryContext[];
}
