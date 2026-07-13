export interface EngineTwinContext {
  readonly snapshotId: string;
  readonly measuredVitals: string[];
  readonly aggregateHealthScore: number;
  readonly isSimulationRun: boolean;
}
