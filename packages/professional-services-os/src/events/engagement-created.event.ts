import { Engagement } from '../clients/engagement.js';
import { ServicesContext } from '../core/services-context.js';

export interface EngagementCreatedEvent {
  readonly eventId: string;
  readonly eventName: 'ENGAGEMENT_CREATED';
  readonly payload: {
    readonly engagementRecord: Engagement;
    readonly initialTotalContractValueAmount: number;
    readonly anticipatedKickoffDate: Date;
  };
  readonly context: ServicesContext;
}
