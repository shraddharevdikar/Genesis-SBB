import { ContextId } from '../identity/context-id.js';
import { ContextProfile } from './context-profile.js';
import { RelevanceModel } from '../relevance/relevance-model.js';
import { ContextPriorityLevel } from '../priority/context-priority.js';

export interface ContextItem {
  readonly itemId: string;
  readonly sourceType: 'MEMORY' | 'GRAPH' | 'TWIN' | 'DECISION' | 'LEARNING';
  readonly sourceEntityId: string;
  readonly payload: Record<string, any>;
  readonly priority: ContextPriorityLevel;
  readonly relevance: RelevanceModel;
  readonly gatheredAt: Date;
}

export interface Context {
  readonly contextId: ContextId;
  readonly tenantId: string;
  readonly profile: ContextProfile;
  readonly items: ContextItem[];
  readonly aggregateRelevanceScore: number;
  readonly assembledAt: Date;
  readonly expiresAt?: Date;
}
