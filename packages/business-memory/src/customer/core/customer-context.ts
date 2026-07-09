import { MemoryContext } from '../../core/memory-context.js';

export interface CustomerContext extends MemoryContext {
  readonly activeCustomerOrganizationId?: string;
  readonly activeDealOpportunityId?: string;
  readonly isQbrPreparation: boolean;
  readonly relationshipExecutiveRoleId?: string;
}
