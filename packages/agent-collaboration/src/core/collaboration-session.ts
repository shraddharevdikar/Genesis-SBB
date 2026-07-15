import { CollaborationId } from '../identity/collaboration-id.js';
import { WorkspaceId } from '../identity/workspace-id.js';

export type CollaborationSessionState = 'ESTABLISHED' | 'ACTIVE' | 'SYNCHRONIZING' | 'COMPLETED' | 'SUSPENDED';

export interface CollaborationSession {
  readonly sessionId: string;
  readonly collaborationId: CollaborationId;
  readonly tenantId: string;
  readonly activeWorkspaceId: WorkspaceId;
  readonly state: CollaborationSessionState;
  readonly activeLeaseDurationMs: number;
  readonly establishedAt: Date;
  readonly expiresAt: Date;
}
