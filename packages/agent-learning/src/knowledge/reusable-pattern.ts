export interface ReusablePattern {
  readonly patternId: string;
  readonly tenantId: string;
  readonly name: string; // e.g. "SBB_FAILOVER_CARRIER_RESERVATION"
  readonly intentDescription: string;
  readonly structureSequenceJson: string; // The step/phase arrangement that was verified as highly successful
  readonly successRatePercent: number; // Percentage of times this pattern successfully terminated without SLA lags
  readonly countOfApplications: number;
  readonly addedAt: Date;
}
