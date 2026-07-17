import { ProcessId } from '../identity/process-id.js';

export interface ProcessHealth {
  readonly healthAuditId: string;
  readonly processId: ProcessId;
  readonly complianceConformanceScoreRating: number; // e.g. 0.0 - 1.0
  readonly bottleneckCountSeverityIndex: number; // e.g. 0 to 10
  readonly overallProcessEfficiencyRatio: number; // e.g. 0.0 - 1.0
  readonly lastEvaluatedAt: Date;
}
