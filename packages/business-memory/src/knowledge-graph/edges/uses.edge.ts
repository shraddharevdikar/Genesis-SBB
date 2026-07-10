import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipType } from '../ontology/relationship-type.js';

export interface UsesEdge extends GraphEdge {
  readonly relationshipType: RelationshipType.USES;
  readonly frequency?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'AD_HOC';
  readonly isMissionCritical: boolean;
}
