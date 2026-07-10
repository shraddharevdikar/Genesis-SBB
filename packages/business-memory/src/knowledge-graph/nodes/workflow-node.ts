import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface WorkflowNode extends GraphNode {
  readonly entityType: EntityType.WORKFLOW;
  readonly workflowId: string;
  readonly stepCount: number;
  readonly executionEngine: string; // e.g. "Temporal", "Airflow", "Camunda"
  readonly averageExecutionTimeMs?: number;
}
