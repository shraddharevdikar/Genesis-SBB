import { ExecutiveContext } from './executive-context.js';

export interface CommandCenterStatus {
  readonly statusId: string;
  readonly overallHealthIndexDecimal: number; // e.g. 0.92 (92% health score)
  readonly activeStrategicInitiativeCount: number;
  readonly activeAlertCount: number;
  readonly financialPerformanceScoreRatioDecimal: number;
  readonly operationalEfficiencyScoreRatioDecimal: number;
  readonly legalAndRiskComplianceScoreRatioDecimal: number;
  readonly talentHealthScoreRatioDecimal: number;
  readonly measuredAt: Date;
}

export interface EnterpriseCommandCenter {
  readonly centerId: string;
  readonly uniqueCenterCode: string; // e.g. "ECC-SBB-GLOBAL"
  readonly displayName: string;
  readonly associatedTenantId: string;
  readonly connectedOperatingSystemsList: string[]; // e.g. ["FINANCE_OS", "HR_OS", "OPERATIONS_OS", "LEGAL_OS"]
  readonly lastMonitoredAt: Date;
  readonly activeStatus: CommandCenterStatus;
}
