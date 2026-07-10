import { EntityType } from '../ontology/entity-type.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface RelationshipRule {
  readonly ruleId: string;
  readonly name: string;
  readonly sourceEntityType: EntityType;
  readonly targetEntityType: EntityType;
  readonly relationshipType: RelationshipType;
  readonly description?: string;
  readonly isStrict: boolean; // if true, connection is strictly forbidden or strictly required
}
