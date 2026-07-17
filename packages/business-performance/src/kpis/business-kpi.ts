import { KpiId } from '../identity/kpi-id.js';
import { MetricId } from '../identity/metric-id.js';

export type KpiClassificationCode =
  | 'ENTERPRISE_BUSINESS'
  | 'DEPARTMENTAL'
  | 'ROLE_PERFORMANCE'
  | 'PROCESS_FLOW'
  | 'WORKFLOW_FLOW'
  | 'AI_WORKFORCE_EFFICIENCY';

export interface BusinessKpi {
  readonly kpiId: KpiId;
  readonly uniqueKpiCode: string; // e.g. "KPI-ENT-REV-Q3"
  readonly displayName: string;
  readonly classification: KpiClassificationCode;
  readonly targetMetricId: MetricId;
  readonly currentMeasuredValue: number;
  readonly minimumTargetValue: number;
  readonly acceptableRangeMaximumWarningThreshold: number;
  readonly criticalViolationThreshold: number;
  readonly isUnderViolatedThreshold: boolean;
}
