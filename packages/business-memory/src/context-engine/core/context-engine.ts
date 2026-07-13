import { ContextId } from '../identity/context-id.js';
import { Context, ContextItem } from './context.js';
import { ContextProfile } from './context-profile.js';
import { ContextFilter } from '../filters/context-filter.js';
import { ContextPriority } from '../priority/context-priority.js';
import { ContextScore } from '../priority/context-score.js';
import { ContextQuality } from '../metrics/context-quality.js';

export interface ContextEngine {
  /**
   * Fluid assembly initialization for programmatic building of new contexts.
   */
  buildContext(
    tenantId: string,
    profile: ContextProfile
  ): Promise<Context>;

  /**
   * Orchestrates the raw filters and permissions across SBB engines to assemble a unified view.
   */
  assembleContext(
    tenantId: string,
    profile: ContextProfile,
    filter?: ContextFilter
  ): Promise<Context>;

  /**
   * Merges dual context aggregates into one single consolidated context with resolved conflicts.
   */
  mergeContexts(
    contextA: Context,
    contextB: Context
  ): Promise<Context>;

  /**
   * Computes the final urgency-weighted priority level for a given piece of information.
   */
  prioritizeContext(
    item: ContextItem,
    urgencyModifier: number
  ): Promise<ContextPriority>;

  /**
   * Applies the exact scope filters and security privacy boundaries to filter out incompatible nodes.
   */
  filterContext(
    context: Context,
    filter: ContextFilter
  ): Promise<Context>;

  /**
   * Evaluates the absolute scoring composite metrics of an assembled context piece.
   */
  scoreContext(
    item: ContextItem
  ): Promise<ContextScore>;

  /**
   * Validates correctness, anomaly scores, and compliance policies.
   */
  validateContext(
    context: Context
  ): Promise<ContextQuality>;
}
