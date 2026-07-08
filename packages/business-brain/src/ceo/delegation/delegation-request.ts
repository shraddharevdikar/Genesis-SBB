import { ExecutiveRole } from '../../core/contracts/executive-role.js';
import { ExecutiveContext } from '../../core/contracts/executive-context.js';

export interface DelegationRequest {
  readonly delegationId: string;
  readonly context: ExecutiveContext;
  readonly assignee: ExecutiveRole.CFO | ExecutiveRole.COO | ExecutiveRole.CTO | ExecutiveRole.CMO | ExecutiveRole.CRO | ExecutiveRole.CHRO;
  readonly taskDescription: string;
  readonly outcomeCriteria: string[];
  readonly deadline: Date;
  readonly resourcesAllocatedUSD?: number;
}
