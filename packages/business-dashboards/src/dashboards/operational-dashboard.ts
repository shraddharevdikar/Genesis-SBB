import { BusinessDashboard } from './business-dashboard.js';

export interface OperationalDashboard extends BusinessDashboard {
  readonly activeWorkflowProcessIdString?: string; // e.g. "PROC-PROCUREMENT"
  readonly realTimeSlaThresholdMinutesCount: number; // e.g. 5 minutes alert loop
  readonly autoRefreshIntervalSecondsCount: number; // e.g. 30 seconds
  readonly supportsDesktopDualMonitorDisplay: boolean;
}
