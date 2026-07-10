import { MemoryContext } from '../../core/memory-context.js';

export interface TwinContext extends MemoryContext {
  readonly targetSnapshotId?: string;
  readonly dryRun?: boolean;
  readonly simulationScenarioId?: string;
}
