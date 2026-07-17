import { KnowledgeId } from '../identity/knowledge-id.js';

export interface KnowledgeRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredKnowledgeId: KnowledgeId;
  readonly uniqueCode: string;
  readonly retiredByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
