import { AutomationId } from '../identity/automation-id.js';

export type ExecutionStatusCode =
  | 'QUEUED'
  | 'RUNNING'
  | 'COMPLETED_SUCCESS'
  | 'COMPLETED_PARTIAL_WARNING'
  | 'FAILED'
  | 'HALTED_SAFETY_LIMIT';

export interface AutomationExecution {
  readonly executionId: string;
  readonly associatedAutomationId: AutomationId;
  readonly triggerCorrelationId: string; // link to origin trigger event
  readonly activeStatus: ExecutionStatusCode;
  readonly activeStepIndexNumber: number;
  readonly errorMessageText?: string;
  readonly executionDurationMsCount: number;
  readonly startedAt: Date;
  readonly completedAt?: Date;
}
