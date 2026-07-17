import { KpiId } from '../identity/kpi-id.js';
import { ObjectiveId } from '../identity/objective-id.js';

export interface KpiMapping {
  readonly mappingId: string;
  readonly kpiId: KpiId;
  readonly targetObjectiveId: ObjectiveId;
  readonly contributionWeightPercentage: number; // e.g. 0.0 - 100.0 (weight of KPI toward satisfying objective)
  readonly mapApprovedAt: Date;
}
