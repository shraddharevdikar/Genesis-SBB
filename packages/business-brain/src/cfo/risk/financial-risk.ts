import { FinancialMitigation } from './financial-mitigation.js';

export interface FinancialRisk {
  readonly riskId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly category: 'MARKET_VOLATILITY' | 'LIQUIDITY_DRAIN' | 'BURN_ACCELERATION' | 'REGULATORY_COMPLIANCE' | 'CURRENCY_EXCHANGE';
  readonly probability: number; // 1 to 5 scale
  readonly severity: number;    // 1 to 5 scale
  readonly mitigationPlans: FinancialMitigation[];
  readonly detectedAt: Date;
}
