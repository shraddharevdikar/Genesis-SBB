import { GraphEdge } from '../core/graph-edge.js';

export interface EdgeCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly edge: GraphEdge;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}
