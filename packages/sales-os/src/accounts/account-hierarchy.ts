import { AccountId } from './customer-account.js';

export interface AccountHierarchy {
  readonly parentAccountId?: AccountId;
  readonly ultimateGlobalParentAccountId?: AccountId;
  readonly depthLevelNumeric: number; // 0 for ultimate parent, 1 for subsidiary, etc.
  readonly childAccountIdsList: AccountId[];
  readonly corporateDivisionCode?: string; // e.g., "DIV-EUROPE"
}
