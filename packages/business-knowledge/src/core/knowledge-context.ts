import { KnowledgeId } from '../identity/knowledge-id.js';

export interface KnowledgeContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeKnowledgeId?: KnowledgeId;
  readonly timestamp: Date;
}
