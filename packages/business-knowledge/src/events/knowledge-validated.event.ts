import { KnowledgeId } from '../identity/knowledge-id.js';

export interface KnowledgeValidatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly knowledgeId: KnowledgeId;
  readonly uniqueCode: string;
  readonly validatedByOperatorRoleId: string;
  readonly overallCompletenessRatio: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
