import { EntityType } from '../ontology/entity-type.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface GraphQuery {
  readonly nodeTypes?: EntityType[];
  readonly edgeTypes?: RelationshipType[];
  readonly searchPhrase?: string;
  readonly limit?: number;
  readonly offset?: number;
}
