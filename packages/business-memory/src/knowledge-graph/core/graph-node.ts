import { EntityType } from '../ontology/entity-type.js';

export interface GraphNode {
  readonly nodeId: string;
  readonly tenantId: string;
  readonly entityType: EntityType;
  readonly displayName: string;
  readonly metadata: Record<string, any>;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
