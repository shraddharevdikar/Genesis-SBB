import { TwinContext } from './twin-context.js';
import { TwinState } from './twin-state.js';
import { TwinSnapshot } from './twin-snapshot.js';
import { BusinessHealthIndex } from '../health/business-health-index.js';
import { Scenario } from '../simulation/scenario.js';
import { ScenarioImpact } from '../simulation/scenario-impact.js';

export interface BusinessDigitalTwin {
  /**
   * Captures the current, real-time aggregate state of the enterprise.
   */
  captureState(
    context: TwinContext
  ): Promise<TwinState>;

  /**
   * Freezes the current operational state into an immutable historical snapshot.
   */
  createSnapshot(
    context: TwinContext,
    label: string,
    description?: string
  ): Promise<TwinSnapshot>;

  /**
   * Applies state updates or feeds operational signals directly into the Twin.
   */
  updateState(
    context: TwinContext,
    stateUpdates: Partial<TwinState>
  ): Promise<TwinState>;

  /**
   * Diff and compare two historical snapshots of the organization state.
   */
  compareSnapshots(
    context: TwinContext,
    baseSnapshotId: string,
    comparisonSnapshotId: string
  ): Promise<{
    readonly timeDeltaMs: number;
    readonly healthScoreDelta: number;
    readonly changesSummary: string[];
  }>;

  /**
   * Recalculates and evaluates the overall multidimensional health index of the enterprise.
   */
  evaluateEnterpriseHealth(
    context: TwinContext,
    state: TwinState
  ): Promise<BusinessHealthIndex>;

  /**
   * Generates projected impacts of a strategic simulation scenario on the Digital Twin.
   */
  simulateScenario(
    context: TwinContext,
    scenario: Scenario
  ): Promise<ScenarioImpact>;
}
