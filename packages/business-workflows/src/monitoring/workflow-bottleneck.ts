import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface CongestedStepDetails {
  readonly congestedStepId: WorkflowStepId;
  readonly averageWaitQueueDurationMinutes: number;
  readonly averageProcessingDurationMinutes: number;
  readonly congestionImpactSeverityIndex: number; // e.g. 1 to 10
}

export interface WorkflowBottleneck {
  readonly bottleneckAnalysisId: string;
  readonly workflowId: WorkflowId;
  readonly identifiedCongestedStepsList: CongestedStepDetails[];
  readonly coreLimitingFactorExplanationText: string; // text explanation of the issue
  readonly automatedOptimizationRecommendationMarkdownText: string;
  readonly calculatedAt: Date;
}
