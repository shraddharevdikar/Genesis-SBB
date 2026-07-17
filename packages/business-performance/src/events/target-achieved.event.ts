import { ObjectiveId } from '../identity/objective-id.js';
import { KeyResultId } from '../identity/key-result-id.js';

export interface TargetAchievedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly objectiveId: ObjectiveId;
  readonly keyResultId: KeyResultId;
  readonly achievedNumericValue: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
