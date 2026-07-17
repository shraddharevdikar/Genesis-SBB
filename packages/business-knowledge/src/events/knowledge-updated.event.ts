import { KnowledgeId } from '../identity/knowledge-id.js';

export interface KnowledgeUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly knowledgeId: KnowledgeId;
  readonly uniqueCode: string;
  readonly updatedMajorVersion: number;
  readonly updatedMinorVersion: number;
  readonly changedByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
