import { Engagement } from '../clients/engagement.js';
import { ServicesContext } from '../core/services-context.js';

export interface EngagementClosedEvent {
  readonly eventId: string;
  readonly eventName: 'ENGAGEMENT_CLOSED';
  readonly payload: {
    readonly engagementRecord: Engagement;
    readonly finalAmountBilledDecimal: number;
    readonly totalConsultingHoursDeliveredDecimal: number;
    readonly finalClientCsatScoreDecimal?: number;
  };
  readonly context: ServicesContext;
}
