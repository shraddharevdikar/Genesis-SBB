import { ObservationId } from '../identity/observation-id.js';

export interface WorkflowObservation {
  readonly observationId: ObservationId;
  readonly tenantId: string;
  readonly planId: string;
  readonly overallProgressPercent: number; // 0.0 - 100.0
  readonly countOfCompletedSteps: number;
  readonly countOfTotalSteps: number;
  readonly activeStepIndexNumber: number;
  readonly averageStepExecutionTimeMs: number;
  readonly hasBottlenecksDetected: boolean;
  readonly bottleneckStepIdsList: string[];
  readonly lastUpdatedAt: Date;
}
