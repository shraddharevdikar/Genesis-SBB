import { EntityType } from './entity-type.js';
import { RelationshipType } from './relationship-type.js';

export interface AllowedConnectionRule {
  readonly source: EntityType;
  readonly target: EntityType;
  readonly allowedRelationships: RelationshipType[];
}

export interface GraphSchema {
  readonly schemaId: string;
  readonly version: string;
  readonly allowedConnectionRules: AllowedConnectionRule[];
  readonly description?: string;
  readonly lastUpdatedAt: Date;
}
