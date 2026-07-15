import { CollaborationId } from '../identity/collaboration-id.js';

export interface ParticipantAddedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly collaborationId: CollaborationId;
  readonly participantId: string;
  readonly assignedRoleCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
