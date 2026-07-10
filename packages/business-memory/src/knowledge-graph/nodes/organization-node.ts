import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface OrganizationNode extends GraphNode {
  readonly entityType: EntityType.ORGANIZATION;
  readonly legalName: string;
  readonly taxId?: string;
  readonly headquartersLocation?: string;
  readonly industrySector: string;
  readonly totalEmployees?: number;
}
