import { KnowledgeId } from '../identity/knowledge-id.js';
import { KnowledgeDomainCode } from './knowledge-domain.js';
import { KnowledgeCategoryCode } from './knowledge-category.js';
import { KnowledgeSource } from './knowledge-source.js';
import { KnowledgeLifecycle } from '../core/knowledge-lifecycle.js';
import { KnowledgeVersion } from '../core/knowledge-version.js';

export interface KnowledgeObject {
  readonly knowledgeId: KnowledgeId;
  readonly tenantId: string;
  readonly uniqueCode: string; // e.g. "KNW-FIN-TAX-2026"
  readonly displayName: string;
  readonly summaryDescription: string;
  readonly domain: KnowledgeDomainCode;
  readonly category: KnowledgeCategoryCode;
  readonly source: KnowledgeSource;
  readonly version: KnowledgeVersion;
  readonly lifecycle: KnowledgeLifecycle;
}
