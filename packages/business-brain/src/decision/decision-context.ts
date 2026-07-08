import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { AuthorityLevel } from '../governance/authority-level.js';

export interface DecisionContext {
  readonly baseContext: ExecutiveContext;
  readonly requiredAuthorityLevel: AuthorityLevel;
  readonly constraints: string[];
  readonly costThresholdUSD?: number;
  readonly parameters?: Record<string, any>;
}
