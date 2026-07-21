import { Milestone } from '../projects/milestone.js';
import { ServicesContext } from '../core/services-context.js';

export interface MilestoneCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'MILESTONE_COMPLETED';
  readonly payload: {
    readonly milestoneRecord: Milestone;
    readonly billingRequestedFlag: boolean;
    readonly verificationDocumentUrl?: string;
  };
  readonly context: ServicesContext;
}
