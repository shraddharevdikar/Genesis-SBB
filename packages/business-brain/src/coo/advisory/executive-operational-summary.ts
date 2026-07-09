import { OperationalHealth } from '../operations/operational-health.js';
import { OperationalRisk } from '../risk/operational-risk.js';
import {
  OperationalRecommendation,
  ExecutionRecommendation,
  CapacityRecommendation,
  DeliverySummary
} from './operational-recommendation.js';

export interface ExecutiveOperationalSummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly overallHealth: OperationalHealth;
  readonly activeRisks: OperationalRisk[];
  readonly operationalRecommendations: OperationalRecommendation[];
  readonly executionRecommendations: ExecutionRecommendation[];
  readonly capacityRecommendations: CapacityRecommendation[];
  readonly deliverySummary: DeliverySummary;
  readonly generatedBy: string; // COO Brain identifier
  readonly compiledAt: Date;
}
