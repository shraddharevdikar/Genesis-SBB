export interface PromptPerformance {
  readonly promptId: string;
  readonly version: string;
  readonly averageLatencyMs: number;
  readonly requestCount: number;
  readonly successRate: number;
  readonly positiveFeedbackCount: number;
  readonly negativeFeedbackCount: number;
}
