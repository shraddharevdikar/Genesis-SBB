import { ProcessId } from '../identity/process-id.js';
import { ProcessStageId } from '../identity/process-stage-id.js';

export interface StageAddedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly processId: ProcessId;
  readonly addedStageId: ProcessStageId;
  readonly stageSequenceIndex: number;
  readonly functionalPurposeCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
