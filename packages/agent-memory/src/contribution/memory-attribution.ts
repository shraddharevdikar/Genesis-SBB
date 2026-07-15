import { AgentId } from '@sbb/agent-framework';

export interface MemoryAttribution {
  readonly attributionId: string;
  readonly creatorAgentId: AgentId;
  readonly creatorSessionId: string;
  readonly systemTraceId: string;
  readonly humanSupervisorRoleId?: string; // SBB Compliance/Operational manager who approved the transaction
  readonly timestamp: Date;
}
