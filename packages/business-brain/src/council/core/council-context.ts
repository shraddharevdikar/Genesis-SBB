import { CouncilRole } from '../participants/council-role.js';

export interface CouncilContext {
  readonly tenantId: string;
  readonly correlationId: string;
  readonly initiatedAt: Date;
  readonly initiatorId: string;
  readonly initiatorRole: CouncilRole;
  readonly sessionTopic: string;
  readonly metadata?: Record<string, any>;
}
