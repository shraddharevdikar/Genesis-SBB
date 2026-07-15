import { AgentId } from '../identity/agent-id.js';
import { AgentRole } from '../roles/agent-role.js';
import { MemoryProfile } from '../memory/memory-profile.js';
import { KnowledgeProfile } from '../knowledge/knowledge-profile.js';
import { GovernanceProfile } from '../governance/governance-profile.js';
import { PermissionProfile } from '../permissions/permission-profile.js';

export interface AgentDefinition {
  readonly agentId: AgentId;
  readonly tenantId: string;
  readonly name: string; // e.g. "Clara the Cash Auditor"
  readonly role: AgentRole;
  readonly memoryProfile: MemoryProfile;
  readonly knowledgeProfile: KnowledgeProfile;
  readonly governanceProfile: GovernanceProfile;
  readonly permissionProfile: PermissionProfile;
  readonly createdAt: Date;
  readonly currentVersionNumber: string;
}
