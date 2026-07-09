import { ExecutionStage } from './execution-stage.js';
import { DependencyMap } from './dependency-map.js';

export interface ExecutionPlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly description: string;
  readonly stages: ExecutionStage[];
  readonly dependencyMap: DependencyMap;
  readonly criticalPathStageIds: string[];
  readonly executionRisks: string[];
  readonly status: 'DRAFT' | 'APPROVED' | 'ACTIVE' | 'ARCHIVED';
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
