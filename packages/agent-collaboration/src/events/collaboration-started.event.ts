import { CollaborationId } from '../identity/collaboration-id.js';
import { WorkspaceId } from '../identity/workspace-id.js';

export interface CollaborationStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly collaborationId: CollaborationId;
  readonly workspaceId: WorkspaceId;
  readonly initialParticipantIdsList: string[];
  readonly traceId: string;
  readonly timestamp: Date;
}
