import { FeatureFlagContextType } from '@sbb/shared';

export class FeatureFlagContext implements FeatureFlagContextType {
  public readonly flags?: Record<string, boolean>;

  constructor(options?: FeatureFlagContextType) {
    this.flags = options?.flags ? { ...options.flags } : {};
    Object.freeze(this);
  }

  public isEnabled(flagName: string): boolean {
    return !!this.flags?.[flagName];
  }
}
