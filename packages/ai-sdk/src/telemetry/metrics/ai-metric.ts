import { TelemetryContext } from '../tracking/telemetry-context.js';

export interface AIMetric {
  readonly metricId: string;
  readonly name: string;
  readonly value: number;
  readonly context: TelemetryContext;
  readonly timestamp: Date;
}
