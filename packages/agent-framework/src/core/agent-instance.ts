import { AgentId } from '../identity/agent-id.js';
import { AgentStatus } from '../health/agent-status.js';
import { Capability } from '../capabilities/capability.js';
import { Skill } from '../skills/skill.js';

export interface AgentInstance {
  readonly instanceId: string;
  readonly agentId: AgentId;
  readonly tenantId: string;
  readonly status: AgentStatus;
  readonly activeCapabilities: Capability[];
  readonly acquiredSkills: Skill[];
  readonly deployedAt: Date;
  readonly lastHeartbeatAt: Date;
}
