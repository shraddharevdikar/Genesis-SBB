import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface CapabilityNode extends GraphNode {
  readonly entityType: EntityType.CAPABILITY;
  readonly capabilityId: string;
  readonly maturityLevel: 'INITIAL' | 'MANAGED' | 'DEFINED' | 'QUANTITATIVE' | 'OPTIMIZING';
  readonly businessDomain: string; // e.g. "Customer Relationship Management"
  readonly capabilityOwnerRoleId?: string;
}
