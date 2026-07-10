import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface EmployeeNode extends GraphNode {
  readonly entityType: EntityType.EMPLOYEE;
  readonly employeeId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly activeStatus: 'ACTIVE' | 'INACTIVE';
  readonly skillsets: string[];
}
