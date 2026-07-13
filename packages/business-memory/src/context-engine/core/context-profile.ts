import { ContextScope } from '../filters/context-scope.js';

export interface ContextProfile {
  readonly profileId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly defaultScopes: ContextScope[];
  readonly targetExecutionRoleIds: string[];
  readonly minRelevanceThreshold: number;
}
