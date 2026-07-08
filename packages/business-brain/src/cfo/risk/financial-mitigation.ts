export interface FinancialMitigation {
  readonly mitigationId: string;
  readonly planDescription: string;
  readonly fundingRequiredUSD: number;
  readonly targetReductionPercent: number; // e.g., 50 for 50%
  readonly owner: string; // e.g., 'CFO', 'Treasurer'
  readonly status: 'DRAFT' | 'IMPLEMENTED' | 'STANDBY';
}
