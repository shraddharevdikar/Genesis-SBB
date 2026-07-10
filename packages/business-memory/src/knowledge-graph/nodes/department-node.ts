import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface DepartmentNode extends GraphNode {
  readonly entityType: EntityType.DEPARTMENT;
  readonly departmentCode: string;
  readonly budgetUSD?: number;
  readonly headOfDepartmentRoleId?: string; // internal SBB role coordinate
}
