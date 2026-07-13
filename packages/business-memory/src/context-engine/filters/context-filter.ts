import { ContextScope } from './context-scope.js';
import { PrivacyLevel } from '../../governance/privacy-level.js';

export interface ContextFilter {
  readonly filterId: string;
  readonly tenantId: string;
  readonly scopes: ContextScope[];
  readonly maximumPrivacyLevelAllowed: PrivacyLevel;
  readonly excludeSources: Array<'MEMORY' | 'GRAPH' | 'TWIN' | 'DECISION' | 'LEARNING'>;
  readonly excludeKeywords: string[];
}
