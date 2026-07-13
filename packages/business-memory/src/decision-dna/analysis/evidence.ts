export interface Evidence {
  readonly evidenceId: string;
  readonly sourceUri: string;
  readonly description: string;
  readonly evidenceType: 'MARKET_RESEARCH' | 'SYSTEM_TELEMETRY' | 'EXECUTIVE_SURVEY' | 'FINANCIAL_MODEL' | 'HISTORIC_PERFORMANCE';
  readonly reliabilityRating: number;
  readonly dateCollected: Date;
}
