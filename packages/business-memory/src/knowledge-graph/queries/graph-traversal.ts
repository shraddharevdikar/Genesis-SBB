import { EntityType } from '../ontology/entity-type.js';
import { RelationshipType } from '../ontology/relationship-type.js';
import { RelationshipDirection } from '../relationships/relationship-direction.js';

export interface TraversalStep {
  readonly allowedEntityTypes?: EntityType[];
  readonly allowedRelationshipTypes?: RelationshipType[];
  readonly direction?: RelationshipDirection;
}

export interface GraphTraversal {
  readonly startNodeId: string;
  readonly steps: TraversalStep[];
  readonly maxDepth?: number;
  readonly returnIntermediateNodes?: boolean;
}
