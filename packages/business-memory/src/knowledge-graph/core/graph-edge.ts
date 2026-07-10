import { RelationshipType } from '../ontology/relationship-type.js';
import { RelationshipStrength } from '../relationships/relationship-strength.js';
import { RelationshipConfidence } from '../relationships/relationship-confidence.js';
import { RelationshipDirection } from '../relationships/relationship-direction.js';

export interface GraphEdge {
  readonly edgeId: string;
  readonly tenantId: string;
  readonly sourceNodeId: string;
  readonly targetNodeId: string;
  readonly relationshipType: RelationshipType;
  readonly direction: RelationshipDirection;
  readonly strength: RelationshipStrength;
  readonly confidence: RelationshipConfidence;
  readonly effectiveDate: Date;
  readonly expirationDate?: Date;
  readonly metadata: Record<string, any>;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
