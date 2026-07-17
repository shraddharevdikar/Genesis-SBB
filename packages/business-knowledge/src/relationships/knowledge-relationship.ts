import { RelationshipId } from '../identity/relationship-id.js';
import { KnowledgeId } from '../identity/knowledge-id.js';
import { RelationshipTypeCode } from './relationship-type.js';
import { RelationshipStrength } from './relationship-strength.js';

export interface KnowledgeRelationship {
  readonly relationshipId: RelationshipId;
  readonly uniqueRelationshipCode: string; // e.g. "REL-TAX-INHERIT"
  readonly sourceKnowledgeObjectId: KnowledgeId;
  readonly targetKnowledgeObjectId: KnowledgeId;
  readonly typeCode: RelationshipTypeCode;
  readonly strength: RelationshipStrength;
}
