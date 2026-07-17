import { KnowledgeId } from '../identity/knowledge-id.js';
import { ConceptId } from '../identity/concept-id.js';
import { FactId } from '../identity/fact-id.js';
import { RelationshipId } from '../identity/relationship-id.js';
import { KnowledgeContext } from './knowledge-context.js';
import { KnowledgeObject } from '../knowledge/knowledge-object.js';
import { KnowledgeDomainCode } from '../knowledge/knowledge-domain.js';
import { KnowledgeCategoryCode } from '../knowledge/knowledge-category.js';
import { KnowledgeSource } from '../knowledge/knowledge-source.js';
import { BusinessConcept } from '../concepts/business-concept.js';
import { BusinessFact } from '../facts/business-fact.js';
import { KnowledgeRelationship } from '../relationships/knowledge-relationship.js';
import { RelationshipTypeCode } from '../relationships/relationship-type.js';
import { RelationshipStrength } from '../relationships/relationship-strength.js';
import { KnowledgeQuality } from '../governance/knowledge-quality.js';

export interface KnowledgeFramework {
  /**
   * Spawns a brand-new multi-tenant, domain-independent business knowledge object metadata blueprint.
   */
  createKnowledgeObject(
    uniqueCode: string,
    domain: KnowledgeDomainCode,
    category: KnowledgeCategoryCode,
    displayName: string,
    summaryDescription: string,
    source: KnowledgeSource,
    context: KnowledgeContext
  ): Promise<KnowledgeObject>;

  /**
   * Registers a brand-new corporate verified business fact with confidence ratings and validity bounds.
   */
  registerBusinessFact(
    knowledgeId: KnowledgeId,
    fact: BusinessFact,
    context: KnowledgeContext
  ): Promise<FactId>;

  /**
   * Defines a reusable standard glossary term or category concept mapped to organizational taxonomies.
   */
  defineConcept(
    knowledgeId: KnowledgeId,
    concept: BusinessConcept,
    context: KnowledgeContext
  ): Promise<ConceptId>;

  /**
   * Links two distinct knowledge objects via typed and weighted semantic graph edges.
   */
  linkKnowledge(
    sourceKnowledgeObjectId: KnowledgeId,
    targetKnowledgeObjectId: KnowledgeId,
    relationshipType: RelationshipTypeCode,
    strength: RelationshipStrength,
    context: KnowledgeContext
  ): Promise<RelationshipId>;

  /**
   * Audits completeness scores and flags hallucinations to assert quality standards of active objects.
   */
  validateKnowledge(
    knowledgeId: KnowledgeId,
    context: KnowledgeContext
  ): Promise<KnowledgeQuality>;

  /**
   * Sunsets a verified knowledge node, marking its queryable state as RETIRED.
   */
  retireKnowledge(
    knowledgeId: KnowledgeId,
    context: KnowledgeContext
  ): Promise<void>;
}
