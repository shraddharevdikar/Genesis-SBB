import { FeatureFlags } from './types.js';

/**
 * Service to manage and query feature flags.
 * Supports standard environment values and programmatic runtime overrides (e.g. for testing).
 */
export class FeatureFlagService {
  private flags: FeatureFlags;

  constructor(flags: FeatureFlags) {
    this.flags = { ...flags };
  }

  /**
   * Returns true if the specific feature flag is active.
   */
  isEnabled(flag: keyof FeatureFlags): boolean {
    return this.flags[flag] === true;
  }

  /**
   * Dynamically toggles a flag value at runtime. Useful for testing pipelines or A/B hooks.
   */
  setOverride(flag: keyof FeatureFlags, value: boolean): void {
    this.flags[flag] = value;
  }

  /**
   * Resets all flags back to their initial state.
   */
  reset(initialFlags: FeatureFlags): void {
    this.flags = { ...initialFlags };
  }

  /**
   * Exposes a snapshot copy of all active flags.
   */
  getAllFlags(): FeatureFlags {
    return { ...this.flags };
  }
}
