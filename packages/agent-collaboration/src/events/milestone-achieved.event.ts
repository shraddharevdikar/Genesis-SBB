import { CollaborationId } from '../identity/collaboration-id.js';

export interface MilestoneAchievedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly collaborationId: CollaborationId;
  readonly milestoneId: string;
  readonly title: string;
  readonly completedByParticipantId?: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
