import { StrategicContext } from './strategic-context.js';

export interface BusinessAnalysis {
  readonly analysisId: string;
  readonly tenantId: string;
  readonly timestamp: Date;
  readonly SWOT: {
    readonly strengths: string[];
    readonly weaknesses: string[];
    readonly opportunities: string[];
    readonly threats: string[];
  };
  readonly strategicContext: StrategicContext;
  readonly financialSummary?: {
    readonly revenueYTD: number;
    readonly burnRateMonthly: number;
    readonly runwayMonths: number;
    readonly operatingMargin: number;
  };
  readonly organizationalHealthScore: number; // 1-100 scale
}
