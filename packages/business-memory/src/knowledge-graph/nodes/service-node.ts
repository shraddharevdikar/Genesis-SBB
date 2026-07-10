import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface ServiceNode extends GraphNode {
  readonly entityType: EntityType.SERVICE;
  readonly serviceId: string;
  readonly slaResponseTimeMs: number;
  readonly operationalStatus: 'UP' | 'DOWN' | 'DEGRADED';
  readonly internalOwnerRoleId?: string;
}
