import { HealthStatusType } from './agent-health.js';

export interface EnterpriseHealth {
  readonly enterpriseHealthId: string;
  readonly overallStatus: HealthStatusType;
  readonly affectedDepartmentIdsList: string[];
  readonly totalActiveTenantsCount: number;
  readonly totalDigitalEmployeesRunningCount: number;
  readonly globalSlaAdherencePercent: number; // overall percentage
  readonly unresolvedCriticalAlertsCount: number;
  readonly calculatedAt: Date;
}
