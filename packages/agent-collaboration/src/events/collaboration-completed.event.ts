import { CollaborationId } from '../identity/collaboration-id.js';

export interface CollaborationCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly collaborationId: CollaborationId;
  readonly finalStatus: 'SUCCESS' | 'CANCELLED' | 'SUSPENDED';
  readonly savedSbbManHoursEstimated: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
