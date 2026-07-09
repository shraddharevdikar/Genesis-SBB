import { OrganizationalRelationship } from './organizational-relationship.js';

export interface DependencyMap {
  readonly mapId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly activeRelationships: OrganizationalRelationship[];
  readonly totalCircularDependenciesCount: number;
  readonly bottleneckScorePercent: number; // calculated percentage of bottleneck points
  readonly lastCalculatedAt: Date;
}
