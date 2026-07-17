import { ObjectiveId } from '../identity/objective-id.js';

export interface ObjectiveCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly objectiveId: ObjectiveId;
  readonly uniqueObjectiveCode: string;
  readonly classificationCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
