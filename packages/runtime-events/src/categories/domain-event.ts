import { EventId } from '../identity/event-id.js';

export interface DomainEvent {
  readonly domainEventId: string;
  readonly eventId: EventId;
  readonly boundedContextName: string; // e.g. "TaskEngine", "ApprovalEngine"
  readonly aggregateId: string; // e.g. taskInstanceId, workflowId
  readonly aggregateType: string; // e.g. "Task", "Workflow"
  readonly eventAction: 'CREATED' | 'UPDATED' | 'DELETED' | 'STATE_TRANSITIONED';
  readonly changedAttributes: string[];
}
