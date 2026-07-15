import { WorkspaceId } from '../identity/workspace-id.js';
import { CollaborationId } from '../identity/collaboration-id.js';
import { SharedObjective } from '../objectives/shared-objective.js';
import { SharedArtifact } from '../knowledge/shared-artifact.js';

export interface CollaborationWorkspace {
  readonly workspaceId: WorkspaceId;
  readonly collaborationId: CollaborationId;
  readonly tenantId: string;
  readonly displayName: string;
  readonly activeObjectivesList: SharedObjective[];
  readonly sharedArtifactsList: SharedArtifact[];
  readonly lastSynchronizedAt: Date;
  readonly createdAt: Date;
}
