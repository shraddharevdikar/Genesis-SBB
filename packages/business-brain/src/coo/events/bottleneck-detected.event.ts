import { BottleneckAnalysis } from '../workflow/bottleneck-analysis.js';

export interface BottleneckDetectedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly bottleneck: BottleneckAnalysis;
  readonly processName: string;
  readonly detectedAt: Date;
}
