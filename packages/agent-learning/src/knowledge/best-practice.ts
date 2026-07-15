export interface BestPractice {
  readonly practiceId: string;
  readonly tenantId: string;
  readonly domainsList: string[]; // e.g. ["MAINTENANCE", "LOGISTICS"]
  readonly standardProcedureDescription: string;
  readonly expectedCostSavingsChf: number;
  readonly typicalDurationReductionPercent: number;
  readonly isSystemDefaultBestPractice: boolean;
  readonly createdAt: Date;
  readonly lastValidatedAt: Date;
}
