import { AccountId } from '../accounts/customer-account.js';
import { OpportunityLifecycleState } from '../core/sales-lifecycle.js';
import { OpportunityStage } from './opportunity-stage.js';
import { OpportunityValue } from './opportunity-value.js';
import { WinProbability } from './win-probability.js';

export interface OpportunityId {
  readonly value: string;
}

export interface SalesOpportunity {
  readonly opportunityId: OpportunityId;
  readonly uniqueOpportunityCode: string; // e.g., "OPP-SBB-SAAS-2026"
  readonly displayName: string;
  readonly parentAccountId: AccountId;
  readonly activeStage: OpportunityStage;
  readonly valueDetails: OpportunityValue;
  readonly winProbability: WinProbability;
  readonly competitorsList: string[]; // List of competitor names
  readonly closedReasonNotesText?: string; // Reason for Closed Won or Closed Lost
  readonly expectedCloseDate: Date;
  readonly actualClosedDate?: Date;
  readonly currentState: OpportunityLifecycleState;
  readonly ownerOperatorRoleId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
