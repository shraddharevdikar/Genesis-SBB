import { ObjectiveId } from '../identity/objective-id.js';

export interface ObjectiveRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredObjectiveId: ObjectiveId;
  readonly uniqueObjectiveCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
