export interface StrategicObservation {
  readonly observationId: string;
  readonly tenantId: string;
  readonly sourceContext: string; // e.g., "Q2 Earnings Review" or "Competitor Pricing Launch"
  readonly observedAt: Date;
  readonly keyTakeaways: string[];
  readonly dynamicSignals: Record<string, string>;
}
