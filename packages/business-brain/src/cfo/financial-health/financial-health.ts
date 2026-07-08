import { LiquidityStatus } from './liquidity-status.js';
import { ProfitabilityStatus } from './profitability-status.js';
import { CashFlowStatus } from './cashflow-status.js';

export interface FinancialHealth {
  readonly healthId: string;
  readonly overallStatus: 'CRITICAL' | 'WARNING' | 'STABLE' | 'HEALTHY';
  readonly liquidity: LiquidityStatus;
  readonly profitability: ProfitabilityStatus;
  readonly cashFlow: CashFlowStatus;
  readonly netBurnRateUSD: number;
  readonly exactRunwayMonths: number;
  readonly evaluatedAt: Date;
}
