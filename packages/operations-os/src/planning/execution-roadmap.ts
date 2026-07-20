export interface RoadmapMilestone {
  readonly milestoneIdString: string;
  readonly labelString: string;
  readonly targetDate: Date;
  readonly criticalFlag: boolean;
}

export interface ExecutionRoadmap {
  readonly roadmapId: string;
  readonly uniqueRoadmapCode: string; // e.g. "RDM-GLOBAL-REALLOCATION"
  readonly associatedPlanIdString: string;
  readonly displayName: string;
  readonly milestonesList: RoadmapMilestone[];
  readonly lastCalculatedAt: Date;
}
