import { RoleKpi } from './role-kpi.js';
import { SuccessMeasure } from './success-measure.js';

export interface PerformanceProfile {
  readonly profileId: string;
  readonly roleCode: string;
  readonly activeKpisList: RoleKpi[];
  readonly qualitativeMeasuresList: SuccessMeasure[];
  readonly targetOperatingEfficiencyRatio: number; // e.g. 0.95
}
