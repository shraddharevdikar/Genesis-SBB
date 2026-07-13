import { Context } from '../core/context.js';
import { ContextProfile } from '../core/context-profile.js';
import { ContextFilter } from '../filters/context-filter.js';

export interface ContextAssembler {
  /**
   * Evaluates the active profile and filters, pulling from various registered engines to compile context.
   */
  assemble(
    tenantId: string,
    profile: ContextProfile,
    filter?: ContextFilter
  ): Promise<Context>;
}
