import { PolicyScopeTypeCode } from './policy-scope.js';

export interface PolicyTarget {
  readonly targetId: string;
  readonly targetTypeCode: PolicyScopeTypeCode;
  readonly referencedUniqueCode: string; // exact code of target element (e.g. "BOSF-006")
  readonly exclusionListCodeFilterTags?: string[]; // exclusion parameters
}
