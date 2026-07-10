import { GraphEdge } from '../core/graph-edge.js';
import { RelationshipStrength } from '../relationships/relationship-strength.js';
import { RelationshipConfidence } from '../relationships/relationship-confidence.js';

export interface RelationshipUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly edgeId: string;
  readonly previousStrength?: RelationshipStrength;
  readonly previousConfidence?: RelationshipConfidence;
  readonly newEdge: GraphEdge;
  readonly updatedByRoleId: string;
  readonly timestamp: Date;
}
