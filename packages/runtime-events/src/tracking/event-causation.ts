import { CausationId } from '../identity/causation-id.js';
import { EventInstanceId } from '../identity/event-instance-id.js';

export interface EventCausation {
  readonly causationId: CausationId;
  readonly tenantId: string;
  readonly causeEventInstanceId: EventInstanceId; // The parent event
  readonly effectEventInstanceIds: EventInstanceId[]; // The children events produced
  readonly intermediateProcessor: string; // The service block in between (e.g., "WorkflowTaskStepExecutor")
  readonly elapsedMilliseconds: number;
}
