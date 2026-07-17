import { BusinessKpi } from './business-kpi.js';
import { WorkflowId } from '@sbb/business-workflows';

export interface WorkflowKpi {
  readonly baseKpi: BusinessKpi;
  readonly targetWorkflowId: WorkflowId;
  readonly averageCycleTimeMinutesTarget: number;
  readonly slaComplianceRatioMinimumTarget: number; // e.g. 0.95
}
