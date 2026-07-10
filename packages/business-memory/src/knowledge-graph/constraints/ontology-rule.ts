import { EntityCategory } from '../ontology/entity-category.js';
import { RelationshipCategory } from '../ontology/relationship-category.js';

export interface OntologyRule {
  readonly ruleId: string;
  readonly code: string;
  readonly name: string;
  readonly allowedSourceCategories: EntityCategory[];
  readonly allowedTargetCategories: EntityCategory[];
  readonly allowedRelationshipCategories: RelationshipCategory[];
  readonly isEnforced: boolean;
}
