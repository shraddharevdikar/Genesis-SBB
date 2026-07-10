import { GraphNode } from '../core/graph-node.js';

export interface NodeCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly node: GraphNode;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}
