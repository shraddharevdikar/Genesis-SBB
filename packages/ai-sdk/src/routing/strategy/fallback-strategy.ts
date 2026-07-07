export interface RetryPolicy {
  readonly maxAttempts: number;
  readonly initialDelayMs: number;
  readonly backoffMultiplier: number;
  readonly retryableStatusCodes?: number[];
}

export interface FallbackStrategyConfig {
  readonly primaryProviderId: string;
  readonly secondaryProviderId: string;
  readonly retryPolicy: RetryPolicy;
}

export class FallbackStrategy {
  constructor(private readonly config: FallbackStrategyConfig) {}

  public getPrimaryProviderId(): string {
    return this.config.primaryProviderId;
  }

  public getSecondaryProviderId(): string {
    return this.config.secondaryProviderId;
  }

  public getRetryPolicy(): RetryPolicy {
    return this.config.retryPolicy;
  }
}
