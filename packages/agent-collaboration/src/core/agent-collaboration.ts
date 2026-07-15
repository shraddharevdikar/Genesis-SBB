import { CollaborationId } from '../identity/collaboration-id.js';
import { WorkspaceId } from '../identity/workspace-id.js';
import { CollaborationContext } from './collaboration-context.js';
import { CollaborationSession } from './collaboration-session.js';
import { ParticipantAssignment } from '../teams/participant-assignment.js';
import { WorkAllocation } from '../coordination/work-allocation.js';
import { SharedDecision } from '../decision/shared-decision.js';

export interface AgentCollaboration {
  /**
   * Spawns a structured multi-agent collaboration session with initial workspace constraints and context.
   */
  startCollaboration(
    tenantId: string,
    initialWorkspaceId: WorkspaceId,
    context: CollaborationContext
  ): Promise<CollaborationSession>;

  /**
   * Adds a digital employee or human supervisor participant to the active collaboration team.
   */
  addParticipant(
    tenantId: string,
    collaborationId: CollaborationId,
    assignment: ParticipantAssignment,
    context: CollaborationContext
  ): Promise<ParticipantAssignment>;

  /**
   * Declares role assignments and allocated responsibilities to specific participants.
   */
  assignResponsibility(
    tenantId: string,
    collaborationId: CollaborationId,
    assignmentId: string,
    responsibilityDescription: string,
    context: CollaborationContext
  ): Promise<ParticipantAssignment>;

  /**
   * Dynamically tracks synchronization events, locks milestones, and schedules work allocations.
   */
  coordinateWork(
    tenantId: string,
    collaborationId: CollaborationId,
    allocation: WorkAllocation,
    context: CollaborationContext
  ): Promise<WorkAllocation>;

  /**
   * Evaluates split consensus branches or high-severity priority conflicts, escalating to human supervisors if needed.
   */
  resolveConflict(
    tenantId: string,
    collaborationId: CollaborationId,
    conflictId: string,
    decision: SharedDecision,
    context: CollaborationContext
  ): Promise<SharedDecision>;

  /**
   * Finalizes the workspace, committing all shared memory refs, archiving outcomes, and releasing session leases.
   */
  completeCollaboration(
    tenantId: string,
    collaborationId: CollaborationId,
    context: CollaborationContext
  ): Promise<void>;
}
