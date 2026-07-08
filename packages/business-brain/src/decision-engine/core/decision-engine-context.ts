import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface DecisionEngineContext {
  readonly tenantId: string;
  readonly correlationId: string;
  readonly initiatedBy: ExecutiveRole;
  readonly category: string;
  readonly timestamp: Date;
  readonly budgetUSD?: number;
  readonly metadata?: Record<string, any>;
}
