import { FeedbackRecord } from './feedback-record.js';

export interface HumanFeedback extends FeedbackRecord {
  readonly source: 'HUMAN' | 'CUSTOMER';
  readonly supervisorRoleCode?: string; // SBB role code (e.g. SBB_SAFETY_SUPERVISOR)
  readonly explicitCorrectionsJson?: string; // Optional structured corrections (e.g. target paths)
  readonly hasHumanOverrideOccurred: boolean;
}
