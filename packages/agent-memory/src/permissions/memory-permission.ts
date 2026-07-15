import { AgentId } from '@sbb/agent-framework';

export interface MemoryPermission {
  readonly permissionId: string;
  readonly tenantId: string;
  readonly assignedAgentId: AgentId;
  readonly targetScopeCode: string; // scope hierarchy e.g. "SBB.INFRASTRUCTURE.TRACKS.*"
  readonly allowRead: boolean;
  readonly allowWrite: boolean;
  readonly allowDelete: boolean;
  readonly maxTransactionLeaseDurationMinutes: number;
  readonly lastValidatedAt: Date;
}
