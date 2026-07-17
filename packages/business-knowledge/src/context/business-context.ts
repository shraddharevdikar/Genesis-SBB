import { ContextualScope } from './contextual-scope.js';
import { ContextualReference } from './contextual-reference.js';

export interface BusinessContext {
  readonly contextId: string;
  readonly uniqueContextCode: string; // e.g. "CTX-APAC-MANUFACTURING"
  readonly scope: ContextualScope;
  readonly associatedReferencesList: ContextualReference[];
}
