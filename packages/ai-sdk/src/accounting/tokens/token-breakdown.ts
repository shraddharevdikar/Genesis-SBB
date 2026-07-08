export interface TokenBreakdown {
  readonly promptBreakdown?: {
    readonly systemInstructions?: number;
    readonly userQuery?: number;
    readonly history?: number;
    readonly tools?: number;
  };
  readonly completionBreakdown?: {
    readonly reasoning?: number;
    readonly textGeneration?: number;
    readonly toolCalls?: number;
  };
}
