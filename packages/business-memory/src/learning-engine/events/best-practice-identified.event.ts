import { BestPractice } from '../recommendations/best-practice.js';

export interface BestPracticeIdentifiedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly bestPractice: BestPractice;
  readonly identifiedByRoleId: string;
  readonly timestamp: Date;
}
