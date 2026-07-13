import { ContextScopeType } from '../filters/context-scope.js';

export interface ContextPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly requiresSignatureForDistribution: boolean;
  readonly restrictToScopes: ContextScopeType[];
  readonly enforceAnonymizationForExternalAdvisors: boolean;
}
