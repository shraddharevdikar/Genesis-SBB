import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface DeliversEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.DELIVERS;
  readonly deliverableDescription?: string;
  readonly deliveryChannel?: string;
}
