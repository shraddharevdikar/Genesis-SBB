import { KnowledgeId } from '../identity/knowledge-id.js';

export interface KnowledgeCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly knowledgeId: KnowledgeId;
  readonly uniqueCode: string;
  readonly domainCode: string;
  readonly categoryCode: string;
  readonly createdByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
