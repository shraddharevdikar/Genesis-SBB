import { ResourcePlan } from '../resources/resource-plan.js';
import { ExecutionPlan } from '../execution/execution-plan.js';
import { DeliveryStatus } from '../delivery/delivery-status.js';

export interface OperationalRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly expectedThroughputImpactPercent: number;
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly suggestions: string[];
}

export interface ExecutionRecommendation {
  readonly recommendationId: string;
  readonly targetPlan: ExecutionPlan;
  readonly proposedStageAdjustments: {
    readonly stageId: string;
    readonly delayOrAdvanceDays: number;
    readonly sequenceChangeDescription?: string;
  }[];
  readonly criticalPathMitigation: string;
}

export interface CapacityRecommendation {
  readonly recommendationId: string;
  readonly targetPlan: ResourcePlan;
  readonly reallocations: {
    readonly sourceTeam: string;
    readonly targetTeam: string;
    readonly fteCount: number;
    readonly justification: string;
  }[];
}

export interface DeliverySummary {
  readonly summaryId: string;
  readonly currentActiveInitiatives: DeliveryStatus[];
  readonly aggregateMilestoneSlippageDays: number;
  readonly highestRiskBlockers: string[];
  readonly recommendations: string[];
}
