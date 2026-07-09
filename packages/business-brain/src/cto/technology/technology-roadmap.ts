export interface RoadmapInitiative {
  readonly initiativeId: string;
  readonly name: string;
  readonly description: string;
  readonly category: 'INFRASTRUCTURE' | 'PRODUCT_ENGINEERING' | 'SECURITY' | 'DATA_AI' | 'PLATFORM_OPS';
  readonly startQuarter: string; // e.g., "Q1-2027"
  readonly endQuarter: string;   // e.g., "Q3-2027"
  readonly status: 'BACKLOG' | 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'DELAYED';
  readonly budgetUSD: number;
  readonly dependentOnInitiativeIds: string[];
}

export interface TechnologyRoadmap {
  readonly roadmapId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly description: string;
  readonly initiatives: RoadmapInitiative[];
  readonly lastUpdated: Date;
}
