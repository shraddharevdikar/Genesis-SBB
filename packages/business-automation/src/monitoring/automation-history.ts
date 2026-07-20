import { AutomationExecution } from '../automation/automation-execution.js';

export interface AutomationHistory {
  readonly historyId: string;
  readonly targetAutomationIdString: string;
  readonly totalExecutedRunsCount: number;
  readonly recentRunsList: AutomationExecution[];
  readonly lastExecutionDate?: Date;
}
