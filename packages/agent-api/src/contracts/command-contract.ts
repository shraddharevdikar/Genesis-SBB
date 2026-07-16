import { ApiRequestId } from '../identity/api-request-id.js';

export interface CommandContract {
  readonly requestId: ApiRequestId;
  readonly commandTypeCode: string; // e.g. "TriggerPlanStepExecution"
  readonly executingTargetId: string;
  readonly parametersPayloadJson: string;
  readonly priorityValue: 'LOW' | 'NORMAL' | 'HIGH' | 'CRITICAL';
  readonly expiresAt?: Date;
}
