import { GraphNode } from '../core/graph-node.js';
import { EntityType } from '../ontology/entity-type.js';

export interface GoalNode extends GraphNode {
  readonly entityType: EntityType.GOAL;
  readonly goalId: string;
  readonly targetValue: string;
  readonly baselineValue?: string;
  readonly currentValue?: string;
  readonly timeHorizon: 'QUARTERLY' | 'ANNUAL' | 'THREE_YEAR' | 'FIVE_YEAR';
  readonly metricName: string;
}
